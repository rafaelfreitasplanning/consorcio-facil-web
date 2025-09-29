import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SimpleConsortiumCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const SimpleConsortiumCard = ({
  title,
  description,
  icon: Icon,
  path
}: SimpleConsortiumCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
      onClick={() => navigate(path)}
    >
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground pt-2">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-end">
          <button className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
