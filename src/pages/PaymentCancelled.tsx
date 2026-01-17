import { Link, useSearchParams } from "react-router-dom";
import { XCircle, ArrowLeft, Send, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const PaymentCancelled = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">

            <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-destructive" />
            </div>

            <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
              Paiement annule
            </h1>
            <p className="text-muted-foreground mb-8">
              Votre paiement a ete annule ou a expire. Aucun montant n'a ete debite.
            </p>

            <div className="p-6 bg-card rounded-xl border border-border mb-8 text-left">
              <h2 className="font-semibold text-foreground mb-4">Pourquoi mon paiement a-t-il echoue ?</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>La session de paiement a expire (generalement apres 20-30 minutes).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Le montant envoye etait insuffisant ou dans une mauvaise devise.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Vous avez annule le paiement manuellement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Un probleme technique est survenu.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/licences">
                <Button size="lg" className="w-full sm:w-auto">
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reessayer
                </Button>
              </Link>
              <a href="https://t.me/citadelle" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Send className="w-5 h-5 mr-2" />
                  Contacter le support
                </Button>
              </a>
            </div>

            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mt-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour a l'accueil
            </Link>

            {orderId && (
              <p className="text-xs text-muted-foreground mt-8">
                Reference : {orderId}
              </p>
            )}

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentCancelled;
