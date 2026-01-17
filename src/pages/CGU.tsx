import { Link } from "react-router-dom";
import { ArrowLeft, Key, Clock, RefreshCw, Lock, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const CGU = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conditions G&eacute;n&eacute;rales d'Utilisation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conditions r&eacute;gissant l'acc&egrave;s et l'utilisation des services Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Acc&egrave;s aux contenus */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Key className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Acc&egrave;s aux contenus
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  L'acc&egrave;s aux contenus Citadelle est r&eacute;serv&eacute; aux utilisateurs disposant d'une Licence en cours
                  de validit&eacute;. Les contenus sont d&eacute;livr&eacute;s principalement via un canal priv&eacute; sur une plateforme
                  tierce (notamment Telegram) (le &laquo; Canal &raquo;).
                </p>
                <p>
                  L'utilisateur reconna&icirc;t que l'acc&egrave;s au Canal suppose la d&eacute;tention d'un compte actif sur la
                  plateforme concern&eacute;e et le respect de ses r&egrave;gles et conditions d'utilisation.
                </p>
              </div>
            </div>

            {/* Modalit&eacute;s d'acc&egrave;s */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Modalit&eacute;s d'acc&egrave;s
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les modalit&eacute;s d'acc&egrave;s au Canal sont communiqu&eacute;es par Citadelle apr&egrave;s l'activation du compte
                  et, le cas &eacute;ch&eacute;ant, apr&egrave;s paiement de la Licence.
                </p>
                <p>
                  Sauf disposition imp&eacute;rative contraire, l'acc&egrave;s est r&eacute;put&eacute; mis &agrave; disposition &agrave; compter de
                  l'envoi des instructions d'acc&egrave;s par Citadelle ; la dur&eacute;e de la Licence continue de courir
                  ind&eacute;pendamment de l'intensit&eacute; d'utilisation par l'utilisateur.
                </p>
              </div>
            </div>

            {/* Modifications techniques */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <RefreshCw className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Modifications techniques
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Citadelle peut, &agrave; tout moment, modifier les modalit&eacute;s techniques de d&eacute;livrance des contenus,
                  notamment changer le Canal ou le remplacer par un autre espace priv&eacute;, pour des raisons de
                  s&eacute;curit&eacute;, de conformit&eacute;, de maintenance ou de contraintes impos&eacute;es par une plateforme tierce.
                </p>
                <p>
                  L'utilisateur en est inform&eacute; par tout moyen utile et re&ccedil;oit les nouvelles instructions d'acc&egrave;s.
                </p>
              </div>
            </div>

            {/* Caract&egrave;re personnel */}
            <div className="p-8 bg-card rounded-xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-8 h-8 text-primary flex-shrink-0" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Caract&egrave;re personnel et non transf&eacute;rable
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">L'acc&egrave;s au Canal et aux contenus est strictement personnel,
                  non cessible et non transf&eacute;rable.</strong>
                </p>
                <p>
                  Toute tentative de partage, de mise &agrave; disposition &agrave; un tiers, de contournement des restrictions
                  d'acc&egrave;s, ou de rediffusion des contenus (y compris par captures, transferts, bots ou canaux miroirs)
                  est interdite et peut entra&icirc;ner la suspension ou la r&eacute;siliation imm&eacute;diate de l'acc&egrave;s, sans pr&eacute;judice
                  de toute action utile.
                </p>
              </div>
            </div>

            {/* Expiration et sortie */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <LogOut className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Expiration et sortie du Canal
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  &Agrave; l'expiration de la Licence, l'acc&egrave;s de l'utilisateur au Canal est automatiquement retir&eacute;,
                  sans formalit&eacute;.
                </p>
                <p>
                  En cas de sortie volontaire du Canal, l'utilisateur doit contacter le support dans un d&eacute;lai
                  de 24 &agrave; 48 heures ; la dur&eacute;e de la Licence continue de courir pendant toute la p&eacute;riode.
                </p>
              </div>
            </div>

            {/* Liens vers autres documents */}
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Documents compl&eacute;mentaires</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/mentions-legales" className="text-primary hover:underline text-sm">
                  Mentions l&eacute;gales
                </Link>
                <Link to="/cgv" className="text-primary hover:underline text-sm">
                  Conditions G&eacute;n&eacute;rales de Vente
                </Link>
                <Link to="/disclaimer" className="text-primary hover:underline text-sm">
                  Disclaimer
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour &agrave; l'accueil
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CGU;
