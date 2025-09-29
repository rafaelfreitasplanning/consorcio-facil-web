import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SimpleConsortiumCard } from "@/components/SimpleConsortiumCard";
import { Car, Home, Star, Shield, TrendingUp, Users, Bike, Truck, DollarSign, Plane } from "lucide-react";
import heroImage from "@/assets/hero-consortiums.jpg";
import logoPlanning from "@/assets/logo-planning-final.png";

const Index = () => {
  const consortiumTypes = [
    {
      title: "Imóveis",
      description: "Conquiste sua casa própria ou invista em imóveis com segurança.",
      icon: Home,
      path: "/consorcio-imoveis"
    },
    {
      title: "Veículos",
      description: "Use o Crédito de Consórcio e compre o veículo que você sempre quis.",
      icon: Car,
      path: "/consorcio-veiculos"
    },
    {
      title: "Investimentos",
      description: "Deseja alavancar financeiramente e ter bons retornos financeiros com o investimento em consórcio? Vamos te ajudar a encontrar o melhor grupo e estratégia para isso também!",
      icon: DollarSign,
      path: "/consorcio-investimentos"
    },
    {
      title: "Motocicleta",
      description: "Alguns gostam de carros e outros são apaixonados por motos, e a Prefiro atua exatamente para a conquista do que deseja. Vamos planejar a compra da sua moto?",
      icon: Bike,
      path: "/consorcio-motos"
    },
    {
      title: "Serviços",
      description: "O que você deseja? Viajar? Realizar algum procedimento estético? Com a Prefiro, tudo isso é possível, entenda como podemos auxiliá-lo nesta conquista também!",
      icon: Plane,
      path: "/consorcio-investimentos"
    },
    {
      title: "Pesados",
      description: "A maneira mais fácil e barata de você expandir seus negócios você vai encontrar conversando com os consultores da Prefiro Consórcio.",
      icon: Truck,
      path: "/consorcio-pesados"
    }
  ];
  return <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-[16px] py-[8px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logoPlanning} alt="Planning Consórcios" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-primary hover:text-primary-glow transition-colors">Início</a>
              <a href="#consorcios" className="text-primary hover:text-primary-glow transition-colors">Consórcios</a>
              <a href="#sobre" className="text-primary hover:text-primary-glow transition-colors">Sobre</a>
              <a href="#contact" className="text-primary hover:text-primary-glow transition-colors">Contato</a>
            </nav>
            <Button variant="cta" className="hidden md:flex" onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}>
              Simular Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Realize Seus Sonhos com <span className="text-accent-light">Consórcio</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              A forma mais inteligente de conquistar seu veículo ou imóvel próprio. 
              Parcelas que cabem no seu orçamento, sem comprometer sua renda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}>
                Simular Consórcio
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => window.open('https://wa.me/message/7OMAIKYBH3XLM1', '_blank')}>
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Por que Escolher Consórcio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra as vantagens de realizar seus sonhos através do consórcio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Segurança Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regulamentado pelo Banco Central, seu dinheiro está totalmente protegido e garantido.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Sem Juros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Parcelas fixas sem juros, apenas taxa de administração. Muito mais econômico que financiamentos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Flexibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Possibilidade de antecipação, quitação e contemplação por sorteio ou lance livre.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consortium Types Section */}
      <section id="consorcios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nossos Consórcios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Encontre a modalidade perfeita para realizar seus sonhos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consortiumTypes.map((consortium, index) => (
              <SimpleConsortiumCard key={index} {...consortium} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              O que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: "Maria Silva",
            text: "Conquistei minha casa própria com o consórcio imobiliário. Processo transparente e equipe muito atenciosa!",
            rating: 5
          }, {
            name: "João Santos",
            text: "Meu carro 0km chegou mais rápido do que esperava. Super recomendo o ConsórcioMax!",
            rating: 5
          }, {
            name: "Ana Costa",
            text: "Atendimento excepcional desde o primeiro contato. Realizei o sonho da casa própria!",
            rating: 5
          }].map((testimonial, index) => <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contato e descubra como realizar seus sonhos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Solicite uma Simulação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Tipo de Consórcio</Label>
                    <select id="type" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Selecione o tipo</option>
                      <option>Consórcio de Veículos</option>
                      <option>Consórcio Imobiliário</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="value">Valor Desejado</Label>
                    <Input id="value" placeholder="R$ 50.000,00" />
                  </div>
                </div>
                <Button variant="cta" className="w-full" onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}>
                  Solicitar Simulação Gratuita
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Planning Consórcios</span>
              </div>
              <p className="text-white/80">
                Realizando sonhos através de consórcios há mais de 15 anos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Consórcios</h4>
              <ul className="space-y-2 text-white/80">
                <li>Veículos</li>
                <li>Imóveis</li>
                <li>Motos</li>
                <li>Caminhões</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/80">
                <li>Sobre Nós</li>
                <li>Como Funciona</li>
                <li>Dúvidas Frequentes</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/80">
                <li>(11) 94031 6758</li>
                <li>contato@planningconsorcios.com.br</li>
                <li>Av. Paulista, 1000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2025 Planning consórcios. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;