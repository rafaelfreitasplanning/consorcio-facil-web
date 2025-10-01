import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import logoPlanning from "@/assets/logo-planning-final.png";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-[16px] py-[8px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img src={logoPlanning} alt="Planning Consórcios" className="h-16 w-auto" />
            </div>
            <Button variant="cta" onClick={() => window.open('https://form.respondi.app/BG9ByMo6', '_blank')}>
              Simular Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidade</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Informações que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Planning Consórcios coleta informações pessoais quando você se cadastra em nosso site, solicita uma simulação ou entra em contato conosco. 
              As informações coletadas podem incluir nome, e-mail, telefone, endereço e outras informações relevantes para a prestação de nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Uso das Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Processar solicitações de simulação de consórcio</li>
              <li>Entrar em contato com você sobre nossos serviços</li>
              <li>Melhorar nosso atendimento e experiência do usuário</li>
              <li>Enviar comunicações sobre produtos e serviços que possam ser do seu interesse</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Planning Consórcios não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing sem o seu consentimento. 
              Podemos compartilhar suas informações com parceiros de negócios e administradoras de consórcio apenas quando necessário para a prestação dos serviços solicitados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Segurança</h2>
            <p className="text-muted-foreground leading-relaxed">
              Adotamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, 
              alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site utiliza cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo 
              que nos ajudam a entender como você utiliza nosso site e a personalizar seu conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão de dados pessoais</li>
              <li>Revogar o consentimento para o uso de seus dados</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Planning Consórcios pode atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente 
              para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco através do 
              e-mail contato@planningconsorcios.com.br ou pelo telefone (11) 94031 6758.
            </p>
          </section>

          <section>
            <p className="text-muted-foreground leading-relaxed italic">
              Última atualização: Janeiro de 2025
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-12">
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
    </div>
  );
};

export default PrivacyPolicy;
