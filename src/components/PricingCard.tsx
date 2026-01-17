import { Check, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
  isExternal?: boolean;
}

const PricingCard = ({
  title,
  price,
  duration,
  features,
  popular = false,
  ctaText = "Choisir cette licence",
  ctaHref = "#",
  isExternal = false,
}: PricingCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        popular
          ? "bg-gradient-to-b from-secondary/10 via-primary/5 to-card border-primary/30 shadow-glow scale-105"
          : "bg-card border-border hover:border-primary/30"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full shadow-glow">
            <Sparkles className="w-3.5 h-3.5" />
            RECOMMANDÉ
          </span>
        </div>
      )}

      {/* Header */}
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{title}</h3>

      {/* Duration - Prominently displayed */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
        popular 
          ? "bg-primary/20 border border-primary/30" 
          : "bg-muted border border-border"
      }`}>
        <Clock className={`w-5 h-5 ${popular ? "text-primary" : "text-accent"}`} />
        <span className={`font-bold text-lg ${popular ? "text-primary" : "text-foreground"}`}>
          {duration}
        </span>
      </div>

      {/* Price */}
      <div className="mb-8">
        <span className={`font-serif text-5xl font-bold ${popular ? "text-primary" : "text-foreground"}`}>
          ${price}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${popular ? "text-primary" : "text-accent"}`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {isExternal ? (
        <a href={ctaHref} target="_blank" rel="noopener noreferrer">
          <Button
            variant={popular ? "default" : "outline"}
            className={`w-full font-semibold ${popular ? "animate-glow-pulse" : ""}`}
          >
            {ctaText}
          </Button>
        </a>
      ) : (
        <Link to={ctaHref}>
          <Button
            variant={popular ? "default" : "outline"}
            className={`w-full font-semibold ${popular ? "animate-glow-pulse" : ""}`}
          >
            {ctaText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PricingCard;
