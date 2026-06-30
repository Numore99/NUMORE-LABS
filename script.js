const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const currentPage = document.body.dataset.page;
const supportedLanguages = ["es", "pt", "en"];
const whatsappNumber = "5511973570887";
const defaultWhatsappText = "Hola Numore Labs, quiero hacer una consulta";
const buildWhatsappUrl = (message = defaultWhatsappText) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const translations = {
  pt: {
    "title.home": "Numore Labs | Soluções Web",
    "title.services": "Serviços | Numore Labs",
    "title.portfolio": "Portfólio | Numore Labs",
    "title.about": "Sobre Nós | Numore Labs",
    "title.contact": "Contato | Numore Labs",
    "meta.home": "Numore Labs cria sites modernos, rápidos e adaptados para celulares, tablets e computadores.",
    "meta.services": "Serviços de sites profissionais, landing pages de conversão, catálogos e lojas virtuais da Numore Labs.",
    "meta.portfolio": "Portfólio de projetos reais desenvolvidos por Numore Labs.",
    "meta.about": "Sobre a Numore Labs, estúdio digital de desenvolvimento web.",
    "meta.contact": "Contato da Numore Labs para solicitar uma proposta web.",
    "nav.home": "Início",
    "nav.services": "Serviços",
    "nav.portfolio": "Portfólio",
    "nav.about": "Sobre Nós",
    "nav.contact": "Contato",
    "common.talk": "Fale Conosco",
    "common.learnMore": "Saiba mais",
    "common.consultService": "Consultar este serviço",
    "home.eyebrow": "Soluções Digitais",
    "home.heroLine1": "Soluções Web",
    "home.heroAccent": "que impulsionam",
    "home.heroLine3": "seu negócio",
    "home.heroText": "Criamos sites modernos, rápidos e totalmente adaptados para celulares, tablets e computadores.",
    "home.viewServices": "Ver Serviços",
    "home.feature1": "Sites Responsivos",
    "home.feature2": "Suporte e Manutenção",
    "home.feature3": "Entrega Rápida",
    "home.mockLine1": "Transformamos ideias em",
    "home.mockAccent": "experiências digitais",
    "home.mockText": "Desenvolvimento web com design moderno, performance e foco em resultados.",
    "home.servicesKicker": "Nossos Serviços",
    "home.servicesTitle": "Soluções completas para levar sua marca mais longe",
    "home.allServices": "Ver todos os serviços",
    "home.cardWeb": "Sites modernos para apresentar seu negócio com clareza e credibilidade.",
    "home.cardStore": "Estruturas para apresentar produtos e facilitar pedidos online.",
    "home.portfolioTitle": "Projetos que geram resultados",
    "home.allProjects": "Ver todos os projetos",
    "home.stat1Label": "Responsivo em todos os dispositivos",
    "home.stat2Label": "Idiomas disponíveis",
    "home.stat3Label": "Projetos entregues",
    "home.stat4Label": "Suporte e acompanhamento",
    "home.ctaTitle": "Vamos criar algo extraordinário juntos.",
    "home.ctaText": "Conte sua ideia e transformamos em uma presença digital rápida, moderna e pronta para crescer.",
    "home.ctaButton": "Começar projeto",
    "services.heroTitle": "Soluções prontas para explicar, vender e atender melhor.",
    "services.heroText": "Pacotes completos adaptados a cada empresa, com soluções digitais desenhadas para impulsionar seu crescimento e presença online.",
    "services.web.title": "Sites Profissionais",
    "services.web.desc": "Desenvolvimento de páginas web para negócios, marcas pessoais e empreendimentos que precisam de uma presença online séria, moderna e fácil de navegar.",
    "services.web.b1": "Home profissional com apresentação do negócio.",
    "services.web.b2": "Seções de serviços, contato, localização e diferenciais.",
    "services.web.b3": "Design responsivo para celular, tablet e computador.",
    "services.store.title": "Catálogos e Lojas Virtuais",
    "services.store.desc": "Criação de estruturas para apresentar produtos, organizar categorias e facilitar consultas ou vendas online.",
    "services.store.b1": "Página de catálogo com produtos e categorias.",
    "services.store.b2": "Detalhes de produto com fotos, descrição e preço.",
    "services.store.b3": "Botões para compra, orçamento ou pedido pelo WhatsApp.",
    "services.store.b4": "Estrutura preparada para expansão futura.",
    "home.cardLanding": "Páginas focadas em transformar visitantes em clientes.",
    "services.web.b4": "Botões de WhatsApp e chamadas para ação.",
    "services.landing.title": "Landing Pages de Conversão",
    "services.landing.desc": "Páginas focadas em transformar visitantes em clientes, ideais para divulgar um serviço, campanha, produto ou lançamento específico.",
    "services.landing.b1": "Estrutura direta para gerar contatos e orçamentos.",
    "services.landing.b2": "Texto organizado para apresentar benefícios com clareza.",
    "services.landing.b3": "Botões estratégicos de WhatsApp, formulário ou contato.",
    "services.landing.b4": "Layout pensado para anúncios, Instagram e tráfego pago.",
    "form.optionLanding": "Landing page de conversão",
    "form.optionCatalog": "Catálogo ou loja virtual",
    "portfolio.heroText": "Uma seleção de sites e aplicações criados para transformar informação em uma experiência clara, visual e fácil de usar.",
    "portfolio.card1.tag": "Transporte",
    "portfolio.card1.title": "DariMar Viajes y Turismo",
    "portfolio.card2.tag": "Educação",
    "portfolio.card2.title": "Belingolife",
    "portfolio.card3.tag": "Aplicativo Android e iOS",
    "portfolio.card3.title": "RutFit",
    "portfolio.card4.tag": "Adestramento K9",
    "portfolio.card4.title": "Marcelo K9 Working Dogs",
    "portfolio.project1.label": "Site institucional",
    "portfolio.project2.label": "Landing page educacional",
    "portfolio.project3.label": "Aplicativo Android e iOS",
    "portfolio.project4.label": "Landing page premium",
    "portfolio.project1.name": "DariMar Viajes y Turismo",
    "portfolio.project2.name": "Belingolife",
    "portfolio.project3.name": "RutFit",
    "portfolio.project4.name": "Marcelo K9 Working Dogs",
    "portfolio.project1.desc": "Site para traslados privados e grupais, com serviços por tipo de viagem, galeria real da unidade e chamada direta para reserva por WhatsApp.",
    "portfolio.project2.desc": "Experiência visual para aulas online de inglês com a teacher Isa, incluindo idiomas, níveis, métodos, feedbacks reais e contato para aula experimental.",
    "portfolio.project3.desc": "Aplicativo privado de rotinas com login, seleção de idioma, progresso, semanas de treino, detalhe de exercícios e painel administrativo para gerenciar rotinas.",
    "portfolio.project4.desc": "Landing page moderna para treinamento canino, com hero audiovisual, navegação clara, seções de método, serviços, processo, galeria e chamadas diretas para agendar por WhatsApp.",
    "portfolio.viewProject": "Ver projeto",
    "portfolio.viewCode": "Ver código",
    "portfolio.similar": "Quero algo assim",
    "about.heroTitle": "Uma marca preparada para contar sua história com mais força.",
    "about.heroText": "",
    "about.storyKicker": "História",
    "about.storyTitle": "Quem somos",
    "about.storyText": "A Numore Labs é um estúdio digital focado em criar presença web profissional para negócios que querem parecer melhor, comunicar melhor e atender melhor.",
    "about.focusKicker": "Enfoque",
    "about.focusTitle": "Como trabalhamos",
    "about.focusText": "Combinamos estrutura, design e desenvolvimento para criar sites claros, organizados e prontos para crescer com novo conteúdo.",
    "about.valuesKicker": "Valores",
    "about.valuesTitle": "O que priorizamos",
    "about.valuesText": "Clareza, velocidade, estética profissional, comunicação simples e soluções que possam ser mantidas depois do lançamento.",
    "contact.heroTitle": "Conte-nos o que você quer construir.",
    "contact.heroText": "Escreva para a Numore Labs e vamos conversar sobre a melhor forma de transformar sua ideia em uma presença digital profissional.",
    "form.name": "Nome",
    "form.namePlaceholder": "Seu nome",
    "form.email": "E-mail",
    "form.emailPlaceholder": "seu@email.com",
    "form.project": "Tipo de projeto",
    "form.optionWeb": "Site profissional",
    "form.optionStore": "Loja virtual",
    "form.message": "Mensagem",
    "form.messagePlaceholder": "Conte-nos sobre seu projeto",
    "form.submit": "Enviar mensagem",
    "form.success": "Abrimos o WhatsApp com sua mensagem pronta para enviar.",
    "validation.nameRequired": "Preencha seu nome.",
    "validation.emailRequired": "Preencha seu e-mail.",
    "validation.emailInvalid": "Digite um e-mail válido.",
    "validation.messageRequired": "Conte-nos sobre seu projeto.",
    "footer.blurb": "Soluções digitais que impulsionam seu negócio e conectam você ao futuro.",
    "footer.navigation": "Navegação",
    "footer.location": "São Paulo - SP",
    "footer.copy": "© 2025 Numore Labs. Todos os direitos reservados."
  },
  es: {
    "title.home": "Numore Labs | Soluciones Web",
    "title.services": "Servicios | Numore Labs",
    "title.portfolio": "Portafolio | Numore Labs",
    "title.about": "Sobre Nosotros | Numore Labs",
    "title.contact": "Contacto | Numore Labs",
    "meta.home": "Numore Labs crea sitios modernos, rápidos y adaptados para celulares, tablets y computadoras.",
    "meta.services": "Servicios de sitios profesionales, landing pages de conversión, catálogos y tiendas virtuales de Numore Labs.",
    "meta.portfolio": "Portafolio de proyectos reales desarrollados por Numore Labs.",
    "meta.about": "Sobre Numore Labs, estudio digital de desarrollo web.",
    "meta.contact": "Contacto de Numore Labs para solicitar una propuesta web.",
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.about": "Sobre Nosotros",
    "nav.contact": "Contacto",
    "common.talk": "Hablemos",
    "common.learnMore": "Saber más",
    "common.consultService": "Consultar este servicio",
    "home.eyebrow": "Soluciones Digitales",
    "home.heroLine1": "Soluciones Web",
    "home.heroAccent": "que impulsan",
    "home.heroLine3": "tu negocio",
    "home.heroText": "Creamos sitios modernos, rápidos y totalmente adaptados para celulares, tablets y computadoras.",
    "home.viewServices": "Ver Servicios",
    "home.feature1": "Sitios Responsivos",
    "home.feature2": "Soporte y Mantenimiento",
    "home.feature3": "Entrega Rápida",
    "home.mockLine1": "Transformamos ideas en",
    "home.mockAccent": "experiencias digitales",
    "home.mockText": "Desarrollo web con diseño moderno, rendimiento y enfoque en resultados.",
    "home.servicesKicker": "Nuestros Servicios",
    "home.servicesTitle": "Soluciones completas para llevar tu marca más lejos",
    "home.allServices": "Ver todos los servicios",
    "home.cardWeb": "Sitios modernos para presentar tu negocio con claridad y credibilidad.",
    "home.cardStore": "Estructuras para presentar productos y facilitar pedidos online.",
    "home.portfolioTitle": "Proyectos que generan resultados",
    "home.allProjects": "Ver todos los proyectos",
    "home.stat1Label": "Responsivo en todos los dispositivos",
    "home.stat2Label": "Idiomas disponibles",
    "home.stat3Label": "Proyectos entregados",
    "home.stat4Label": "Soporte y acompañamiento",
    "home.ctaTitle": "Creemos algo extraordinario juntos.",
    "home.ctaText": "Cuéntanos tu idea y la convertimos en una presencia digital rápida, moderna y lista para crecer.",
    "home.ctaButton": "Empezar proyecto",
    "services.heroTitle": "Soluciones listas para explicar, vender y atender mejor.",
    "services.heroText": "Paquetes completos adaptados a cada empresa, con soluciones digitales diseñadas para impulsar su crecimiento y presencia online.",
    "services.web.title": "Sitios Profesionales",
    "services.web.desc": "Desarrollo de páginas web para negocios, marcas personales y emprendimientos que necesitan una presencia online seria, moderna y fácil de navegar.",
    "services.web.b1": "Home profesional con presentación del negocio.",
    "services.web.b2": "Secciones de servicios, contacto, ubicación y diferenciales.",
    "services.web.b3": "Diseño responsivo para celular, tablet y computadora.",
    "services.store.title": "Catálogos y Tiendas Virtuales",
    "services.store.desc": "Creación de estructuras para presentar productos, organizar categorías y facilitar consultas o ventas online.",
    "services.store.b1": "Página de catálogo con productos y categorías.",
    "services.store.b2": "Detalles de producto con fotos, descripción y precio.",
    "services.store.b3": "Botones para compra, presupuesto o pedido por WhatsApp.",
    "services.store.b4": "Estructura preparada para expansión futura.",
    "home.cardLanding": "Páginas enfocadas en convertir visitantes en clientes.",
    "services.web.b4": "Botones de WhatsApp y llamados a la acción.",
    "services.landing.title": "Landing Pages de Conversión",
    "services.landing.desc": "Páginas enfocadas en convertir visitantes en clientes, ideales para divulgar un servicio, campaña, producto o lanzamiento específico.",
    "services.landing.b1": "Estructura directa para generar contactos y presupuestos.",
    "services.landing.b2": "Texto organizado para presentar beneficios con claridad.",
    "services.landing.b3": "Botones estratégicos de WhatsApp, formulario o contacto.",
    "services.landing.b4": "Layout pensado para anuncios, Instagram y tráfico pago.",
    "form.optionLanding": "Landing page de conversión",
    "form.optionCatalog": "Catálogo o tienda virtual",
    "portfolio.heroTitle": "Proyectos reales para mostrar presencia digital, producto y experiencia.",
    "portfolio.heroText": "Una selección de sitios y aplicaciones creados para transformar información en una experiencia clara, visual y fácil de usar.",
    "portfolio.card1.tag": "Transporte",
    "portfolio.card1.title": "DariMar Viajes y Turismo",
    "portfolio.card2.tag": "Educación",
    "portfolio.card2.title": "Belingolife",
    "portfolio.card3.tag": "Aplicación Android y iOS",
    "portfolio.card3.title": "RutFit",
    "portfolio.card4.tag": "Entrenamiento K9",
    "portfolio.card4.title": "Marcelo K9 Working Dogs",
    "portfolio.project1.label": "Sitio institucional",
    "portfolio.project2.label": "Landing page educativa",
    "portfolio.project3.label": "Aplicación Android y iOS",
    "portfolio.project4.label": "Landing page premium",
    "portfolio.project1.name": "DariMar Viajes y Turismo",
    "portfolio.project2.name": "Belingolife",
    "portfolio.project3.name": "RutFit",
    "portfolio.project4.name": "Marcelo K9 Working Dogs",
    "portfolio.project1.desc": "Sitio para traslados privados y grupales, con servicios por tipo de viaje, galería real de la unidad y llamada directa para reservar por WhatsApp.",
    "portfolio.project2.desc": "Experiencia visual para clases online de inglés con teacher Isa, incluyendo idiomas, niveles, métodos, feedbacks reales y contacto para aula experimental.",
    "portfolio.project3.desc": "Aplicación privada de rutinas con login, selección de idioma, progreso, semanas de entrenamiento, detalle de ejercicios y panel administrativo para gestionar rutinas.",
    "portfolio.project4.desc": "Landing page moderna para entrenamiento canino, con hero audiovisual, navegación clara, secciones de método, servicios, proceso, galería y llamados directos para agendar por WhatsApp.",
    "portfolio.viewProject": "Ver proyecto",
    "portfolio.viewCode": "Ver código",
    "portfolio.similar": "Quiero algo así",
    "about.heroTitle": "Una marca preparada para contar su historia con más fuerza.",
    "about.heroText": "",
    "about.storyKicker": "Historia",
    "about.storyTitle": "Quiénes somos",
    "about.storyText": "Numore Labs es un estudio digital enfocado en crear presencia web profesional para negocios que quieren verse mejor, comunicar mejor y atender mejor.",
    "about.focusKicker": "Enfoque",
    "about.focusTitle": "Cómo trabajamos",
    "about.focusText": "Combinamos estructura, diseño y desarrollo para crear sitios claros, ordenados y listos para crecer con nuevo contenido.",
    "about.valuesKicker": "Valores",
    "about.valuesTitle": "Qué priorizamos",
    "about.valuesText": "Claridad, velocidad, estética profesional, comunicación simple y soluciones que se puedan mantener después del lanzamiento.",
    "contact.heroTitle": "Cuéntanos qué quieres construir.",
    "contact.heroText": "Escríbenos y conversemos sobre la mejor forma de transformar tu idea en una presencia digital profesional.",
    "form.name": "Nombre",
    "form.namePlaceholder": "Tu nombre",
    "form.email": "Email",
    "form.emailPlaceholder": "tu@email.com",
    "form.project": "Tipo de proyecto",
    "form.optionWeb": "Sitio profesional",
    "form.optionStore": "Tienda virtual",
    "form.message": "Mensaje",
    "form.messagePlaceholder": "Cuéntanos sobre tu proyecto",
    "form.submit": "Enviar mensaje",
    "form.success": "Abrimos WhatsApp con tu mensaje listo para enviar.",
    "validation.nameRequired": "Completa tu nombre.",
    "validation.emailRequired": "Completa tu email.",
    "validation.emailInvalid": "Ingresa un email válido.",
    "validation.messageRequired": "Cuéntanos sobre tu proyecto.",
    "footer.blurb": "Soluciones digitales que impulsan tu negocio y te conectan con el futuro.",
    "footer.navigation": "Navegación",
    "footer.location": "São Paulo - SP",
    "footer.copy": "© 2025 Numore Labs. Todos los derechos reservados."
  },
  en: {
    "title.home": "Numore Labs | Web Solutions",
    "title.services": "Services | Numore Labs",
    "title.portfolio": "Portfolio | Numore Labs",
    "title.about": "About Us | Numore Labs",
    "title.contact": "Contact | Numore Labs",
    "meta.home": "Numore Labs creates modern, fast websites adapted for phones, tablets, and computers.",
    "meta.services": "Professional websites, conversion landing pages, catalogs, and online store services by Numore Labs.",
    "meta.portfolio": "Real project portfolio developed by Numore Labs.",
    "meta.about": "About Numore Labs, a digital web development studio.",
    "meta.contact": "Contact Numore Labs to request a web proposal.",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "common.talk": "Contact Us",
    "common.learnMore": "Learn more",
    "common.consultService": "Ask about this service",
    "home.eyebrow": "Digital Solutions",
    "home.heroLine1": "Web Solutions",
    "home.heroAccent": "that boost",
    "home.heroLine3": "your business",
    "home.heroText": "We create modern, fast websites fully adapted for phones, tablets, and computers.",
    "home.viewServices": "View Services",
    "home.feature1": "Responsive Websites",
    "home.feature2": "Support and Maintenance",
    "home.feature3": "Fast Delivery",
    "home.mockLine1": "We transform ideas into",
    "home.mockAccent": "digital experiences",
    "home.mockText": "Web development with modern design, performance, and a results-focused approach.",
    "home.servicesKicker": "Our Services",
    "home.servicesTitle": "Complete solutions to take your brand further",
    "home.allServices": "View all services",
    "home.cardWeb": "Modern websites to present your business with clarity and credibility.",
    "home.cardStore": "Structures to present products and make online orders easier.",
    "home.portfolioTitle": "Projects built to generate results",
    "home.allProjects": "View all projects",
    "home.stat1Label": "Responsive on every device",
    "home.stat2Label": "Languages available",
    "home.stat3Label": "Projects delivered",
    "home.stat4Label": "Support and maintenance",
    "home.ctaTitle": "Let's build something extraordinary together.",
    "home.ctaText": "Tell us your idea and we'll turn it into a fast, modern digital presence ready to grow.",
    "home.ctaButton": "Start a project",
    "services.heroTitle": "Solutions ready to explain, sell, and support better.",
    "services.heroText": "Complete packages adapted to each company, with digital solutions designed to boost growth and online presence.",
    "services.web.title": "Professional Websites",
    "services.web.desc": "Website development for businesses, personal brands, and ventures that need a serious, modern, easy-to-navigate online presence.",
    "services.web.b1": "Professional home page that presents the business.",
    "services.web.b2": "Service, contact, location, and differentiator sections.",
    "services.web.b3": "Responsive design for phone, tablet, and desktop.",
    "services.store.title": "Catalogs and Online Stores",
    "services.store.desc": "Creation of structures to present products, organize categories, and make online inquiries or sales easier.",
    "services.store.b1": "Catalog page with products and categories.",
    "services.store.b2": "Product details with photos, description, and price.",
    "services.store.b3": "Buttons for purchase, quote, or WhatsApp order.",
    "services.store.b4": "Structure prepared for future expansion.",
    "home.cardLanding": "Pages focused on turning visitors into clients.",
    "services.web.b4": "WhatsApp buttons and calls to action.",
    "services.landing.title": "Conversion Landing Pages",
    "services.landing.desc": "Pages focused on turning visitors into clients, ideal for promoting a service, campaign, product, or specific launch.",
    "services.landing.b1": "Direct structure to generate contacts and quotes.",
    "services.landing.b2": "Organized copy to present benefits clearly.",
    "services.landing.b3": "Strategic WhatsApp, form, or contact buttons.",
    "services.landing.b4": "Layout designed for ads, Instagram, and paid traffic.",
    "form.optionLanding": "Conversion landing page",
    "form.optionCatalog": "Catalog or online store",
    "portfolio.heroTitle": "Real projects that show digital presence, product, and experience.",
    "portfolio.heroText": "A selection of websites and applications created to turn information into a clear, visual, easy-to-use experience.",
    "portfolio.card1.tag": "Transport",
    "portfolio.card1.title": "DariMar Viajes y Turismo",
    "portfolio.card2.tag": "Education",
    "portfolio.card2.title": "Belingolife",
    "portfolio.card3.tag": "Android and iOS app",
    "portfolio.card3.title": "RutFit",
    "portfolio.card4.tag": "K9 training",
    "portfolio.card4.title": "Marcelo K9 Working Dogs",
    "portfolio.project1.label": "Institutional website",
    "portfolio.project2.label": "Educational landing page",
    "portfolio.project3.label": "Android and iOS app",
    "portfolio.project4.label": "Premium landing page",
    "portfolio.project1.name": "DariMar Viajes y Turismo",
    "portfolio.project2.name": "Belingolife",
    "portfolio.project3.name": "RutFit",
    "portfolio.project4.name": "Marcelo K9 Working Dogs",
    "portfolio.project1.desc": "Website for private and group transfers, with services by trip type, real vehicle gallery, and direct WhatsApp booking calls.",
    "portfolio.project2.desc": "Visual experience for online English classes with teacher Isa, including languages, levels, methods, real feedback, and trial-class contact.",
    "portfolio.project3.desc": "Private routine app with login, language selection, progress, training weeks, exercise detail, and an admin panel to manage routines.",
    "portfolio.project4.desc": "Modern landing page for dog training, with an audiovisual hero, clear navigation, method, services, process, gallery sections, and direct WhatsApp booking calls.",
    "portfolio.viewProject": "View project",
    "portfolio.viewCode": "View code",
    "portfolio.similar": "I want something like this",
    "about.heroTitle": "A brand ready to tell its story with more strength.",
    "about.heroText": "",
    "about.storyKicker": "Story",
    "about.storyTitle": "Who we are",
    "about.storyText": "Numore Labs is a digital studio focused on creating professional web presence for businesses that want to look better, communicate better, and serve better.",
    "about.focusKicker": "Approach",
    "about.focusTitle": "How we work",
    "about.focusText": "We combine structure, design, and development to create clear, organized websites ready to grow with new content.",
    "about.valuesKicker": "Values",
    "about.valuesTitle": "What we prioritize",
    "about.valuesText": "Clarity, speed, professional aesthetics, simple communication, and solutions that can be maintained after launch.",
    "contact.heroTitle": "Tell us what you want to build.",
    "contact.heroText": "Write to Numore Labs and let’s talk about the best way to turn your idea into a professional digital presence.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.email": "Email",
    "form.emailPlaceholder": "you@email.com",
    "form.project": "Project type",
    "form.optionWeb": "Professional website",
    "form.optionStore": "Online store",
    "form.message": "Message",
    "form.messagePlaceholder": "Tell us about your project",
    "form.submit": "Send message",
    "form.success": "WhatsApp opened with your message ready to send.",
    "validation.nameRequired": "Please enter your name.",
    "validation.emailRequired": "Please enter your email.",
    "validation.emailInvalid": "Please enter a valid email.",
    "validation.messageRequired": "Tell us about your project.",
    "footer.blurb": "Digital solutions that boost your business and connect you to the future.",
    "footer.navigation": "Navigation",
    "footer.location": "São Paulo - SP",
    "footer.copy": "© 2025 Numore Labs. All rights reserved."
  }
};

const getSavedLanguage = () => {
  const saved = localStorage.getItem("numore-lang");
  if (supportedLanguages.includes(saved)) return saved;
  return "pt";
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

const initMatrixRain = () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery.matches) return;

  const canvas = document.createElement("canvas");
  canvas.className = "matrix-rain";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    canvas.remove();
    return;
  }

  const characters = "NUMORELABS<>/{}01";
  const state = {
    columns: [],
    fontSize: 15,
    width: 0,
    height: 0,
    lastFrame: 0,
    frameMs: 96
  };

  const resizeCanvas = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const isMobile = window.innerWidth < 700;
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    state.fontSize = isMobile ? 17 : 15;
    state.frameMs = isMobile ? 180 : 96;

    canvas.width = Math.floor(state.width * pixelRatio);
    canvas.height = Math.floor(state.height * pixelRatio);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.font = `400 ${state.fontSize}px Consolas, "Courier New", monospace`;
    context.textAlign = "center";
    context.textBaseline = "top";

    const gap = isMobile ? 64 : 34;
    const columnCount = Math.ceil(state.width / gap);
    state.columns = Array.from({ length: columnCount }, (_, index) => ({
      x: index * gap + gap / 2,
      y: Math.random() * state.height,
      speed: isMobile ? 0.38 + Math.random() * 0.32 : 0.65 + Math.random() * 0.58,
      trail: isMobile ? 4 + Math.floor(Math.random() * 3) : 6 + Math.floor(Math.random() * 6)
    }));
  };

  const draw = (timestamp) => {
    if (document.hidden) {
      state.lastFrame = timestamp;
      window.requestAnimationFrame(draw);
      return;
    }

    if (timestamp - state.lastFrame < state.frameMs) {
      window.requestAnimationFrame(draw);
      return;
    }

    state.lastFrame = timestamp;
    context.clearRect(0, 0, state.width, state.height);

    state.columns.forEach((column) => {
      for (let step = 0; step < column.trail; step += 1) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        const y = column.y - step * state.fontSize * 1.28;
        if (y < -state.fontSize || y > state.height) continue;

        const alpha = Math.max(0, (column.trail - step) / column.trail);
        const isAccent = Math.random() > 0.92;
        context.fillStyle = isAccent
          ? `rgba(54, 255, 134, ${0.16 * alpha})`
          : `rgba(0, 200, 255, ${0.18 * alpha})`;
        context.fillText(character, column.x, y);
      }

      column.y += state.fontSize * column.speed;
      if (column.y - column.trail * state.fontSize > state.height + 80) {
        column.y = -Math.random() * state.height * 0.5;
      }
    });

    window.requestAnimationFrame(draw);
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.requestAnimationFrame(draw);
};

const t = (key, language = getSavedLanguage()) => translations[language][key] || translations.pt[key] || key;

const validationMessages = {
  name: {
    valueMissing: "validation.nameRequired"
  },
  email: {
    valueMissing: "validation.emailRequired",
    typeMismatch: "validation.emailInvalid"
  },
  message: {
    valueMissing: "validation.messageRequired"
  }
};

const getValidationMessage = (field) => {
  const messages = validationMessages[field.name];
  if (!messages) return "";
  if (field.validity.valueMissing && messages.valueMissing) return t(messages.valueMissing);
  if (field.validity.typeMismatch && messages.typeMismatch) return t(messages.typeMismatch);
  return "";
};

const updateFieldValidation = (field) => {
  field.setCustomValidity("");
  const message = getValidationMessage(field);
  field.setCustomValidity(message);
};

const syncFormValidationMessages = () => {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.querySelectorAll("input, textarea").forEach((field) => {
    if (field.validity.valid) {
      field.setCustomValidity("");
      return;
    }
    updateFieldValidation(field);
  });
};

const applyLanguage = (language) => {
  const lang = supportedLanguages.includes(language) ? language : "pt";
  localStorage.setItem("numore-lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n, lang);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder, lang));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    document.title = t(element.dataset.i18nTitle, lang);
  });
  document.querySelectorAll("[data-i18n-meta]").forEach((element) => {
    element.setAttribute("content", t(element.dataset.i18nMeta, lang));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  syncFormValidationMessages();
};

document.querySelectorAll("[data-nav-page]").forEach((link) => {
  link.classList.toggle("is-active", link.dataset.navPage === currentPage);
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
applyLanguage(getSavedLanguage());
initMatrixRain();

const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-visual, .page-hero, .section-heading, .service-card, .project-card, .stat-card, .cta-band, .marquee, .about-panel, .detail-card, .case-card, .story-card, .contact-form, .footer-grid > div"
);

revealTargets.forEach((element, index) => {
  element.dataset.reveal = "";
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
});

document.querySelectorAll(".hero-badge").forEach((element, index) => {
  element.dataset.float = "";
  element.classList.add("is-visible");
  element.style.setProperty("--float-duration", `${6 + (index % 3)}s`);
  element.style.setProperty("--float-delay", `${(index % 4) * -0.8}s`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { threshold: 0.12, rootMargin: "-6% 0px -10% 0px" }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("invalid", () => updateFieldValidation(field));
    field.addEventListener("input", () => {
      field.setCustomValidity("");
      if (!field.validity.valid) updateFieldValidation(field);
    });
    field.addEventListener("blur", () => updateFieldValidation(field));
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = document.querySelector("[data-form-note]");
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hola Numore Labs, quiero hacer una consulta.",
      `Nombre: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Proyecto: ${formData.get("project") || ""}`,
      `Mensaje: ${formData.get("message") || ""}`
    ].join("\n");
    window.open(buildWhatsappUrl(message), "_blank", "noopener");
    note.textContent = t("form.success");
    event.currentTarget.reset();
  });
}

/* ===========================================================
   Mejoras de interacción 2026
   =========================================================== */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Barra de progreso de scroll
(() => {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.width = `${Math.min(100, ratio * 100)}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
})();

// Spotlight de cursor + tilt 3D en tarjetas
if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  const spotlightCards = document.querySelectorAll(".service-card, .stat-card, .story-card");
  spotlightCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });
  });

  const tiltCards = document.querySelectorAll(".service-card, .project-card, .case-card");
  tiltCards.forEach((card) => {
    let raf = null;
    card.style.transformStyle = "preserve-3d";
    card.addEventListener("pointermove", (event) => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = null;
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-8px) perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
      });
    });
    card.addEventListener("pointerleave", () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
        raf = null;
      }
      card.style.transform = "";
    });
  });
}

// Contadores animados
const counters = document.querySelectorAll("[data-count]");
if (counters.length) {
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (Number.isNaN(target)) {
      el.textContent = el.dataset.suffix || el.textContent;
      return;
    }
    if (prefersReducedMotion) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const countObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countObserver.observe(el));
  } else {
    counters.forEach((el) => animateCount(el));
  }
}
