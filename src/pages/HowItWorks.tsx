import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Send, Target, BarChart3, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Choisissez votre licence",
      description: "Sélectionnez le niveau d'accès adapté à vos objectifs. Licence Citadelle à $500 ou Citadelle Pro à $1000 pour des fonctionnalités avancées.",
      details: [
        "Paiement sécurisé",
        "Activation immédiate",
        "Accès à vie tant que le service est actif"
      ]
    },
    {
      icon: Send,
      title: "Rejoignez le canal Telegram",
      description: "Une fois votre licence activée, vous recevez un lien d'invitation vers notre canal Telegram privé où sont diffusés tous les signaux.",
      details: [
        "Canal privé et sécurisé",
        "Notifications en temps réel",
        "Accessible sur mobile et desktop"
      ]
    },
    {
      icon: Target,
      title: "Appliquez le money management",
      description: "Chaque signal doit être suivi avec discipline. La règle fondamentale : 10% maximum de votre capital par position.",
      details: [
        "Protection du capital",
        "Croissance contrôlée",
        "Gestion des risques optimale"
      ]
    },
    {
      icon: BarChart3,
      title: "Suivez vos performances",
      description: "Consultez le dashboard pour analyser vos résultats, visualiser l'évolution de votre bankroll et optimiser votre stratégie.",
      details: [
        "Historique complet",
        "Statistiques détaillées",
        "Projections de profits"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Processus structuré
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comment ça marche
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Un processus clair et discipliné pour transformer l'analyse en résultats.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 md:gap-8 mb-12 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12">
                  <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground mb-3">
                    Étape {index + 1}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Management Focus */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Le Money Management"
            subtitle="La clé d'une approche durable et responsable."
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-background rounded-xl border border-primary/20">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="font-serif text-3xl font-bold text-primary">10%</span>
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-4">La règle d'or</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque position ne doit jamais dépasser 10% de votre capital total. 
                  Cette discipline protège votre bankroll des variations naturelles 
                  et permet une croissance contrôlée sur le long terme.
                </p>
              </div>

              <div className="p-8 bg-background rounded-xl border border-secondary/20">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-4">Discipline absolue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suivez chaque signal avec la même rigueur. Pas d'émotions, 
                  pas d'exceptions. La constance dans l'application des règles 
                  est ce qui distingue les résultats à long terme.
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border flex gap-4">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Rappel important</h4>
                <p className="text-sm text-muted-foreground">
                  Les paris sportifs comportent des risques. Même avec une méthode rigoureuse, 
                  les pertes font partie du jeu. N'investissez que ce que vous pouvez vous permettre 
                  de perdre et respectez toujours les règles de money management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Choisissez votre licence et rejoignez la communauté Citadelle dès aujourd'hui.
            </p>
            <Link to="/licences">
              <Button size="lg" className="font-semibold">
                Voir les licences
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
