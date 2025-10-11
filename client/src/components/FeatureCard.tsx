import { Card, CardHeader, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Zap;

  return (
    <Card
      className="group hover-elevate active-elevate-2 transition-all duration-300 border-card-border animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display font-bold text-xl">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
