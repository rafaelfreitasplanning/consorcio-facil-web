import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import logoPlanning from "@/assets/logo-planning-final.png";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
        <h1 className="text-4xl font-bold text-primary mb-8">Termos e Condições</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar ao site Planning Consórcios, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis 
              e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum 
              desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de 
              direitos autorais e marcas comerciais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Uso de Licença</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Planning 
              Consórcios, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma 
              transferência de título e, sob esta licença, você não pode:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Planning Consórcios;</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Planning 
              Consórcios a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve 
              apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Isenção de responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Os materiais no site da Planning Consórcios são fornecidos 'como estão'. Planning Consórcios não oferece garantias, 
              expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias 
              implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual 
              ou outra violação de direitos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Além disso, o Planning Consórcios não garante ou faz qualquer representação relativa à precisão, aos resultados 
              prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em 
              sites vinculados a este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Limitações</h2>
            <p className="text-muted-foreground leading-relaxed">
              Em nenhum caso o Planning Consórcios ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem 
              limitação, danos por perda de dados ou lucro ou devido à interrupção dos negócios) decorrentes do uso ou da 
              incapacidade de usar os materiais em Planning Consórcios, mesmo que Planning Consórcios ou um representante autorizado da 
              Planning Consórcios tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições 
              não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou 
              incidentais, essas limitações podem não se aplicar a você.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Precisão dos materiais</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os materiais exibidos no site de Planning Consórcios podem incluir erros técnicos, tipográficos ou fotográficos. Planning 
              Consórcios não garante que qualquer material em seu site seja preciso, completo ou atual. Planning Consórcios pode fazer 
              alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Planning Consórcios não se 
              compromete a atualizar os materiais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Planning Consórcios não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site 
              vinculado. A inclusão de qualquer link não implica endosso por Planning Consórcios do site. O uso de qualquer site vinculado 
              é por conta e risco do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Modificações</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Planning Consórcios pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, 
              você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Lei aplicável</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes termos e condições são regidos e interpretados de acordo com as leis do Planning Consórcios e você se submete 
              irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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

export default TermsConditions;
