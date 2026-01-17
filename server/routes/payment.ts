import { Router, Request, Response } from 'express';
import { nowPaymentsService } from '../services/nowpayments.js';
import crypto from 'crypto';

const router = Router();

// Types pour les licences
interface License {
  id: string;
  name: string;
  price: number;
  duration: string;
  durationDays: number;
}

const LICENSES: Record<string, License> = {
  'decouverte': {
    id: 'decouverte',
    name: 'Découverte',
    price: 99,
    duration: '3 jours',
    durationDays: 3
  },
  'standard': {
    id: 'standard',
    name: 'Standard',
    price: 499,
    duration: '14 jours',
    durationDays: 14
  },
  'classique': {
    id: 'classique',
    name: 'Classique',
    price: 799,
    duration: '30 jours',
    durationDays: 30
  }
};

// Stockage temporaire des commandes (en production, utiliser une base de données)
const orders: Map<string, {
  orderId: string;
  licenseId: string;
  email: string;
  telegramUsername: string;
  invoiceId?: string;
  status: 'pending' | 'paid' | 'expired' | 'cancelled';
  createdAt: Date;
}> = new Map();

// GET /api/payment/licenses - Liste des licences disponibles
router.get('/licenses', (req: Request, res: Response) => {
  res.json(Object.values(LICENSES));
});

// POST /api/payment/create-invoice - Créer une facture
router.post('/create-invoice', async (req: Request, res: Response) => {
  try {
    const { licenseId, email, telegramUsername } = req.body;

    // Validation
    if (!licenseId || !email || !telegramUsername) {
      return res.status(400).json({
        error: 'Missing required fields: licenseId, email, telegramUsername'
      });
    }

    const license = LICENSES[licenseId];
    if (!license) {
      return res.status(400).json({ error: 'Invalid license ID' });
    }

    // Générer un ID de commande unique
    const orderId = `CIT-${Date.now()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001';

    // Créer la facture NOWPayments
    const invoice = await nowPaymentsService.createInvoice({
      price_amount: license.price,
      price_currency: 'USD',
      order_id: orderId,
      order_description: `Licence ${license.name} - ${license.duration} - Citadelle`,
      success_url: `${frontendUrl}/paiement/succes?order_id=${orderId}`,
      cancel_url: `${frontendUrl}/paiement/annule?order_id=${orderId}`,
      ipn_callback_url: `${backendUrl}/api/payment/webhook`
    });

    // Sauvegarder la commande
    orders.set(orderId, {
      orderId,
      licenseId,
      email,
      telegramUsername,
      invoiceId: invoice.id,
      status: 'pending',
      createdAt: new Date()
    });

    res.json({
      success: true,
      orderId,
      invoiceId: invoice.id,
      invoiceUrl: invoice.invoice_url,
      amount: license.price,
      currency: 'USD',
      license: license.name,
      duration: license.duration
    });

  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to create invoice'
    });
  }
});

// GET /api/payment/status/:orderId - Vérifier le statut d'une commande
router.get('/status/:orderId', async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const order = orders.get(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Si on a un invoiceId, vérifier le statut auprès de NOWPayments
    if (order.invoiceId && order.status === 'pending') {
      try {
        const payments = await nowPaymentsService.getInvoicePaymentStatus(order.invoiceId);
        if (payments && payments.length > 0) {
          const latestPayment = payments[payments.length - 1];
          if (['finished', 'confirmed'].includes(latestPayment.payment_status)) {
            order.status = 'paid';
          } else if (['expired', 'failed'].includes(latestPayment.payment_status)) {
            order.status = 'expired';
          }
        }
      } catch (e) {
        // Ignorer les erreurs de vérification
      }
    }

    res.json({
      orderId: order.orderId,
      status: order.status,
      licenseId: order.licenseId,
      license: LICENSES[order.licenseId],
      createdAt: order.createdAt
    });

  } catch (error) {
    console.error('Error checking status:', error);
    res.status(500).json({ error: 'Failed to check payment status' });
  }
});

// POST /api/payment/webhook - Webhook IPN de NOWPayments
router.post('/webhook', async (req: Request, res: Response) => {
  try {
    const signature = req.headers['x-nowpayments-sig'] as string;
    const payload = req.body;

    // Vérifier la signature si configurée
    if (process.env.NOWPAYMENTS_IPN_SECRET) {
      const isValid = nowPaymentsService.verifyIpnSignature(payload, signature);
      if (!isValid) {
        console.error('Invalid IPN signature');
        return res.status(401).json({ error: 'Invalid signature' });
      }
    }

    console.log('IPN received:', payload);

    const { order_id, payment_status } = payload;

    if (order_id) {
      const order = orders.get(order_id);
      if (order) {
        if (['finished', 'confirmed'].includes(payment_status)) {
          order.status = 'paid';
          console.log(`Order ${order_id} marked as paid`);
          // TODO: Envoyer email de confirmation
          // TODO: Ajouter l'utilisateur au canal Telegram
        } else if (['expired', 'failed'].includes(payment_status)) {
          order.status = 'expired';
          console.log(`Order ${order_id} expired/failed`);
        }
      }
    }

    res.json({ success: true });

  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// GET /api/payment/currencies - Devises disponibles
router.get('/currencies', async (req: Request, res: Response) => {
  try {
    const currencies = await nowPaymentsService.getAvailableCurrencies();
    res.json(currencies);
  } catch (error) {
    console.error('Error fetching currencies:', error);
    res.status(500).json({ error: 'Failed to fetch currencies' });
  }
});

export default router;
