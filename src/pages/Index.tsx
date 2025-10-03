import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SimpleConsortiumCard } from "@/components/SimpleConsortiumCard";
import { Car, Home, Star, Shield, TrendingUp, Users, Bike, Truck, DollarSign, Plane, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logoPlanning from "@/assets/logo-planning-final.png";
import rafaelFreitas from "@/assets/rafael-freitas-new.jpg";
import rafaelHeroNoBg from "@/assets/rafael-hero-nobg.png";

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
      <section id="home" className="relative bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        
        <div className="relative container mx-auto px-4 pt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">
            {/* Image Column */}
            <div className="flex justify-center md:justify-start items-center h-full min-h-[600px] md:min-h-[700px]">
              <img 
                src={rafaelHeroNoBg} 
                alt="Rafael Freitas - Planning Consórcios" 
                className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-[600px] md:h-[700px] object-cover object-center drop-shadow-2xl"
              />
            </div>
            
            {/* Content Column */}
            <div className="text-center md:text-left pb-12 md:pb-24 md:-mt-32">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                O Plano Inteligente para a sua Próxima Grande Conquista.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Saia na frente com um planejamento sem os juros abusivos dos financiamentos. Conquiste seu carro ou imóvel com parcelas que aceleram seu futuro, não sua dívida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}>
                  Solicitar Análise Personalizada
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => window.open('https://wa.me/message/7OMAIKYBH3XLM1', '_blank')}>
                  Tirar Minhas Dúvidas
                </Button>
              </div>
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

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* About Planning Consórcios */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Sobre a Planning Consórcios
              </h2>
              <p className="text-2xl text-accent font-semibold">
                Transformando Objetivos em Conquistas Reais
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A Planning Consórcios nasceu de um propósito claro: ser mais do que um escritório de vendas. Nós somos parceiros na sua jornada de conquista. Acreditamos que o caminho para realizar grandes sonhos começa com um planejamento inteligente e transparente, onde seus interesses estão sempre em primeiro lugar.
              </p>
              <p>
                Nosso grande diferencial está no atendimento personalizado e na educação financeira. Aqui, você não apenas adquire um plano; você entende cada detalhe dele. Nossa missão é analisar seu cenário, ouvir seus objetivos e apresentar as melhores alternativas do mercado, explicando como o consórcio pode ser uma ferramenta poderosa para a construção de patrimônio e a realização de projetos de vida.
              </p>
              <p>
                Como um escritório independente, representamos algumas das maiores e mais confiáveis administradoras e bancos do país. Essa independência nos permite analisar o mercado de forma imparcial e apresentar a você as soluções mais adequadas, sempre com a estratégia certa para transformar seus objetivos em conquistas reais e seguras.
              </p>
            </div>
          </div>

          {/* About Rafael Freitas */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-full min-h-[600px]">
                <img 
                  src={rafaelFreitas} 
                  alt="Rafael Freitas - Fundador da Planning Consórcios" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  Conheça Rafael Freitas
                </h3>
                <p className="text-xl text-accent font-semibold mb-6">
                  Fundador e seu Guia Financeiro em Consórcios
                </p>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rafael Freitas é a força motriz por trás da Planning Consórcios. Com uma paixão genuína por ver pessoas prosperando, ele encontrou no consórcio a ferramenta ideal para ajudar seus clientes a construir patrimônio de forma justa e inteligente, livre dos juros abusivos dos financiamentos tradicionais. Sua maior motivação é testemunhar cada sonho se tornando realidade através de um planejamento acessível e eficaz.
                  </p>
                  <p>
                    Com mais de uma década de experiência na área de vendas, iniciada em 2014, Rafael desenvolveu uma habilidade única para entender as necessidades das pessoas e encontrar as soluções perfeitas. Sua entrada no mercado de consórcios foi marcada por um sucesso notável, com mais de R$ 4 milhões em créditos vendidos em um curto período, um testemunho de sua dedicação e profundo conhecimento do setor. Após acumular experiência em diferentes ambientes do mercado, ele decidiu fundar a Planning Consórcios para aplicar sua própria filosofia de trabalho, baseada na transparência e no compromisso real com o cliente.
                  </p>
                  <p>
                    Mais do que um representante, Rafael atua como um verdadeiro guia financeiro. Sua abordagem é focada em educar e capacitar cada cliente, explicando os detalhes do consórcio e traçando a melhor estratégia para que cada um atinja seus objetivos com segurança e clareza. É esse compromisso com a parceria e o sucesso do cliente que define a essência da Planning Consórcios.
                  </p>
                </div>
              </div>
            </div>
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

          <div className="flex justify-center">
            {/* Contact Form */}
            <Card className="w-full max-w-2xl">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contato */}
            <div>
              <h4 className="font-semibold text-xl mb-6">Contato</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (11) 94031 6758
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contato@planningconsorcios.com.br
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Av. Paulista, 1000<br />São Paulo, SP</span>
                </li>
              </ul>
            </div>
            
            {/* Menu */}
            <div>
              <h4 className="font-semibold text-xl mb-6">Menu</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Início</a>
                </li>
                <li>
                  <a href="#consorcios" className="hover:text-white transition-colors">Consórcios</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Contato</a>
                </li>
              </ul>
            </div>
            
            {/* Redes Sociais */}
            <div>
              <h4 className="font-semibold text-xl mb-6">Nossas redes sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/planningconsorcios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="https://www.facebook.com/planningconsorcios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="text-white/60 mb-4">
              <a href="/politica-privacidade" className="hover:text-white transition-colors">Políticas de Privacidade</a>
              {" | "}
              <a href="/termos-condicoes" className="hover:text-white transition-colors">Termos e condições</a>
            </div>
            <p className="text-white/60">© 2025 Planning consórcios. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;