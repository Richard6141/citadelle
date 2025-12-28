import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Users, TrendingUp, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Notre philosophie
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              À propos de Citadelle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Une forteresse contre l'improvisation. Une approche stratégique et disciplinée 
              des paris sportifs sur le tennis de table.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Notre vision
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Citadelle est née d'une conviction simple : les paris sportifs ne doivent pas 
                    être un jeu de hasard. C'est une discipline qui demande rigueur, analyse et 
                    surtout, un cadre structuré.
                  </p>
                  <p>
                    Nous avons créé Citadelle pour offrir ce cadre. Un environnement où la stratégie 
                    prime sur l'émotion, où le money management est sacré, et où chaque décision 
                    est le fruit d'une analyse méthodique.
                  </p>
                  <p>
                    Notre spécialisation dans le tennis de table nous permet de développer une 
                    expertise profonde et de fournir des signaux de qualité supérieure.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Précision", value: "Analyse méthodique" },
                  { icon: Lock, label: "Discipline", value: "Money management" },
                  { icon: TrendingUp, label: "Performance", value: "Résultats mesurables" },
                  { icon: Users, label: "Communauté", value: "Approche collective" },
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-card rounded-xl border border-border text-center">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-semibold text-foreground mb-1">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos valeurs"
            subtitle="Les principes qui guident chaque décision chez Citadelle."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-xl border border-border text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Responsabilité</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous promouvons une approche responsable des paris sportifs. 
                Pas de promesses irréalistes, que des faits et de la transparence.
              </p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border text-center">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Discipline</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Le money management n'est pas optionnel. C'est le fondement de toute 
                approche durable et la clé du succès à long terme.
              </p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chaque signal est le résultat d'une analyse rigoureuse. 
                Nous visons l'excellence dans notre méthodologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we're not */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ce que Citadelle n'est pas"
            subtitle="Clarté et honnêteté sur notre positionnement."
          />

          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Citadelle n'est pas un casino
                </h3>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-foreground">Pas de promesses de gains garantis.</strong> 
                    Quiconque promet des gains certains ment. Les paris sportifs comportent 
                    toujours un risque de perte.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-foreground">Pas une solution pour s'enrichir rapidement.</strong> 
                    Nous prônons une approche long terme, basée sur la discipline et la 
                    constance, pas sur des gains spectaculaires.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-foreground">Pas pour les profils à risque.</strong> 
                    Si vous avez des problèmes avec les jeux d'argent ou si vous ne pouvez 
                    pas respecter une discipline stricte, Citadelle n'est pas fait pour vous.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-foreground">Interdit aux mineurs.</strong> 
                    Vous devez avoir l'âge légal pour parier dans votre juridiction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Prêt à adopter une approche disciplinée ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Rejoignez Citadelle et découvrez une nouvelle façon d'aborder les paris sportifs.
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

export default About;
