import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface ConsortiumCardProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  onLearnMore: () => void;
}
export const ConsortiumCard = ({
  title,
  description,
  image,
  benefits,
  onLearnMore
}: ConsortiumCardProps) => {
  return <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="h-48 overflow-hidden">
        
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => <li key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
              {benefit}
            </li>)}
        </ul>
        <Button onClick={onLearnMore} variant="cta" className="w-full">
          Saiba Mais
        </Button>
      </CardContent>
    </Card>;
};