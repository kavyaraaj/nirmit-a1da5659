import { LucideIcon } from "lucide-react";
import TiltedCard from "./TiltedCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <TiltedCard>
      <div className="glass glass-hover rounded-3xl p-8 shadow-md h-full">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </TiltedCard>
  );
};

export default ServiceCard;
