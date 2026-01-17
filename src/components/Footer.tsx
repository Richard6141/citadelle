import { Link } from "react-router-dom";
import { Shield, Send, AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Citadelle
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stratégie. Discipline. Performance. Une approche structurée des paris sportifs sur le tennis de table.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/comment-ca-marche", label: "Comment ça marche" },
                { href: "/performances", label: "Performances" },
                { href: "/licences", label: "Licences" },
                { href: "/a-propos", label: "À propos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/cgu"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  to="/cgv"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Conditions de vente
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rejoindre</h4>
            <a
              href="https://t.me/citadelle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm hover:bg-primary/20 transition-colors"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border">
            <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Avertissement :</strong> Les paris sportifs comportent des risques de perte financière. 
              Les performances passées ne garantissent pas les résultats futurs. 
              Citadelle fournit des analyses et signaux à titre informatif. 
              L'utilisateur est seul responsable de ses décisions. Interdit aux mineurs.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Citadelle. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
