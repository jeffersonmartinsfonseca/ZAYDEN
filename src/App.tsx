import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Shield, Zap, Headphones, 
  MessageCircle, BarChart3, Users, Clock, DollarSign, Target, Play, Apple,
  Bot, Activity, PieChart, Check, Sparkles, CheckCheck, BrainCircuit, Workflow, Headset,
  Instagram, Mail
} from 'lucide-react';

function useIsVisible(ref: React.RefObject<Element | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px' });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useIsVisible(ref);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2500;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setDisplayValue(start + ease * (value - start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-brand-bg text-brand-dark">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-3 lg:py-2 flex justify-between items-center bg-[#f6f1ee] border-b border-[#E5E5EA] transition-all">
        <BrandLogo />

        <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium text-brand-dark/80 tracking-wide">
          <a href="#" className="hover:text-brand-dark transition-colors">Soluções</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Tecnologia</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Resultados</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Sobre</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/5527997612291?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" className="hidden md:flex text-brand-dark px-4 py-2 text-[13px] font-semibold tracking-wide hover:opacity-70 transition-all">
            Login
          </a>
          <a href="#na-pratica" onClick={(e) => {
            e.preventDefault();
            document.getElementById('na-pratica')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hidden md:flex bg-brand-dark text-white px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]">
            Veja uma Demonstração
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 px-5 md:px-6 max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          <span className="text-brand-gold font-bold tracking-[0.25em] text-[10px] uppercase mb-6">
            Inteligência Artificial para Clínicas Premium
          </span>
          
          <h1 className="text-4xl md:text-[5.5rem] leading-[1.1] md:leading-[1.05] font-semibold text-brand-dark mb-6 tracking-tighter">
            Sua clínica em <br />
            <span className="font-serif italic font-normal text-brand-gold">alta performance.</span>
          </h1>

          <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg py-2.5 px-6 mb-8 shadow-sm inline-flex">
            <span className="text-[13px] md:text-base text-brand-dark font-semibold">
              Clínicas que demoram mais de 5 minutos para responder perdem 63% dos leads para a concorrência.
            </span>
          </div>
          
          <p className="text-base md:text-xl text-brand-gray mb-10 max-w-2xl font-normal leading-relaxed">
            Seus pacientes recebem resposta, triagem e agendamento em menos de 3 segundos, 24 horas por dia. Elimine a perda de vendas por lentidão no WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <a href="#na-pratica" onClick={(e) => {
              e.preventDefault();
              document.getElementById('na-pratica')?.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-brand-dark text-white px-8 py-4 sm:py-3.5 rounded-full text-[15px] sm:text-[14px] font-medium tracking-wide hover:bg-brand-navy transition-all duration-300 shadow-md hover:shadow-xl flex justify-center items-center gap-2">
              Veja uma Demonstração <ArrowRight size={16} />
            </a>
            <a href="https://wa.me/5527997612291?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito." target="_blank" rel="noopener noreferrer" className="bg-transparent text-brand-dark border border-brand-dark/20 px-8 py-4 sm:py-3.5 rounded-full text-[15px] sm:text-[14px] font-medium tracking-wide hover:border-brand-dark hover:bg-brand-dark/5 transition-all duration-300 flex justify-center items-center gap-2">
              Solicitar diagnóstico gratuito <MessageCircle size={16} className="text-brand-dark/70" />
            </a>
          </div>
        </motion.div>

        {/* Cinematic Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl relative mt-4"
        >
          {/* Subtle glow behind the visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-brand-gold/10 to-blue-500/5 blur-[100px] -z-10 rounded-full"></div>
          
          <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-[#E5E5EA] bg-brand-surface group max-h-[600px] flex items-center justify-center">
            <img 
              src="/dashboard.png" 
              alt="ZAYDEN Dashboard Executivo" 
              className="w-full h-auto object-cover transform scale-[1.01] group-hover:scale-[1.03] transition-transform duration-[2s] ease-out contrast-[1.05]" 
              onError={(e) => {
                // Fallback temporário caso a imagem não tenha sido enviada ainda
                e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=100&w=1600";
              }}
            />
            {/* Elegant glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
            {/* Sleek inner vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none mix-blend-overlay"></div>
          </div>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="py-10 mt-6 w-full border-b border-brand-dark/5 flex justify-center"
        >
          <p className="text-brand-gray text-[11px] md:text-[13px] font-bold tracking-widest uppercase flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3 text-center">
            <span>Atendimento em segundos</span>
            <span className="hidden md:inline text-brand-gold/50">•</span>
            <span>Implementação assistida</span>
            <span className="hidden md:inline text-brand-gold/50">•</span>
            <span>Automação 24h</span>
            <span className="hidden md:inline text-brand-gold/50">•</span>
            <span>CRM integrado</span>
          </p>
        </motion.div>
      </section>

      {/* Solutions Grid - Minimalist Editorial */}
      <section className="py-24 px-5 md:px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <span className="text-brand-gold font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block">
            A Solução Definitiva
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark tracking-tight mb-6">
            Você está perdendo pacientes agora mesmo <br className="hidden md:block"/> por não <em className="font-serif italic font-normal text-brand-gold">responder rápido.</em>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-base md:text-lg">
            A Zayden resolve isso. Implementamos tecnologia de ponta para que sua clínica funcione de maneira autônoma, previsível e escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-5xl mx-auto">
          {[
            { 
              icon: <Headset size={26} strokeWidth={1} />,
              title: 'Agentes Autônomos 24/7', 
              desc: 'Sua clínica nunca fica offline. A IA qualifica pacientes, tira dúvidas sobre procedimentos e realiza agendamentos 24 horas por dia.' 
            },
            { 
              icon: <Workflow size={26} strokeWidth={1} />,
              title: 'Automação Operacional', 
              desc: 'Integramos WhatsApp, agenda e CRM. Reduza a carga da recepção e evite falhas humanas que custam clientes caros.' 
            },
            { 
              icon: <Activity size={26} strokeWidth={1} />,
              title: 'Recuperação de Pacientes Inativos', 
              desc: 'Nossa IA entra em contato ativo de forma humanizada com leads que pararam de responder ou pacientes antigos, gerando novas consultas.' 
            },
            { 
              icon: <PieChart size={26} strokeWidth={1} />,
              title: 'Visibilidade de Performance', 
              desc: 'Dashboards em tempo real para você saber exatamente quantas mensagens chegaram, quantas viraram consultas e qual o ROI.' 
            }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={i} 
              className="flex gap-6 group items-start"
            >
              <div className="relative shrink-0 w-16 h-16">
                {/* Premium Glow effect */}
                <div className="absolute inset-0 bg-brand-gold/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Premium Icon Container */}
                <div className="relative w-full h-full rounded-[1.25rem] bg-gradient-to-br from-[#ffffff] to-[#f4f4f4] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-[#E5E5EA] flex items-center justify-center text-brand-dark group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-all duration-500 ease-out z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent rounded-[1.25rem] pointer-events-none"></div>
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col pt-1">
                <h3 className="text-lg font-semibold tracking-tight text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-gray font-light text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive AI Agent Section */}
      <section id="na-pratica" className="py-24 px-5 md:px-6 md:py-32 relative bg-brand-surface overflow-hidden border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1">
            <span className="text-brand-gold font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block">
              Na Prática
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-brand-dark">
              Atendimento que <em className="font-serif italic font-normal text-brand-gold">converte.</em>
            </h2>
            <p className="text-brand-gray text-lg font-normal leading-relaxed mb-8 max-w-lg">
              Sua recepção foca em um atendimento presencial premium, enquanto a IA assume 100% da triagem inicial. Um fluxo perfeito e sem atritos.
            </p>
            <ul className="space-y-4">
              {[
                'Agendamentos sincronizados direto na sua agenda.',
                'Tom de voz sofisticado e 100% humanizado.',
                'Filtro de curiosos (qualificação de ticket).'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] font-medium text-brand-dark">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex flex-shrink-0 items-center justify-center">
                    <Check size={12} className="text-brand-gold" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Chat Mockup Visual */}
          <div className="flex-1 w-full relative">
             {/* Decorative glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 via-brand-dark/5 to-transparent rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-2xl"></div>
             
             {/* Mockup Container */}
             <div className="relative bg-[#0B141A] rounded-[2rem] border border-[#202C33] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                <div className="bg-[#202C33] px-6 py-4 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.3)] z-10 w-full relative">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#111B21] flex items-center justify-center">
                        <span className="text-[14px] font-bold tracking-wider text-brand-gold">Z</span>
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00A884] border-2 border-[#202C33] rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#E9EDEF] leading-tight">Zayden IA</h4>
                      <p className="text-[11px] text-[#8696A0] font-medium">Conta Comercial</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 cursor-pointer">
                    <div className="w-4 h-0.5 bg-[#8696A0] rounded-full"></div>
                    <div className="w-4 h-0.5 bg-[#8696A0] rounded-full"></div>
                    <div className="w-4 h-0.5 bg-[#8696A0] rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-[#0B141A] opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#202C33 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                
                <div className="p-6 flex flex-col gap-6 max-h-[480px] overflow-y-auto relative z-10" style={{ scrollbarWidth: 'none' }}>
                  
                  {/* Msg AI */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex gap-2"
                  >
                    <div className="w-7 h-7 rounded-full overflow-hidden bg-[#111B21] flex-shrink-0 flex items-center justify-center mt-auto mb-1">
                       <span className="text-[10px] font-bold text-brand-gold">Z</span>
                    </div>
                    <div className="bg-[#202C33] text-[#E9EDEF] p-3 pt-2.5 pb-2 rounded-[12px] rounded-tl-none max-w-[85%] shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                      <p className="text-[13.5px] leading-relaxed">Olá! Sou a secretária virtual da Clínica Zayden. Como posso te ajudar hoje?</p>
                      <span className="text-[#8696A0] text-[10px] mt-1 block w-full text-right">09:41</span>
                    </div>
                  </motion.div>

                  {/* Msg lead */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="flex gap-2 justify-end items-end"
                  >
                    <div className="bg-[#005C4B] text-[#E9EDEF] p-3 pt-2.5 pb-2 rounded-[12px] rounded-tr-none max-w-[85%] shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                      <p className="text-[13.5px] leading-relaxed">Gostaria de agendar uma avaliação para Botox. Tem horário na parte da tarde essa semana?</p>
                      <div className="flex justify-end mt-1 items-center gap-1">
                        <span className="text-[#8696A0] text-[10px]">09:41</span>
                        <CheckCheck size={14} className="text-[#53BDEB]" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Msg AI Typing/Action */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                    className="flex gap-2"
                  >
                    <div className="w-7 h-7 rounded-full overflow-hidden bg-[#111B21] flex-shrink-0 flex items-center justify-center mt-auto mb-1">
                       <span className="text-[10px] font-bold text-brand-gold">Z</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full max-w-[90%]">
                      <div className="bg-[#202C33] text-[#E9EDEF] p-3 pt-2.5 pb-2 rounded-[12px] rounded-tl-none shadow-[0_1px_1px_rgba(0,0,0,0.1)] w-fit">
                        <p className="text-[13.5px] leading-relaxed">Claro! Temos horários disponíveis com nossos especialistas. Veja as opções mais próximas da tarde:</p>
                        <span className="text-[#8696A0] text-[10px] mt-1 block w-full text-right">09:41</span>
                      </div>
                      
                      {/* Interactive Dashboard Block */}
                      <div className="bg-[#111B21] rounded-[12px] border border-[#202C33] overflow-hidden w-full shadow-[0_1px_1px_rgba(0,0,0,0.1)] mt-1">
                         <div className="px-4 py-3 border-b border-[#202C33] flex justify-between items-center bg-[#202C33]/50">
                            <span className="text-[11px] font-bold text-[#8696A0] tracking-widest uppercase">Horários Disponíveis</span>
                            <span className="text-[10px] text-[#8696A0] flex items-center gap-1"><Clock size={10} /> Avaliação - Botox</span>
                         </div>
                         <div className="p-4 flex flex-col gap-5">
                            <div className="flex justify-between items-center hover:bg-[#202C33] p-2 -m-2 rounded-lg cursor-pointer transition-colors">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-[12px]">AS</div>
                                <div className="flex flex-col">
                                   <span className="text-[13px] text-[#E9EDEF] font-medium">Dra. Ana Silva</span>
                                   <span className="text-[11px] text-[#8696A0]">Especialista em Harmonização</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <span className="text-[13px] font-semibold text-white">Hoje, 15:30</span>
                                <span className="text-[10px] text-[#00A884]">Disponível</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center hover:bg-[#202C33] p-2 -m-2 rounded-lg cursor-pointer transition-colors">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#53BDEB]/20 flex items-center justify-center text-[#53BDEB] font-bold text-[12px]">CR</div>
                                <div className="flex flex-col">
                                   <span className="text-[13px] text-[#E9EDEF] font-medium">Dr. Carlos Reis</span>
                                   <span className="text-[11px] text-[#8696A0]">Dermatologista</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <span className="text-[13px] font-semibold text-white">Amanhã, 14:00</span>
                                <span className="text-[10px] text-[#00A884]">Disponível</span>
                              </div>
                            </div>
                         </div>
                         <div className="px-4 py-3 border-t border-[#202C33] bg-[#202C33]/50 flex justify-between items-center cursor-pointer hover:bg-[#202C33] transition-colors">
                           <span className="text-[12px] text-[#53BDEB] font-medium">Ver agenda completa</span>
                           <ArrowRight size={14} className="text-[#53BDEB]" />
                         </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-2">
                        <a href="https://wa.me/5527997612291?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener noreferrer" className="border border-[#00A884]/30 text-[#00A884] bg-transparent hover:bg-[#00A884]/10 px-4 py-2 rounded-full text-[11px] font-medium transition-colors">
                          Confirmar hoje às 15:30
                        </a>
                        <a href="https://wa.me/5527997612291?text=Ol%C3%A1%2C%20queria%20ver%20outras%20datas." target="_blank" rel="noopener noreferrer" className="border border-[#8696A0]/30 text-[#E9EDEF] bg-transparent hover:bg-[#202C33] px-4 py-2 rounded-full text-[11px] font-medium transition-colors">
                          Outras datas
                        </a>
                      </div>
                    </div>
                  </motion.div>

                </div>
                
                {/* Chat Input */}
                <div className="p-4 border-t border-[#202C33] bg-[#202C33] flex items-center gap-3 relative z-10 w-full">
                   <div className="flex-1 bg-[#2A3942] rounded-full px-5 py-3 text-[13.5px] text-[#8696A0]">
                     Digite sua mensagem...
                   </div>
                   <div className="w-11 h-11 rounded-full bg-[#00A884] flex items-center justify-center cursor-pointer hover:bg-[#06CF9C] transition-colors shadow-sm">
                     <ArrowRight size={16} className="text-white" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-24 px-5 md:px-6 bg-[#F6F5F2] border-t border-[#E5E5EA]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark tracking-tight">
              Para quem é a <em className="font-serif italic font-normal text-brand-gold">Zayden?</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-[#E5E5EA]">
              <h3 className="text-xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                <Check className="text-[#00A884]" size={24} /> É para você se:
              </h3>
              <ul className="space-y-6">
                {[
                  'Sua clínica recebe mais de 20 mensagens por dia no WhatsApp',
                  'Você quer crescer sem contratar mais equipe',
                  'Você quer dados reais sobre sua operação',
                  'Você quer responder pacientes 24h por dia',
                  'Você busca previsibilidade no crescimento'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-brand-gray text-[15px] leading-snug">
                    <Check size={20} className="text-[#00A884] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-[#E5E5EA]">
              <h3 className="text-xl font-bold text-brand-dark mb-8 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-[12px] font-bold shrink-0">✕</div> Não é para você se:
              </h3>
              <ul className="space-y-6">
                {[
                  'Você quer resultados sem implementação',
                  'Você não está disposto a estruturar seus processos',
                  'Você prefere continuar no manual e perdendo leads'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-brand-gray text-[15px] leading-snug">
                    <div className="w-5 h-5 rounded-full border border-red-200 flex items-center justify-center text-red-400 text-[9px] font-bold shrink-0 mt-0.5">✕</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Cinematic Metric Section */}
      <section className="py-32 px-5 md:px-6 relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply z-10 pointer-events-none"></div>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Corporate" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row gap-16 items-center justify-between">
          <div className="flex-1 max-w-xl">
             <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-[#F9F9FB]">
               Impacto <em className="font-serif italic font-normal text-brand-gold">comprovado.</em>
             </h2>
             <p className="text-[#E4E4E7] text-base md:text-lg font-normal leading-relaxed mb-10">
               Nós não elaboramos projetos longos e complexos. Entregamos soluções práticas, seguras e testadas que resolvem a ineficiência da sua clínica e geram impacto financeiro rapidamente.
             </p>
             <a href="#na-pratica" onClick={(e) => {
               e.preventDefault();
               document.getElementById('na-pratica')?.scrollIntoView({ behavior: 'smooth' });
             }} className="text-[#E4E4E7] border-b border-[#E4E4E7]/30 hover:border-brand-gold hover:text-brand-gold transition-colors pb-1 text-[13px] font-semibold tracking-widest uppercase flex items-center gap-2 w-max">
               Veja uma Demonstração <ArrowRight size={14} />
             </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { val: -85, pre: '', suf: '%', dec: 0, l: 'Tempo de Resposta', desc: 'De horas → para segundos' },
              { val: 300, pre: '+', suf: '%', dec: 0, l: 'Eficiência Operacional', desc: 'Mesma equipe, 3x mais capacidade' },
              { val: -35, pre: '', suf: '%', dec: 0, l: 'Custos Operacionais', desc: 'Menos tarefas manuais, mais resultado' },
              { val: 150, pre: '+', suf: '%', dec: 0, l: 'Retorno (ROI)', desc: 'Investimento recuperado nos primeiros meses' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col relative pl-6">
                <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-brand-gold/30 rounded-full overflow-hidden">
                  <div className="w-full h-1/2 bg-brand-gold rounded-full transform -translate-y-full animate-[slideDown_3s_ease-in-out_infinite]"></div>
                </div>
                <div className="font-serif text-5xl md:text-6xl font-normal text-brand-gold mb-2">
                  <AnimatedNumber value={stat.val} prefix={stat.pre} suffix={stat.suf} decimals={stat.dec} />
                </div>
                <h4 className="text-[12px] text-[#F9F9FB] font-bold uppercase tracking-widest mb-2">{stat.l}</h4>
                <p className="text-[14px] text-[#A1A1AA] font-normal leading-relaxed pr-4">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-6 md:py-32 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <Shield size={32} strokeWidth={1} className="text-brand-gold mb-6" />
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-brand-dark">Chega de perder pacientes.</h2>
          <p className="text-base md:text-lg text-brand-gray mb-8 max-w-xl mx-auto font-normal leading-relaxed">
            Pare de perder vendas porque sua recepção não dá conta do WhatsApp. Estruture um atendimento premium e automático do primeiro contato à consulta.
          </p>
          <div className="inline-flex items-center justify-center gap-2.5 bg-brand-gold/5 border border-brand-gold/20 rounded-full px-5 py-3 mb-10 shadow-sm w-full md:w-auto shrink-0 flex-col md:flex-row text-center md:text-left">
             <div className="w-2.5 h-2.5 shrink-0 rounded-full bg-brand-gold animate-pulse mb-1 md:mb-0"></div>
             <span className="text-[13px] md:text-[14px] text-brand-dark font-medium tracking-tight">
               A ZAYDEN atende um número limitado de clínicas por mês para garantir a qualidade da implementação e o suporte dedicado.
             </span>
          </div>
          <a href="https://wa.me/5527997612291?text=Ol%C3%A1%2C%20quero%20minha%20cl%C3%ADnica%20no%20autom%C3%A1tico." target="_blank" rel="noopener noreferrer" className="bg-brand-dark text-white px-8 py-4 sm:py-3.5 rounded-full text-[15px] sm:text-[14px] font-semibold tracking-wide hover:bg-brand-navy hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex justify-center items-center gap-2 group">
            Quero minha clínica no automático <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer - Elegant & Minimal */}
      <footer className="bg-brand-surface pt-24 pb-12 px-6 border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <BrandLogo />
            </div>
            <p className="text-brand-gray text-[14px] max-w-sm font-light leading-relaxed mt-4">
              Tecnologia de ponta e automação inteligente para empresas que operam acima da média. Elaborado com precisão.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-dark font-semibold mb-6 tracking-wide text-[13px]">Soluções</h4>
            <ul className="flex flex-col gap-4 text-brand-gray text-[14px] font-light">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Agentes IA</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">CRM Operacional</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Recuperação Leads</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Analytics Vault</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-dark font-semibold mb-6 tracking-wide text-[13px]">Contato</h4>
            <ul className="flex flex-col gap-4 text-brand-gray text-[14px] font-light">
              <li><span className="text-brand-dark font-medium">WhatsApp:</span> <a href="https://wa.me/5527997612291" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">(27) 99761-2291</a></li>
              <li><span className="text-brand-dark font-medium">Email:</span> <a href="mailto:zayden.sys@gmail.com" className="hover:text-brand-gold transition-colors">zayden.sys@gmail.com</a></li>
              <li><span className="text-brand-dark font-medium">Local:</span> Espírito Santo — Brasil</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-dark font-semibold mb-6 tracking-wide text-[13px]">Legal</h4>
            <ul className="flex flex-col gap-4 text-brand-gray text-[14px] font-light">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Segurança</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#E5E5EA] flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-brand-gray font-light">
          <p>© {new Date().getFullYear()} ZAYDEN. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:zayden.sys@gmail.com" className="text-brand-gray hover:text-brand-dark transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://instagram.com/zayden.es" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-dark transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5527997612291?text=Ol%C3%A1%2C%20queria%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Zayden." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-[15px] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center group outline-none"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="flex items-center group cursor-pointer">
      <div className="w-[70px] md:w-[95px] lg:w-[110px] -ml-1 transition-transform duration-500 group-hover:scale-[1.03]">
        <img 
          src="https://i.ibb.co/WNnj6Wd6/Chat-GPT-Image-18-de-mai-de-2026-20-43-35.png" 
          alt="ZAYDEN" 
          className="w-full h-auto object-contain"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
      </div>
      <div className="flex flex-col justify-center border-l border-brand-dark/10 pl-3 md:pl-4 ml-1 md:ml-2 h-10 transition-opacity duration-300">
        <span className="text-[12px] md:text-[15px] font-bold tracking-[0.25em] text-brand-dark uppercase leading-none mt-0.5">ZAYDEN</span>
        <span className="text-[7.5px] md:text-[9.5px] text-brand-gold font-bold tracking-[0.15em] uppercase mt-1.5 leading-none">Inteligência que Transforma</span>
      </div>
    </div>
  );
}
