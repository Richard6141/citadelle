import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Info, Shield, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avertissement important concernant l'utilisation des services Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Avertissement principal */}
            <div className="p-8 bg-card rounded-xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Avertissement g&eacute;n&eacute;ral
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Les contenus Citadelle sont fournis &agrave; des fins <strong className="text-foreground">informatives
                    et &eacute;ducatives</strong>. Ils ne constituent ni une incitation &agrave; parier, ni un conseil financier,
                    et n'offrent aucune garantie de gain ou de r&eacute;sultat.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsabilit&eacute; individuelle */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Responsabilit&eacute; individuelle
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  <strong className="text-foreground">Chacun reste seul responsable de ses d&eacute;cisions.</strong>
                </p>
                <p>
                  L'utilisateur reconna&icirc;t que les &eacute;v&eacute;nements sportifs comportent une part d'al&eacute;a et
                  qu'aucune analyse, projection ou signal ne peut &ecirc;tre consid&eacute;r&eacute; comme certain.
                </p>
                <p>
                  Les performances pass&eacute;es ne garantissent pas les r&eacute;sultats futurs. Toute d&eacute;cision
                  prise sur la base des contenus Citadelle rel&egrave;ve de la seule responsabilit&eacute; de l'utilisateur.
                </p>
              </div>
            </div>

            {/* Nature du service */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Nature du service
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  <strong className="text-foreground">Citadelle n'est ni op&eacute;rateur de jeux ni interm&eacute;diaire de paris.</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Aucune mise n'est accept&eacute;e</li>
                  <li>Aucun pari n'est plac&eacute;</li>
                  <li>Aucun gain n'est redistribu&eacute;</li>
                  <li>Aucune transaction financi&egrave;re li&eacute;e aux jeux d'argent n'est effectu&eacute;e</li>
                </ul>
                <p>
                  Citadelle fournit uniquement des contenus analytiques et informatifs &agrave; caract&egrave;re &eacute;ducatif.
                </p>
              </div>
            </div>

            {/* Affili&eacute;s */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Affili&eacute;s et communications externes
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Des affili&eacute;s peuvent percevoir une commission dans le cadre de partenariats commerciaux.
                </p>
                <p>
                  <strong className="text-foreground">Les propos tenus par des affili&eacute;s n'engagent pas Citadelle.</strong>
                </p>
                <p>
                  Seules les informations publi&eacute;es sur le site officiel et dans les documents contractuels
                  (<Link to="/cgu" className="text-primary hover:underline">CGU</Link>, <Link to="/cgv" className="text-primary hover:underline">CGV</Link>, <Link to="/mentions-legales" className="text-primary hover:underline">Mentions l&eacute;gales</Link>)
                  font foi.
                </p>
              </div>
            </div>

            {/* Absence de conseil */}
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Absence de conseil financier</h3>
                  <p className="text-muted-foreground text-sm">
                    Les contenus Citadelle ne constituent en aucun cas un conseil en investissement,
                    un conseil financier, juridique ou fiscal. Pour toute question relative &agrave; votre
                    situation personnelle, veuillez consulter un professionnel qualifi&eacute;.
                  </p>
                </div>
              </div>
            </div>

            {/* Liens vers autres documents */}
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Documents contractuels</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/mentions-legales" className="text-primary hover:underline text-sm">
                  Mentions l&eacute;gales
                </Link>
                <Link to="/cgu" className="text-primary hover:underline text-sm">
                  Conditions G&eacute;n&eacute;rales d'Utilisation
                </Link>
                <Link to="/cgv" className="text-primary hover:underline text-sm">
                  Conditions G&eacute;n&eacute;rales de Vente
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

export default Disclaimer;
