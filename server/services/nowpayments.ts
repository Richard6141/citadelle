const NOWPAYMENTS_API_URL = 'https://api.nowpayments.io/v1';

interface CreateInvoiceParams {
  price_amount: number;
  price_currency: string;
  order_id: string;
  order_description: string;
  success_url: string;
  cancel_url: string;
  ipn_callback_url?: string;
}

interface InvoiceResponse {
  id: string;
  token_id: string;
  order_id: string;
  order_description: string;
  price_amount: string;
  price_currency: string;
  pay_currency: string | null;
  ipn_callback_url: string;
  invoice_url: string;
  success_url: string;
  cancel_url: string;
  created_at: string;
  updated_at: string;
}

interface PaymentStatus {
  payment_id: number;
  invoice_id: number;
  payment_status: string;
  pay_address: string;
  price_amount: number;
  price_currency: string;
  pay_amount: number;
  actually_paid: number;
  pay_currency: string;
  order_id: string;
  order_description: string;
  purchase_id: number;
  created_at: string;
  updated_at: string;
  outcome_amount: number;
  outcome_currency: string;
}

class NowPaymentsService {
  private get apiKey(): string {
    const key = process.env.NOWPAYMENTS_API_KEY || '';
    if (!key) {
      console.warn('WARNING: NOWPAYMENTS_API_KEY is not set');
    }
    return key;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${NOWPAYMENTS_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'x-api-key': this.apiKey,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(error.message || `API error: ${response.status}`);
    }

    return response.json();
  }

  async getStatus(): Promise<{ message: string }> {
    return this.request('/status');
  }

  async getAvailableCurrencies(): Promise<{ currencies: string[] }> {
    return this.request('/currencies');
  }

  async getMinimumPaymentAmount(currency_from: string, currency_to: string): Promise<{ min_amount: number }> {
    return this.request(`/min-amount?currency_from=${currency_from}&currency_to=${currency_to}`);
  }

  async createInvoice(params: CreateInvoiceParams): Promise<InvoiceResponse> {
    return this.request('/invoice', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  }

  async getPaymentStatus(paymentId: string): Promise<PaymentStatus> {
    return this.request(`/payment/${paymentId}`);
  }

  async getInvoicePaymentStatus(invoiceId: string): Promise<PaymentStatus[]> {
    return this.request(`/invoice-payment/${invoiceId}`);
  }

  verifyIpnSignature(payload: any, signature: string): boolean {
    const crypto = require('crypto');
    const ipnSecret = process.env.NOWPAYMENTS_IPN_SECRET || '';

    if (!ipnSecret) {
      console.warn('WARNING: NOWPAYMENTS_IPN_SECRET is not set');
      return false;
    }

    const sortedPayload = JSON.stringify(payload, Object.keys(payload).sort());
    const hmac = crypto.createHmac('sha512', ipnSecret);
    hmac.update(sortedPayload);
    const calculatedSignature = hmac.digest('hex');

    return calculatedSignature === signature;
  }
}

export const nowPaymentsService = new NowPaymentsService();
export type { CreateInvoiceParams, InvoiceResponse, PaymentStatus };
