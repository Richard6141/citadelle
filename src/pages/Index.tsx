import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, BarChart3, Send, Lock, TrendingUp, Zap, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-8 animate-fade-in">
              <Shield className="w-4 h-4" />
              Analyse sportive spécialisée tennis de table
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Stratégie. Discipline.
              <span className="block text-primary mt-2">Performance.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Une approche structurée des paris sportifs. Signaux analysés via Telegram, 
              suivi des performances sur dashboard, money management rigoureux.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/licences">
                <Button size="lg" className="font-semibold text-base px-8">
                  Rejoindre Citadelle
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/comment-ca-marche">
                <Button variant="outline" size="lg" className="font-semibold text-base px-8">
                  Comment ça marche
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "72%+", label: "Win Rate" },
                { value: "10%", label: "Par position" },
                { value: "24/7", label: "Signaux" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why Citadelle */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pourquoi Citadelle ?"
            subtitle="Une forteresse contre l'improvisation. Une méthode rigoureuse pour des résultats mesurables."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Target}
              title="Analyse approfondie"
              description="Chaque signal est le fruit d'une analyse méthodique des matchs de tennis de table. Pas de hasard, que de la stratégie."
              variant="blue"
            />
            <FeatureCard
              icon={Lock}
              title="Money Management strict"
              description="10% du capital par position. Une règle d'or pour protéger votre capital et assurer une croissance contrôlée."
              variant="purple"
            />
            <FeatureCard
              icon={BarChart3}
              title="Transparence totale"
              description="Toutes les performances sont traçables sur le dashboard. Historique complet, statistiques détaillées."
              variant="cyan"
            />
            <FeatureCard
              icon={Send}
              title="Signaux Telegram"
              description="Recevez les signaux directement sur Telegram. Réactif, précis, et accessible où que vous soyez."
              variant="blue"
            />
            <FeatureCard
              icon={Zap}
              title="Réactivité"
              description="Signaux envoyés en temps réel pour vous permettre de prendre position au meilleur moment."
              variant="purple"
            />
            <FeatureCard
              icon={Users}
              title="Communauté disciplinée"
              description="Rejoignez une communauté d'utilisateurs sérieux, focalisés sur la performance long terme."
              variant="cyan"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Comment ça fonctionne"
            subtitle="Un processus simple et structuré pour maximiser vos chances de succès."
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Lock,
                  title: "1. Obtenez votre licence",
                  description: "Choisissez votre niveau d'accès et rejoignez la communauté Citadelle."
                },
                {
                  icon: Send,
                  title: "2. Rejoignez Telegram",
                  description: "Accédez au canal privé pour recevoir les signaux en temps réel."
                },
                {
                  icon: Target,
                  title: "3. Suivez les signaux",
                  description: "Appliquez les positions avec le money management recommandé (10% du capital)."
                },
                {
                  icon: BarChart3,
                  title: "4. Suivez vos performances",
                  description: "Consultez le dashboard pour analyser vos résultats et votre progression."
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/comment-ca-marche">
              <Button variant="outline" size="lg">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Preview */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Performances & Transparence"
            subtitle="Des résultats vérifiables. Aucune promesse irréaliste, que des faits."
          />

          <div className="max-w-4xl mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: TrendingUp, value: "+72.7%", label: "Win Rate moyen", color: "text-secondary" },
                { icon: BarChart3, value: "57+", label: "Signaux / semaine", color: "text-primary" },
                { icon: Clock, value: "24/7", label: "Disponibilité", color: "text-secondary" },
                { icon: Target, value: "10%", label: "Par position", color: "text-primary" },
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-background rounded-xl border border-border text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`font-serif text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-muted/30 rounded-lg border border-border text-center">
              <p className="text-sm text-muted-foreground">
                Les performances passées ne garantissent pas les résultats futurs. 
                <Link to="/performances" className="text-primary hover:underline ml-1">
                  Voir les détails
                </Link>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/performances">
              <Button variant="outline" size="lg">
                Voir les performances complètes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Licences"
            subtitle="Choisissez l'accès qui correspond à vos objectifs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="Citadelle"
              price="$500"
              description="L'accès essentiel pour commencer avec discipline."
              features={[
                "Accès au canal Telegram privé",
                "Signaux tennis de table",
                "Accès au dashboard de suivi",
                "Support standard",
              ]}
            />
            <PricingCard
              name="Citadelle Pro"
              price="$1000"
              description="Pour ceux qui veulent aller plus loin."
              features={[
                "Tout inclus dans Citadelle",
                "Accès prioritaire aux signaux",
                "Analyses avancées",
                "Suivi de performance avancé",
                "Support prioritaire",
              ]}
              isPro
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/licences">
              <Button size="lg" className="font-semibold">
                Choisir ma licence
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Prêt à rejoindre la forteresse ?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Discipline, stratégie, et money management. Les trois piliers d'une approche 
              responsable et performante des paris sportifs.
            </p>
            <Link to="/licences">
              <Button size="lg" className="font-semibold text-base px-10">
                Rejoindre Citadelle
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
