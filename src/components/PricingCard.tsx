import { Check, Lock, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPro?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const PricingCard = ({
  name,
  price,
  description,
  features,
  isPro = false,
  ctaText = "Choisir cette licence",
  ctaHref = "#",
}: PricingCardProps) => {
  return (
    <div
      className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        isPro
          ? "bg-gradient-to-b from-secondary/10 via-primary/5 to-card border-primary/30 shadow-glow"
          : "bg-card border-border hover:border-primary/30"
      }`}
    >
      {/* Pro Badge */}
      {isPro && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full shadow-glow">
            <Sparkles className="w-3.5 h-3.5" />
            RECOMMANDÉ
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        isPro ? "bg-gradient-primary shadow-glow" : "bg-muted"
      }`}>
        {isPro ? (
          <Crown className="w-7 h-7 text-primary-foreground" />
        ) : (
          <Lock className="w-7 h-7 text-muted-foreground" />
        )}
      </div>

      {/* Header */}
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      {/* Price */}
      <div className="mb-8">
        <span className={`font-serif text-4xl font-bold ${isPro ? "text-primary" : "text-foreground"}`}>{price}</span>
        <span className="text-muted-foreground text-sm ml-2">/ licence</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPro ? "text-primary" : "text-accent"}`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={ctaHref} target="_blank" rel="noopener noreferrer">
        <Button
          variant={isPro ? "default" : "outline"}
          className={`w-full font-semibold ${isPro ? "animate-glow-pulse" : ""}`}
        >
          {ctaText}
        </Button>
      </a>
    </div>
  );
};

export default PricingCard;
