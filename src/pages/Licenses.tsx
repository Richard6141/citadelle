import { Link } from "react-router-dom";
import { ArrowRight, Shield, Send, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";

const Licenses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Accès sécurisé
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Licences & Accès
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez le niveau d'accès qui correspond à vos objectifs et rejoignez 
              la communauté Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              title="Découverte"
              price={99}
              duration="3 jours"
              features={[
                "Accès au canal Telegram",
                "Signaux tennis de table",
                "Accès au dashboard",
                "Support réactif",
              ]}
              ctaText="Commencer"
              ctaHref="https://t.me/citadelle"
            />
            <PricingCard
              title="Standard"
              price={499}
              duration="14 jours"
              features={[
                "Accès au canal Telegram",
                "Signaux tennis de table",
                "Accès au dashboard",
                "Support réactif",
              ]}
              popular
              ctaText="Choisir Standard"
              ctaHref="https://t.me/citadelle"
            />
            <PricingCard
              title="Classique"
              price={799}
              duration="30 jours"
              features={[
                "Accès au canal Telegram",
                "Signaux tennis de table",
                "Accès au dashboard",
                "Support réactif",
              ]}
              ctaText="Choisir Classique"
              ctaHref="https://t.me/citadelle"
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ce qui est inclus"
            subtitle="Tout ce dont vous avez besoin pour réussir."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Canal Telegram privé",
                description: "Recevez les signaux en temps réel directement sur votre téléphone ou ordinateur.",
              },
              {
                title: "Signaux analysés",
                description: "Chaque signal est le résultat d'une analyse approfondie des matchs de tennis de table.",
              },
              {
                title: "Dashboard de suivi",
                description: "Visualisez vos performances, l'évolution de votre bankroll et vos statistiques.",
              },
              {
                title: "Historique complet",
                description: "Accédez à l'historique de tous les signaux passés et leurs résultats.",
              },
              {
                title: "Money management intégré",
                description: "Recommandations claires sur la gestion de votre capital (10% par position).",
              },
              {
                title: "Support réactif",
                description: "Une équipe disponible pour répondre à vos questions et vous accompagner.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-background rounded-xl border border-border">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Comment rejoindre"
            subtitle="Un processus simple et rapide."
          />

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {[
                { step: "1", title: "Choisissez votre licence", description: "Découverte ($99 / 3 jours), Standard ($499 / 14 jours) ou Classique ($799 / 30 jours)." },
                { step: "2", title: "Contactez-nous sur Telegram", description: "Cliquez sur le bouton pour nous contacter et finaliser votre inscription." },
                { step: "3", title: "Effectuez le paiement", description: "Réglez votre licence de manière sécurisée." },
                { step: "4", title: "Recevez votre accès", description: "Accédez immédiatement au canal privé et au dashboard." },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-serif font-semibold text-primary flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="https://t.me/citadelle" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Nous contacter sur Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-background rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Avant de vous inscrire
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Citadelle n'est pas un service de paris garantis.</strong> 
                      Nous fournissons des analyses et des signaux basés sur notre méthodologie, 
                      mais les résultats passés ne garantissent pas les performances futures.
                    </p>
                    <p>
                      Les paris sportifs comportent des risques de perte financière. 
                      N'investissez que ce que vous pouvez vous permettre de perdre.
                    </p>
                    <p>
                      En rejoignant Citadelle, vous vous engagez à respecter le money management 
                      recommandé (10% du capital par position) et à agir de manière responsable.
                    </p>
                    <p>
                      <strong className="text-foreground">Interdit aux mineurs.</strong> Vous devez avoir 
                      l'âge légal pour parier dans votre juridiction.
                    </p>
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

export default Licenses;
