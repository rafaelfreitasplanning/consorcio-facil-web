import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Check, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoPlanning from "@/assets/logo-planning-final.png";

const ConsortiumInvestment = () => {
  const navigate = useNavigate();

  const benefits = [
    "Taxas competitivas e justas",
    "Sem entrada obrigatória",
    "Parcelas que cabem no seu bolso",
    "Capital para investimentos diversos",
    "Liberdade de aplicação",
    "Formação de patrimônio",
    "Rentabilidade sem juros",
    "Possibilidade de dar lances",
    "Flexibilidade total de uso"
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={logoPlanning} alt="Planning Consórcios" className="h-16 w-auto" />
            <Button variant="cta" onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}>
              Simular Agora
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="text-white hover:text-white/80 mb-8"
            onClick={() => navigate('/')}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Consórcio de Investimentos</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Deseja alavancar financeiramente e ter bons retornos financeiros com o investimento em consórcio?
            </p>
            <p className="text-lg text-white/80 mb-6">
              Vamos te ajudar a encontrar o melhor grupo e estratégia para isso também! Alcance seus objetivos financeiros com inteligência e planejamento.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}
            >
              Simular Consórcio
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Investindo em consórcio, você...
            </h2>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    • Pode se organizar e contar com parcelas fixas e sem juros!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    • Você define o valor que deseja investir e o prazo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    • Liberdade total para aplicar seu crédito onde for melhor para você.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Confira as vantagens de fazer um investimento através do consórcio!
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}
              >
                Quero simular o consórcio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Atenção</h3>
              <p className="mb-4">
                Os grupos de consórcio de investimentos são formados mediante proposta de adesão, com preço e condições estabelecidas em assembleia pelo grupo de consorciados.
              </p>
              <p className="text-sm text-white/80">
                É obrigatória a leitura do regulamento antes da adesão ao grupo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2025 Planning Consórcios. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ConsortiumInvestment;
