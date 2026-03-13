/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Heart,
  Menu,
  X,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Procedimentos', href: '#procedimentos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <a href="#home" className="block outline-none">
            <img 
              src="https://i.imgur.com/Quvgqwv.png" 
              alt="Florida Estética Logo" 
              className={`transition-all duration-500 object-contain ${isScrolled ? 'h-8 sm:h-10' : 'h-12 sm:h-14 lg:h-16'}`}
              referrerPolicy="no-referrer"
            />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] xl:text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-rose transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a 
            href="https://wa.me/5571988619146" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rose text-white px-6 py-3 rounded-full text-xs font-extrabold tracking-wider hover:bg-rose/90 transition-all shadow-lg hover:shadow-rose/30"
          >
            AGENDAR AVALIAÇÃO
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <motion.a 
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/5571988619146" 
            className="bg-rose text-white p-2.5 rounded-full shadow-lg"
            aria-label="Agendar"
          >
            <Phone size={18} />
          </motion.a>
          <button 
            className="text-ink p-2 relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-md z-[55] lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.1)] z-[58] lg:hidden flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-beige/50">
                <img src="https://i.imgur.com/Quvgqwv.png" alt="Logo" className="h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              
              <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-3xl font-serif text-ink hover:text-rose transition-colors flex items-center justify-between group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={20} className="text-rose opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </motion.a>
                ))}
              </div>

              <div className="p-8 bg-beige/20 border-t border-beige/50">
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-4">Fale Conosco</p>
                  <p className="text-ink font-medium">(71) 98861-9146</p>
                  <p className="text-ink/60 text-sm">Salvador - Bahia</p>
                </div>
                
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/5571988619146" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rose text-white text-center py-5 rounded-2xl font-extrabold block shadow-xl shadow-rose/20 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agendar Avaliação
                </motion.a>
                
                <div className="flex justify-center gap-8 mt-10 text-rose">
                  <motion.a whileHover={{ y: -3 }} href="#" className="p-3 bg-white rounded-full shadow-md"><Instagram size={24} /></motion.a>
                  <motion.a whileHover={{ y: -3 }} href="#" className="p-3 bg-white rounded-full shadow-md"><MessageCircle size={24} /></motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5571988619146" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={32} fill="currentColor" />
  </a>
);

const SectionHeading = ({ children, subtitle, centered = false }: { children: React.ReactNode, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {subtitle && <span className="text-rose font-semibold tracking-widest uppercase text-xs mb-2 block">{subtitle}</span>}
    <h2 className="text-4xl md:text-5xl font-serif text-ink leading-tight">{children}</h2>
    <div className={`h-1 w-20 bg-coral mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />

      {/* 1. HERO SECTION */}
      <header id="home" className="relative min-h-screen flex items-center pt-24 pb-12 bg-gradient-to-br from-beige via-white to-rose-light/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-rose rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-24 w-64 h-64 bg-coral rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="section-padding grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 bg-white/60 backdrop-blur-sm w-fit px-5 py-2 rounded-full border border-rose/10 mx-auto lg:mx-0 shadow-sm"
            >
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-ink/70 tracking-wider uppercase">4.8 no Google (229 avaliações)</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif text-ink leading-[1.1] mb-8">
              Clínica de Estética <br />
              <span className="text-rose italic relative">
                Premium
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-coral/30 rounded-full"
                ></motion.span>
              </span> em Salvador
            </h1>
            
            <p className="text-base sm:text-lg xl:text-xl text-ink/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tecnologia de ponta, profissionais especializados e atendimento humanizado para realçar sua melhor versão com naturalidade e sofisticação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5571988619146" 
                className="btn-premium bg-rose text-white text-center flex items-center justify-center gap-2 py-5 px-10 text-base font-bold shadow-rose/20"
              >
                Agendar avaliação <ChevronRight size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/5571988619146" 
                className="btn-premium bg-white text-rose border border-rose/10 text-center flex items-center justify-center gap-2 py-5 px-10 text-base font-bold shadow-sm"
              >
                Falar no WhatsApp <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative hidden sm:block"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(229,152,155,0.3)] relative z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000" 
                alt="Tratamento estético premium" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-xl z-20 max-w-[220px] border-rose/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center text-rose">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink">Segurança</span>
              </div>
              <p className="text-[10px] text-ink/60 leading-tight">Protocolos exclusivos e tecnologia de última geração para sua total tranquilidade.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 -right-12 glass p-5 rounded-3xl shadow-xl z-20 border-rose/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-ink">+200 Clientes</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* 2. SOBRE A CLÍNICA */}
      <section id="sobre" className="bg-white overflow-hidden">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <SectionHeading subtitle="Nossa Essência">
                Referência em Estética <br /> de Alto Padrão
              </SectionHeading>
              
              <p className="text-ink/70 mb-8 text-lg leading-relaxed">
                A Florida Estética nasceu do desejo de oferecer tratamentos que unem ciência, tecnologia e um olhar artístico sobre a beleza. Localizada no coração de Salvador, no Boulevard Side Empresarial, somos referência em procedimentos que valorizam a naturalidade.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: <Users size={24} />, title: "Especialistas", desc: "Equipe graduada e em constante atualização." },
                  { icon: <Sparkles size={24} />, title: "Tecnologia", desc: "Equipamentos de última geração mundial." },
                  { icon: <Heart size={24} />, title: "Acolhimento", desc: "Ambiente planejado para seu relaxamento." },
                  { icon: <CheckCircle2 size={24} />, title: "Excelência", desc: "Resultados comprovados por centenas de clientes." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-3"
                  >
                    <div className="w-12 h-12 bg-beige rounded-2xl flex items-center justify-center text-rose shadow-sm">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-ink">{item.title}</h4>
                    <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.a 
                whileHover={{ x: 10 }}
                href="#procedimentos" 
                className="mt-12 inline-flex items-center gap-3 text-rose font-bold text-lg group"
              >
                Conheça nossos tratamentos <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-beige relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Ambiente da clínica Florida Estética" 
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-rose text-white p-10 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-2xl z-20 border-4 border-white"
              >
                <span className="text-4xl font-serif font-bold">10+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-center mt-1">Anos de <br /> Experiência</span>
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-coral/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROCEDIMENTOS */}
      <section id="procedimentos" className="bg-beige/30 overflow-hidden">
        <div className="section-padding">
          <SectionHeading subtitle="Nossas Especialidades" centered>
            Tratamentos Exclusivos
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Estética Facial",
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
                items: ["Limpeza de Pele Premium", "Peeling Químico", "Microagulhamento", "Hidratação Profunda"]
              },
              {
                title: "Estética Corporal",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600",
                items: ["Drenagem Linfática", "Massagem Modeladora", "Criolipólise", "Tratamento de Celulite"]
              },
              {
                title: "Rejuvenescimento",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600",
                items: ["Toxina Botulínica", "Preenchimento", "Bioestimuladores", "Lifting não invasivo"]
              },
              {
                title: "Personalizados",
                image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
                items: ["Protocolos VIP", "Especial Noivas", "Pós-Operatório", "Consultoria Estética"]
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-8 text-white text-2xl font-serif">{cat.title}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-ink/70">
                        <div className="w-1.5 h-1.5 bg-rose rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.a 
                    whileHover={{ backgroundColor: "#E5989B", color: "#FFFFFF" }}
                    href="https://wa.me/5571988619146" 
                    className="mt-auto w-full py-4 border border-rose/20 rounded-2xl text-rose text-sm font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    Ver detalhes <ChevronRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section id="diferenciais" className="bg-white overflow-hidden">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 lg:sticky lg:top-32"
            >
              <SectionHeading subtitle="O Padrão Florida">
                Diferenciais que <br /> nos tornam únicos
              </SectionHeading>
              <p className="text-ink/60 leading-relaxed mb-10 text-lg">
                Não somos apenas uma clínica, somos um refúgio de bem-estar onde cada detalhe foi pensado para sua experiência ser inesquecível e transformadora.
              </p>
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 bg-beige rounded-full flex items-center justify-center text-rose shadow-inner"
              >
                <Sparkles size={40} />
              </motion.div>
            </motion.div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Atendimento Humanizado", desc: "Cada paciente é único. Criamos planos de tratamento personalizados para suas necessidades reais." },
                { title: "Equipamentos Modernos", desc: "Investimos constantemente nas tecnologias mais avançadas do mercado estético mundial." },
                { title: "Profissionais Especializados", desc: "Nossa equipe passa por treinamentos constantes para oferecer o melhor em cada técnica." },
                { title: "Estrutura Premium", desc: "Um ambiente sofisticado, limpo e acolhedor no Boulevard Side Empresarial, coração de Salvador." },
                { title: "Resultados Naturais", desc: "Nossa filosofia é realçar sua beleza sem exageros, mantendo sua essência e harmonia facial." },
                { title: "Segurança Total", desc: "Seguimos rigorosamente todos os protocolos de saúde e vigilância sanitária em cada atendimento." },
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "#FFFFFF" }}
                  className="p-10 rounded-[2.5rem] bg-beige/20 border border-beige/50 hover:shadow-[0_20px_40px_-15px_rgba(229,152,155,0.15)] transition-all group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-rose mb-6 shadow-sm group-hover:bg-rose group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-serif text-2xl mb-4 text-ink group-hover:text-rose transition-colors">{card.title}</h4>
                  <p className="text-sm text-ink/60 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEPOIMENTOS */}
      <section className="bg-rose/5 overflow-hidden">
        <div className="section-padding">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-md mb-8 border border-rose/10"
            >
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="font-bold text-ink text-sm">4.8/5 no Google Business</span>
            </motion.div>
            <SectionHeading centered subtitle="Experiências Reais">O que dizem nossas clientes</SectionHeading>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Mariana Silva", text: "Atendimento impecável! A Dra Gabriela é uma profissional incrível, muito atenciosa. Os resultados foram além do que eu esperava. Senti-me muito segura.", date: "Há 2 meses" },
              { name: "Carla Menezes", text: "A clínica é linda e super limpa. Fiz criolipólise e amei o resultado. O atendimento das meninas na recepção também é nota 10. Recomendo muito!", date: "Há 1 mês" },
              { name: "Juliana Costa", text: "Melhor clínica de Salvador! Tecnologia de ponta e profissionais que realmente entendem do que estão fazendo. O ambiente é maravilhoso e relaxante.", date: "Há 3 semanas" },
            ].map((dep, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 relative flex flex-col"
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-rose text-white rounded-full flex items-center justify-center italic font-serif text-3xl shadow-lg">“</div>
                <p className="text-ink/70 italic mb-10 leading-relaxed text-lg flex-1">"{dep.text}"</p>
                <div className="flex justify-between items-center border-t border-beige pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center text-rose font-bold">
                      {dep.name[0]}
                    </div>
                    <span className="font-bold text-ink">{dep.name}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">{dep.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-16"
          >
            <p className="text-ink/50 text-sm mb-6">Baseado em 229 avaliações reais no Google Business</p>
            <a href="https://www.google.com/search?q=Florida+Estetica+Salvador" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-rose font-bold hover:gap-4 transition-all group border-b-2 border-rose/20 pb-1">
              Ver todas as avaliações no Google <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 6. LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-beige/20 overflow-hidden">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Onde estamos">Localização Privilegiada</SectionHeading>
              
              <div className="space-y-10 mb-12">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-rose shadow-md shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink text-xl mb-2">Endereço</h4>
                    <p className="text-ink/60 leading-relaxed">
                      Av. Tancredo Neves, 01 <br />
                      Pituba — Salvador — BA <br />
                      Boulevard Side Empresarial
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-rose shadow-md shrink-0">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink text-xl mb-2">Contato Direto</h4>
                    <p className="text-ink/60 text-lg">(71) 98861-9146</p>
                    <p className="text-rose text-sm font-bold mt-1">Disponível para WhatsApp</p>
                  </div>
                </div>
              </div>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.google.com/maps/dir/?api=1&destination=Boulevard+Side+Empresarial+Salvador" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-premium bg-ink text-white inline-flex items-center gap-3 py-5 px-10 shadow-xl"
              >
                Traçar rota no Google Maps <MapPin size={20} />
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3.5rem] overflow-hidden shadow-2xl h-[500px] bg-white border-[12px] border-white relative group"
            >
              <div className="absolute inset-0 bg-beige/50 flex flex-col items-center justify-center text-ink/30 p-12 text-center">
                <MapPin size={64} className="mb-6 opacity-20" />
                <p className="font-serif text-2xl italic">Mapa Interativo</p>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.818721115161!2d-38.4549219!3d-12.983424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b11066666667%3A0x6666666666666666!2sBoulevard%20Side%20Empresarial!5e0!3m2!1spt-BR!2sbr!4v1621234567890!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Localização Florida Estética"
                className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-rose z-0"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 z-10"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </motion.div>
        
        <div className="section-padding relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-10 leading-[1.1]">
              Agende sua avaliação e <br /> <span className="italic">realce sua beleza</span>.
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para cuidar de você com toda a sofisticação, tecnologia e carinho que você merece.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5571988619146" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-16 py-6 bg-white text-rose rounded-full font-extrabold text-xl shadow-2xl inline-flex items-center gap-4 transition-all"
            >
              Falar no WhatsApp <MessageCircle size={28} fill="currentColor" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white pt-24 pb-12 overflow-hidden">
        <div className="section-padding grid sm:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/5 pb-20">
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-2 mb-8"
            >
              <img 
                src="https://i.imgur.com/Quvgqwv.png" 
                alt="Florida Estética Logo" 
                className="h-16 brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xs">
              Sua clínica de estética premium em Salvador. Tecnologia e arte unidas para realçar sua beleza natural com total segurança e sofisticação.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <MessageCircle size={20} />, href: "#" },
                { icon: <Users size={20} />, href: "#" },
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "#E5989B", borderColor: "#E5989B" }}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-rose">Navegação</h4>
            <ul className="space-y-5 text-sm text-white/50">
              {['Início', 'Sobre Nós', 'Procedimentos', 'Diferenciais', 'Nossa Equipe', 'Localização'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-rose transition-all group-hover:w-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-rose">Tratamentos</h4>
            <ul className="space-y-5 text-sm text-white/50">
              {['Estética Facial', 'Estética Corporal', 'Rejuvenescimento', 'Protocolos VIP', 'Especial Noivas', 'Pós-Operatório'].map(item => (
                <li key={item}>
                  <a href="#procedimentos" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-rose transition-all group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-rose">Atendimento</h4>
            <ul className="space-y-6 text-sm text-white/50">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose">
                  <Phone size={16} />
                </div>
                <span>(71) 98861-9146</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed">Av. Tancredo Neves, 01, <br /> Boulevard Side, Salvador - BA</span>
              </li>
              <li className="pt-4 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/20 mb-2">Horários</p>
                <p className="text-white/40">Seg a Sex: 09h às 19h</p>
                <p className="text-white/40">Sáb: 09h às 13h</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="section-padding py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Florida Estética. Todos os direitos reservados.</p>
          <p>Desenvolvido com excelência para Salvador.</p>
        </div>
      </footer>
    </div>
  );
}
