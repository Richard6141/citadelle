import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Legal = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mentions légales & Conditions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Informations légales importantes concernant l'utilisation de Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Disclaimer */}
            <div className="p-8 bg-card rounded-xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Avertissement sur les risques
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Les paris sportifs comportent des risques financiers importants.</strong> 
                  Il est possible de perdre tout ou partie de votre capital investi.
                </p>
                <p>
                  <strong className="text-foreground">Les performances passées ne garantissent pas les résultats futurs.</strong> 
                  Les statistiques et résultats présentés sur ce site sont basés sur des données historiques 
                  et ne constituent en aucun cas une garantie de gains futurs.
                </p>
                <p>
                  Citadelle fournit des analyses et des signaux à titre informatif uniquement. 
                  Ces informations ne constituent pas des conseils financiers, juridiques ou fiscaux.
                </p>
              </div>
            </div>

            {/* Nature du service */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Nature du service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Citadelle est une plateforme d'analyse et de distribution de signaux sportifs 
                  spécialisée dans le tennis de table. Notre service comprend :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>L'accès à un canal Telegram privé pour recevoir des signaux analysés</li>
                  <li>Un dashboard de suivi des performances</li>
                  <li>Des recommandations de money management</li>
                  <li>Un support client</li>
                </ul>
                <p>
                  <strong className="text-foreground">Citadelle n'est pas :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Un site de paris en ligne</li>
                  <li>Un conseiller financier agréé</li>
                  <li>Un service garantissant des profits</li>
                </ul>
              </div>
            </div>

            {/* Responsabilité */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Responsabilité de l'utilisateur
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En utilisant les services de Citadelle, l'utilisateur reconnaît et accepte que :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Il est seul responsable de ses décisions de paris et de leur exécution</li>
                  <li>Il dispose de l'âge légal pour parier dans sa juridiction</li>
                  <li>Il s'engage à respecter les lois en vigueur dans son pays de résidence</li>
                  <li>Il n'investit que des sommes qu'il peut se permettre de perdre</li>
                  <li>Il s'engage à respecter les règles de money management recommandées</li>
                </ul>
                <p>
                  Citadelle décline toute responsabilité en cas de pertes financières 
                  résultant de l'utilisation de ses signaux ou analyses.
                </p>
              </div>
            </div>

            {/* Mineurs */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Interdiction aux mineurs
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Les services de Citadelle sont strictement interdits aux personnes mineures.</strong>
                </p>
                <p>
                  En souscrivant à une licence Citadelle, l'utilisateur certifie avoir l'âge légal 
                  requis pour participer à des activités de paris sportifs dans sa juridiction.
                </p>
                <p>
                  Citadelle se réserve le droit de résilier immédiatement et sans remboursement 
                  tout compte appartenant à un mineur.
                </p>
              </div>
            </div>

            {/* Jeu responsable */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Jeu responsable
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les paris sportifs doivent rester une activité de loisir et ne jamais devenir 
                  une source de problèmes financiers ou personnels.
                </p>
                <p>
                  Si vous pensez avoir un problème avec les jeux d'argent, nous vous encourageons 
                  à contacter une ligne d'aide spécialisée dans votre pays.
                </p>
                <p>
                  Citadelle encourage fortement le respect strict du money management (10% du capital 
                  maximum par position) pour une approche durable et responsable.
                </p>
              </div>
            </div>

            {/* Conditions d'utilisation */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Conditions d'utilisation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'accès aux services de Citadelle est conditionné à l'achat d'une licence. 
                  Cette licence est personnelle et non transférable.
                </p>
                <p>
                  Citadelle se réserve le droit de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modifier les termes et conditions à tout moment</li>
                  <li>Suspendre ou résilier un compte en cas de violation des conditions</li>
                  <li>Modifier ou interrompre le service sans préavis</li>
                </ul>
                <p>
                  Le partage ou la revente des signaux est strictement interdit et entraînera 
                  la résiliation immédiate de la licence sans remboursement.
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tous les contenus présents sur ce site (textes, images, logos, analyses, signaux) 
                  sont la propriété exclusive de Citadelle et sont protégés par les lois sur la 
                  propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, distribution ou utilisation non autorisée de ces contenus 
                  est strictement interdite.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Contact
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pour toute question concernant ces mentions légales ou nos services, 
                  vous pouvez nous contacter via notre canal Telegram.
                </p>
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
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
