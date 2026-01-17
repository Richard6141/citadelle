import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Send, Loader2, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { paymentService, OrderStatus } from "@/services/payment";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');

  const [status, setStatus] = useState<OrderStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      if (!orderId) {
        setLoading(false);
        return;
      }

      try {
        const orderStatus = await paymentService.getOrderStatus(orderId);
        setStatus(orderStatus);
      } catch (err) {
        console.error('Error fetching order status:', err);
        setError('Impossible de verifier le statut de la commande.');
      } finally {
        setLoading(false);
      }
    };

    checkStatus();

    // Poll every 10 seconds if still pending
    const interval = setInterval(() => {
      if (status?.status === 'pending') {
        checkStatus();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [orderId, status?.status]);

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">

            {loading ? (
              <div className="flex flex-col items-center">
                <Loader2 className="w-16 h-16 text-primary animate-spin mb-6" />
                <h1 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Verification en cours...
                </h1>
                <p className="text-muted-foreground">
                  Nous verifions votre paiement.
                </p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <Shield className="w-10 h-10 text-yellow-500" />
                </div>
                <h1 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Verification en attente
                </h1>
                <p className="text-muted-foreground mb-6">
                  {error}
                </p>
                <a href="https://t.me/citadelle" target="_blank" rel="noopener noreferrer">
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Contactez-nous sur Telegram
                  </Button>
                </a>
              </div>
            ) : status?.status === 'paid' ? (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
                  Paiement confirme !
                </h1>
                <p className="text-muted-foreground mb-8">
                  Merci pour votre confiance. Votre licence {status.license?.name} est maintenant active.
                </p>

                <div className="p-6 bg-card rounded-xl border border-border mb-8 w-full text-left">
                  <h2 className="font-semibold text-foreground mb-4">Prochaines etapes</h2>
                  <ol className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 font-semibold">1</span>
                      <span>Vous allez recevoir un email de confirmation.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 font-semibold">2</span>
                      <span>Rejoignez notre canal Telegram prive pour recevoir les signaux.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 font-semibold">3</span>
                      <span>Activez les notifications pour ne manquer aucun signal.</span>
                    </li>
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://t.me/citadelle" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Send className="w-5 h-5 mr-2" />
                      Rejoindre le canal Telegram
                    </Button>
                  </a>
                  <Link to="/">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Retour a l'accueil
                    </Button>
                  </Link>
                </div>

                {orderId && (
                  <p className="text-xs text-muted-foreground mt-8">
                    Numero de commande : {orderId}
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
                <h1 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Paiement en cours de verification
                </h1>
                <p className="text-muted-foreground mb-6">
                  Votre paiement est en cours de traitement. Cela peut prendre quelques minutes
                  selon la blockchain utilisee.
                </p>

                <div className="p-4 bg-muted/30 rounded-lg border border-border mb-8 w-full">
                  <p className="text-sm text-muted-foreground">
                    Cette page se met a jour automatiquement. Vous pouvez aussi nous contacter
                    sur Telegram si vous avez des questions.
                  </p>
                </div>

                <a href="https://t.me/citadelle" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Send className="w-4 h-4 mr-2" />
                    Contactez-nous sur Telegram
                  </Button>
                </a>

                {orderId && (
                  <p className="text-xs text-muted-foreground mt-8">
                    Numero de commande : {orderId}
                  </p>
                )}
              </div>
            )}

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentSuccess;
