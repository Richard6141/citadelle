import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Shield, CreditCard, Mail, Send, Loader2, AlertTriangle, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";
import { paymentService, License } from "@/services/payment";
import { useToast } from "@/hooks/use-toast";

const LICENSES: Record<string, License> = {
  'decouverte': {
    id: 'decouverte',
    name: 'Decouverte',
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

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const licenseId = searchParams.get('license') || 'standard';
  const license = LICENSES[licenseId] || LICENSES['standard'];

  const [email, setEmail] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [acceptCGV, setAcceptCGV] = useState(false);
  const [acceptRisks, setAcceptRisks] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !telegramUsername) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive"
      });
      return;
    }

    if (!acceptCGV || !acceptRisks) {
      toast({
        title: "Acceptation requise",
        description: "Veuillez accepter les conditions pour continuer.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await paymentService.createInvoice({
        licenseId: license.id,
        email,
        telegramUsername: telegramUsername.replace('@', '')
      });

      if (response.success && response.invoiceUrl) {
        // Rediriger vers la page de paiement NOWPayments
        window.location.href = response.invoiceUrl;
      } else {
        throw new Error("Failed to create invoice");
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue. Veuillez reessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <Link to="/licences" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux licences
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Finaliser votre commande
            </h1>
            <p className="text-muted-foreground">
              Completez vos informations pour acceder a Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Contact Info */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Informations de contact
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Adresse email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Pour recevoir la confirmation de votre commande.
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="telegram">Nom d'utilisateur Telegram</Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                        <Input
                          id="telegram"
                          type="text"
                          placeholder="votre_username"
                          value={telegramUsername}
                          onChange={(e) => setTelegramUsername(e.target.value)}
                          required
                          className="pl-8"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Pour vous ajouter au canal prive apres paiement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Bitcoin className="w-5 h-5 text-primary" />
                    Moyen de paiement
                  </h2>
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Cryptomonnaies</p>
                        <p className="text-sm text-muted-foreground">
                          Bitcoin, Ethereum, USDT et 100+ cryptos
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Paiement securise via NOWPayments. Vous serez redirige vers leur plateforme.
                  </p>
                </div>

                {/* Acceptations */}
                <div className="p-6 bg-card rounded-xl border border-border space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="cgv"
                      checked={acceptCGV}
                      onCheckedChange={(checked) => setAcceptCGV(checked === true)}
                    />
                    <label htmlFor="cgv" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      J'accepte les{" "}
                      <Link to="/cgv" className="text-primary hover:underline" target="_blank">
                        Conditions Generales de Vente
                      </Link>{" "}
                      et les{" "}
                      <Link to="/cgu" className="text-primary hover:underline" target="_blank">
                        Conditions Generales d'Utilisation
                      </Link>.
                      Je demande l'execution immediate du service et reconnais perdre mon droit de retractation.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="risks"
                      checked={acceptRisks}
                      onCheckedChange={(checked) => setAcceptRisks(checked === true)}
                    />
                    <label htmlFor="risks" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Je reconnais que les paris sportifs comportent des risques de perte financiere.
                      Je certifie etre majeur et agir sous ma seule responsabilite.
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold"
                  disabled={isLoading || !acceptCGV || !acceptRisks}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Redirection...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Payer ${license.price} en crypto
                    </>
                  )}
                </Button>

              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h2 className="font-semibold text-foreground mb-4">Recapitulatif</h2>

                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Licence {license.name}</p>
                        <p className="text-sm text-muted-foreground">{license.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Licence {license.name}</span>
                      <span className="text-foreground">${license.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duree</span>
                      <span className="text-foreground">{license.duration}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between font-semibold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary text-xl">${license.price}</span>
                    </div>
                  </div>
                </div>

                {/* Security Note */}
                <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Paiement securise</p>
                      <p>
                        Vos paiements sont traites de maniere securisee par NOWPayments,
                        leader du paiement crypto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
