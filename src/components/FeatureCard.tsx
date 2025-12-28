import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "gold" | "green";
}

const FeatureCard = ({ icon: Icon, title, description, variant = "default" }: FeatureCardProps) => {
  const variantStyles = {
    default: "bg-card border-border hover:border-muted-foreground/30",
    gold: "bg-card border-primary/20 hover:border-primary/40",
    green: "bg-card border-secondary/20 hover:border-secondary/40",
  };

  const iconStyles = {
    default: "bg-muted text-foreground",
    gold: "bg-primary/10 text-primary",
    green: "bg-secondary/10 text-secondary",
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
