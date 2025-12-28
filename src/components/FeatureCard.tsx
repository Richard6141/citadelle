import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "blue" | "purple" | "cyan";
}

const FeatureCard = ({ icon: Icon, title, description, variant = "default" }: FeatureCardProps) => {
  const variantStyles = {
    default: "bg-card border-border hover:border-muted-foreground/30",
    blue: "bg-card border-primary/20 hover:border-primary/40 hover:shadow-glow",
    purple: "bg-card border-secondary/20 hover:border-secondary/40 hover:shadow-glow-purple",
    cyan: "bg-card border-accent/20 hover:border-accent/40 hover:shadow-glow-cyan",
  };

  const iconStyles = {
    default: "bg-muted text-foreground",
    blue: "bg-primary/10 text-primary",
    purple: "bg-secondary/10 text-secondary",
    cyan: "bg-accent/10 text-accent",
  };

  return (
    <div className={`p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg ${variantStyles[variant]}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconStyles[variant]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
