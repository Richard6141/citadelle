interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

const StepCard = ({ step, title, description }: StepCardProps) => {
  return (
    <div className="relative flex gap-6 group">
      {/* Step Number */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center font-serif text-xl font-semibold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {step}
        </div>
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>

      {/* Connector Line */}
      <div className="absolute left-6 top-12 w-px h-full bg-border -translate-x-1/2" />
    </div>
  );
};

export default StepCard;
