import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, AlertTriangle, Shield, Calendar, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PerformanceTable from "@/components/PerformanceTable";

const Performance = () => {
  const performanceData = [
    { period: "Derniers 7 jours", signals: 57, winRate: "78.2%", profit: "+$1,429.91", isPositive: true },
    { period: "Décembre 2025", signals: 243, winRate: "74.5%", profit: "+$5,847.23", isPositive: true },
    { period: "Novembre 2025", signals: 228, winRate: "71.8%", profit: "+$4,291.56", isPositive: true },
    { period: "Octobre 2025", signals: 251, winRate: "73.2%", profit: "+$5,102.89", isPositive: true },
    { period: "Septembre 2025", signals: 219, winRate: "69.4%", profit: "+$3,456.78", isPositive: true },
    { period: "Août 2025", signals: 234, winRate: "72.1%", profit: "+$4,789.34", isPositive: true },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-sm font-medium mb-8">
              <BarChart3 className="w-4 h-4" />
              Résultats vérifiables
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Performances
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparence totale sur nos résultats. Consultez l'historique complet 
              de nos signaux et leurs performances.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, value: "72.7%", label: "Win Rate moyen", color: "text-secondary" },
              { icon: Target, value: "1,400+", label: "Signaux ce mois", color: "text-primary" },
              { icon: Calendar, value: "6+", label: "Mois de données", color: "text-secondary" },
              { icon: Clock, value: "24/7", label: "Signaux actifs", color: "text-primary" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`font-serif text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Table */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Historique des performances"
            subtitle="Résultats basés sur un compte de $1,000 avec money management à 10%."
          />

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <PerformanceTable data={performanceData} />
            </div>

            {/* Calculation Note */}
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Méthodologie :</span> Les calculs utilisent le Daily Compounding. 
                Les profits de la veille augmentent la mise (10% du Bankroll) pour le jour suivant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Notre méthodologie"
            subtitle="Comment nous analysons et sélectionnons les signaux."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-4">Analyse des matchs</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Étude des statistiques historiques des joueurs
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Analyse des tendances récentes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Évaluation des cotes et de la valeur
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Prise en compte des conditions de jeu
                </li>
              </ul>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-4">Critères de sélection</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  Cotes offrant une valeur positive
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  Matchs avec données suffisantes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  Niveau de confiance élevé dans l'analyse
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  Liquidité et disponibilité des cotes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Avertissement important
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Les performances passées ne garantissent pas les résultats futurs.</strong> 
                      Les paris sportifs comportent des risques inhérents de perte financière.
                    </p>
                    <p>
                      Les résultats présentés sur cette page sont basés sur l'historique réel de nos signaux, 
                      avec un capital hypothétique de $1,000 et une mise de 10% par position.
                    </p>
                    <p>
                      Citadelle fournit des analyses et des signaux à titre informatif. 
                      L'utilisateur reste seul responsable de ses décisions de paris et de la gestion de son capital.
                    </p>
                    <p>
                      N'investissez que ce que vous pouvez vous permettre de perdre. 
                      Le respect strict du money management est essentiel pour une approche durable.
                    </p>
                  </div>
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
              Accédez aux signaux
            </h2>
            <p className="text-muted-foreground mb-8">
              Rejoignez Citadelle et recevez les signaux analysés directement sur Telegram.
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

export default Performance;
