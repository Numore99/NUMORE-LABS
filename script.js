const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const currentPage = document.body.dataset.page;
const supportedLanguages = ["es", "pt", "en"];

const translations = {
  pt: {
    "title.home": "Numore Labs | Soluções Web",
    "title.services": "Serviços | Numore Labs",
    "title.portfolio": "Portfólio | Numore Labs",
    "title.about": "Sobre Nós | Numore Labs",
    "title.contact": "Contato | Numore Labs",
    "meta.home": "Numore Labs cria sites modernos, rápidos e adaptados para celulares, tablets e computadores.",
    "meta.services": "Serviços de desenvolvimento web, lojas virtuais, WhatsApp e suporte da Numore Labs.",
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
    "home.cardWeb": "Sites modernos, rápidos e responsivos para todos os dispositivos.",
    "home.cardStore": "E-commerces completos e seguros para vender mais online.",
    "home.cardWhatsapp": "Conecte seu site ao WhatsApp e facilite o atendimento aos seus clientes.",
    "home.cardSupport": "Mantemos seu site sempre atualizado, seguro e funcionando perfeitamente.",
    "home.portfolioTitle": "Projetos que geram resultados",
    "home.allProjects": "Ver todos os projetos",
    "services.heroTitle": "Soluções prontas para explicar, vender e atender melhor.",
    "services.heroText": "Esta página fica preparada para adicionar detalhes, preços, pacotes, exemplos e condições de cada serviço quando você tiver a informação final.",
    "services.web.title": "Sites Profissionais",
    "services.web.desc": "Desenvolvimento de páginas web para negócios, marcas pessoais e empreendimentos que precisam de uma presença séria, rápida e fácil de navegar.",
    "services.web.b1": "Home, seções internas e estrutura responsiva.",
    "services.web.b2": "Conteúdo preparado para substituir por informação real.",
    "services.web.b3": "Botões de contato, formulários e chamadas para ação.",
    "services.store.title": "Lojas Virtuais",
    "services.store.desc": "Estruturas de loja online para apresentar produtos, organizar categorias e facilitar consultas ou vendas digitais.",
    "services.store.b1": "Página de catálogo e detalhe de produto.",
    "services.store.b2": "Arquitetura preparada para fotos, preços e variantes.",
    "services.store.b3": "Conexão futura com WhatsApp, formulário ou plataforma de venda.",
    "services.whatsapp.title": "Integração com WhatsApp",
    "services.whatsapp.desc": "Botões e links estratégicos para que os visitantes possam iniciar conversas rapidamente a partir do site.",
    "services.whatsapp.b1": "Links diretos preparados para número real.",
    "services.whatsapp.b2": "Mensagens iniciais editáveis por serviço ou produto.",
    "services.whatsapp.b3": "Botões posicionados nos principais pontos de conversão.",
    "services.support.title": "Manutenção e Suporte",
    "services.support.desc": "Acompanhamento para manter o site atualizado, melhorar conteúdo e resolver ajustes necessários depois do lançamento.",
    "services.support.b1": "Atualizações de textos, imagens e seções.",
    "services.support.b2": "Melhorias visuais e técnicas conforme necessidade.",
    "services.support.b3": "Suporte preparado para definir por plano ou projeto.",
    "portfolio.heroTitle": "Projetos reais para mostrar presença digital, produto e experiência.",
    "portfolio.heroText": "Uma seleção de sites e aplicações criados para transformar informação em uma experiência clara, visual e fácil de usar.",
    "portfolio.card1.tag": "Transporte",
    "portfolio.card1.title": "DariMar Viajes y Turismo",
    "portfolio.card2.tag": "Educação",
    "portfolio.card2.title": "Belingolife",
    "portfolio.card3.tag": "Aplicativo",
    "portfolio.card3.title": "RutFit",
    "portfolio.project1.label": "Site institucional",
    "portfolio.project2.label": "Landing page educacional",
    "portfolio.project3.label": "Aplicativo iOS e Android",
    "portfolio.project1.name": "DariMar Viajes y Turismo",
    "portfolio.project2.name": "Belingolife",
    "portfolio.project3.name": "RutFit",
    "portfolio.project1.desc": "Site para traslados privados e grupais, com serviços por tipo de viagem, galeria real da unidade e chamada direta para reserva por WhatsApp.",
    "portfolio.project2.desc": "Experiência visual para aulas online de inglês com a teacher Isa, incluindo idiomas, níveis, métodos, feedbacks reais e contato para aula experimental.",
    "portfolio.project3.desc": "Aplicativo privado de rotinas com login, seleção de idioma, progresso, semanas de treino, detalhe de exercícios e painel administrativo para gerenciar rotinas.",
    "portfolio.viewProject": "Ver projeto",
    "portfolio.viewCode": "Ver código",
    "portfolio.similar": "Quero algo assim",
    "about.heroTitle": "Uma marca preparada para contar sua história com mais força.",
    "about.heroText": "Esta página fica pronta para adicionar origem, missão, valores, equipe, experiência e qualquer detalhe que ajude a gerar confiança.",
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
    "contact.heroText": "Deixe esta página preparada com seus dados finais, número de WhatsApp, e-mail real, horários e qualquer instrução comercial que queira mostrar.",
    "contact.channels": "Canais",
    "contact.infoTitle": "Dados prontos para substituir",
    "contact.infoText": "Quando tiver a informação final, troque estes dados pelo seu número, e-mail, endereço, horários ou links de redes sociais.",
    "contact.whatsappPending": "WhatsApp pendente",
    "form.name": "Nome",
    "form.namePlaceholder": "Seu nome",
    "form.email": "E-mail",
    "form.emailPlaceholder": "seu@email.com",
    "form.project": "Tipo de projeto",
    "form.optionWeb": "Site profissional",
    "form.optionStore": "Loja virtual",
    "form.optionWhatsapp": "Integração com WhatsApp",
    "form.optionSupport": "Manutenção e suporte",
    "form.message": "Mensagem",
    "form.messagePlaceholder": "Conte-nos sobre seu projeto",
    "form.submit": "Enviar mensagem",
    "form.success": "Mensagem pronta. Conecte este formulário ao seu e-mail ou WhatsApp quando tiver os dados finais.",
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
    "meta.services": "Servicios de desarrollo web, tiendas virtuales, WhatsApp y soporte de Numore Labs.",
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
    "home.cardWeb": "Sitios modernos, rápidos y responsivos para todos los dispositivos.",
    "home.cardStore": "E-commerces completos y seguros para vender más online.",
    "home.cardWhatsapp": "Conecta tu sitio a WhatsApp y facilita la atención a tus clientes.",
    "home.cardSupport": "Mantenemos tu sitio siempre actualizado, seguro y funcionando perfectamente.",
    "home.portfolioTitle": "Proyectos que generan resultados",
    "home.allProjects": "Ver todos los proyectos",
    "services.heroTitle": "Soluciones listas para explicar, vender y atender mejor.",
    "services.heroText": "Esta página queda preparada para agregar detalles, precios, paquetes, ejemplos y condiciones de cada servicio cuando tengas la información final.",
    "services.web.title": "Sitios Profesionales",
    "services.web.desc": "Desarrollo de páginas web para negocios, marcas personales y emprendimientos que necesitan una presencia seria, rápida y fácil de navegar.",
    "services.web.b1": "Home, secciones internas y estructura responsiva.",
    "services.web.b2": "Contenido preparado para reemplazar por información real.",
    "services.web.b3": "Botones de contacto, formularios y llamados a la acción.",
    "services.store.title": "Tiendas Virtuales",
    "services.store.desc": "Estructuras de tienda online para presentar productos, ordenar categorías y facilitar consultas o ventas digitales.",
    "services.store.b1": "Página de catálogo y detalle de producto.",
    "services.store.b2": "Arquitectura preparada para fotos, precios y variantes.",
    "services.store.b3": "Conexión futura con WhatsApp, formulario o plataforma de venta.",
    "services.whatsapp.title": "Integración con WhatsApp",
    "services.whatsapp.desc": "Botones y enlaces estratégicos para que los visitantes puedan iniciar conversaciones rápidamente desde la web.",
    "services.whatsapp.b1": "Enlaces directos preparados para número real.",
    "services.whatsapp.b2": "Mensajes iniciales editables por servicio o producto.",
    "services.whatsapp.b3": "Botones ubicados en puntos clave de conversión.",
    "services.support.title": "Mantenimiento y Soporte",
    "services.support.desc": "Acompañamiento para mantener el sitio actualizado, mejorar contenido y resolver ajustes necesarios después del lanzamiento.",
    "services.support.b1": "Actualizaciones de textos, imágenes y secciones.",
    "services.support.b2": "Mejoras visuales y técnicas según necesidad.",
    "services.support.b3": "Soporte preparado para definir por plan o proyecto.",
    "portfolio.heroTitle": "Proyectos reales para mostrar presencia digital, producto y experiencia.",
    "portfolio.heroText": "Una selección de sitios y aplicaciones creados para transformar información en una experiencia clara, visual y fácil de usar.",
    "portfolio.card1.tag": "Transporte",
    "portfolio.card1.title": "DariMar Viajes y Turismo",
    "portfolio.card2.tag": "Educación",
    "portfolio.card2.title": "Belingolife",
    "portfolio.card3.tag": "Aplicación",
    "portfolio.card3.title": "RutFit",
    "portfolio.project1.label": "Sitio institucional",
    "portfolio.project2.label": "Landing page educativa",
    "portfolio.project3.label": "Aplicación iOS y Android",
    "portfolio.project1.name": "DariMar Viajes y Turismo",
    "portfolio.project2.name": "Belingolife",
    "portfolio.project3.name": "RutFit",
    "portfolio.project1.desc": "Sitio para traslados privados y grupales, con servicios por tipo de viaje, galería real de la unidad y llamada directa para reservar por WhatsApp.",
    "portfolio.project2.desc": "Experiencia visual para clases online de inglés con teacher Isa, incluyendo idiomas, niveles, métodos, feedbacks reales y contacto para aula experimental.",
    "portfolio.project3.desc": "Aplicación privada de rutinas con login, selección de idioma, progreso, semanas de entrenamiento, detalle de ejercicios y panel administrativo para gestionar rutinas.",
    "portfolio.viewProject": "Ver proyecto",
    "portfolio.viewCode": "Ver código",
    "portfolio.similar": "Quiero algo así",
    "about.heroTitle": "Una marca preparada para contar su historia con más fuerza.",
    "about.heroText": "Esta página queda lista para agregar origen, misión, valores, equipo, experiencia y cualquier detalle que ayude a generar confianza.",
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
    "contact.heroText": "Deja esta página preparada con tus datos finales, número de WhatsApp, email real, horarios y cualquier instrucción comercial que quieras mostrar.",
    "contact.channels": "Canales",
    "contact.infoTitle": "Datos listos para reemplazar",
    "contact.infoText": "Cuando tengas la información final, cambia estos datos por tu número, email, dirección, horarios o enlaces de redes sociales.",
    "contact.whatsappPending": "WhatsApp pendiente",
    "form.name": "Nombre",
    "form.namePlaceholder": "Tu nombre",
    "form.email": "Email",
    "form.emailPlaceholder": "tu@email.com",
    "form.project": "Tipo de proyecto",
    "form.optionWeb": "Sitio profesional",
    "form.optionStore": "Tienda virtual",
    "form.optionWhatsapp": "Integración con WhatsApp",
    "form.optionSupport": "Mantenimiento y soporte",
    "form.message": "Mensaje",
    "form.messagePlaceholder": "Cuéntanos sobre tu proyecto",
    "form.submit": "Enviar mensaje",
    "form.success": "Mensaje listo. Conecta este formulario a tu email o WhatsApp cuando tengas los datos finales.",
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
    "meta.services": "Web development, online stores, WhatsApp integration, and support services by Numore Labs.",
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
    "home.cardWeb": "Modern, fast, responsive websites for every device.",
    "home.cardStore": "Complete and secure e-commerce experiences to sell more online.",
    "home.cardWhatsapp": "Connect your website to WhatsApp and make customer service easier.",
    "home.cardSupport": "We keep your website updated, secure, and working perfectly.",
    "home.portfolioTitle": "Projects built to generate results",
    "home.allProjects": "View all projects",
    "services.heroTitle": "Solutions ready to explain, sell, and support better.",
    "services.heroText": "This page is prepared for details, pricing, packages, examples, and service conditions when you have the final information.",
    "services.web.title": "Professional Websites",
    "services.web.desc": "Website development for businesses, personal brands, and ventures that need a serious, fast, easy-to-navigate presence.",
    "services.web.b1": "Home page, internal sections, and responsive structure.",
    "services.web.b2": "Content prepared to be replaced with real information.",
    "services.web.b3": "Contact buttons, forms, and calls to action.",
    "services.store.title": "Online Stores",
    "services.store.desc": "Online store structures to present products, organize categories, and enable digital inquiries or sales.",
    "services.store.b1": "Catalog page and product detail page.",
    "services.store.b2": "Architecture prepared for photos, prices, and variants.",
    "services.store.b3": "Future connection to WhatsApp, a form, or a sales platform.",
    "services.whatsapp.title": "WhatsApp Integration",
    "services.whatsapp.desc": "Strategic buttons and links so visitors can start conversations quickly from the website.",
    "services.whatsapp.b1": "Direct links prepared for a real number.",
    "services.whatsapp.b2": "Editable opening messages by service or product.",
    "services.whatsapp.b3": "Buttons placed at key conversion points.",
    "services.support.title": "Maintenance and Support",
    "services.support.desc": "Ongoing support to keep the site updated, improve content, and resolve post-launch adjustments.",
    "services.support.b1": "Text, image, and section updates.",
    "services.support.b2": "Visual and technical improvements as needed.",
    "services.support.b3": "Support prepared to be defined by plan or project.",
    "portfolio.heroTitle": "Real projects that show digital presence, product, and experience.",
    "portfolio.heroText": "A selection of websites and applications created to turn information into a clear, visual, easy-to-use experience.",
    "portfolio.card1.tag": "Transport",
    "portfolio.card1.title": "DariMar Viajes y Turismo",
    "portfolio.card2.tag": "Education",
    "portfolio.card2.title": "Belingolife",
    "portfolio.card3.tag": "Application",
    "portfolio.card3.title": "RutFit",
    "portfolio.project1.label": "Institutional website",
    "portfolio.project2.label": "Educational landing page",
    "portfolio.project3.label": "iOS and Android app",
    "portfolio.project1.name": "DariMar Viajes y Turismo",
    "portfolio.project2.name": "Belingolife",
    "portfolio.project3.name": "RutFit",
    "portfolio.project1.desc": "Website for private and group transfers, with services by trip type, real vehicle gallery, and direct WhatsApp booking calls.",
    "portfolio.project2.desc": "Visual experience for online English classes with teacher Isa, including languages, levels, methods, real feedback, and trial-class contact.",
    "portfolio.project3.desc": "Private routine app with login, language selection, progress, training weeks, exercise detail, and an admin panel to manage routines.",
    "portfolio.viewProject": "View project",
    "portfolio.viewCode": "View code",
    "portfolio.similar": "I want something like this",
    "about.heroTitle": "A brand ready to tell its story with more strength.",
    "about.heroText": "This page is ready for origin, mission, values, team, experience, and any detail that helps build trust.",
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
    "contact.heroText": "Keep this page ready with your final data, WhatsApp number, real email, hours, and any business instructions you want to show.",
    "contact.channels": "Channels",
    "contact.infoTitle": "Data ready to replace",
    "contact.infoText": "When you have the final information, replace these details with your number, email, address, hours, or social links.",
    "contact.whatsappPending": "WhatsApp pending",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.email": "Email",
    "form.emailPlaceholder": "you@email.com",
    "form.project": "Project type",
    "form.optionWeb": "Professional website",
    "form.optionStore": "Online store",
    "form.optionWhatsapp": "WhatsApp integration",
    "form.optionSupport": "Maintenance and support",
    "form.message": "Message",
    "form.messagePlaceholder": "Tell us about your project",
    "form.submit": "Send message",
    "form.success": "Message ready. Connect this form to your email or WhatsApp when you have the final details.",
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

const t = (key, language = getSavedLanguage()) => translations[language][key] || translations.pt[key] || key;

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

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = document.querySelector("[data-form-note]");
    note.textContent = t("form.success");
    event.currentTarget.reset();
  });
}
