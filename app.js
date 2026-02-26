const t = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    heroKicker: "AI Portfolio",
    heroPill: "Beginner-friendly",
    heroTitle: "Build real AI projects. Show them professionally.",
    heroSub: "A clean portfolio website to showcase your AI work, skills, and contact info — Arabic & English ready.",
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
    f1: "Projects that clients want",
    f1p: "Chatbots, analytics, automation, and AI tools with real value.",
    f2: "Simple and modern design",
    f2p: "Looks professional on mobile and desktop.",
    f3: "Ready to publish free",
    f3p: "GitHub Pages or Vercel — no cost to go live.",
    latest: "Featured Projects",
    latestHint: "Add your best 3",
    p1: "Customer Support AI Chatbot",
    p1d: "Website chatbot with FAQs + smart responses (Flask / FastAPI).",
    p2: "AI Resume & Cover Letter Helper",
    p2d: "Generate CV improvements and tailored cover letters.",
    p3: "Sales Lead Analyzer",
    p3d: "Upload CSV leads → scoring + insights dashboard.",
    tech: "Tech",
    footer: "© 2026 Ahmed Mohy — AI Portfolio"
  },
  ar: {
    navHome: "الرئيسية",
    navProjects: "المشاريع",
    navAbout: "من أنا",
    navContact: "تواصل معي",
    heroKicker: "بورتفوليو ذكاء اصطناعي",
    heroPill: "مناسب للمبتدئين",
    heroTitle: "ابنِ مشاريع AI حقيقية واعرضها بشكل احترافي.",
    heroSub: "موقع بورتفوليو نظيف لعرض مشاريع الذكاء الاصطناعي والمهارات ووسائل التواصل — يدعم العربي والإنجليزي.",
    ctaProjects: "شاهد المشاريع",
    ctaContact: "تواصل معي",
    f1: "مشاريع مطلوبة للعملاء",
    f1p: "شات بوت، تحليلات، أتمتة، وأدوات AI ذات قيمة حقيقية.",
    f2: "تصميم بسيط وحديث",
    f2p: "مظهر احترافي على الموبايل والكمبيوتر.",
    f3: "جاهز للنشر مجاناً",
    f3p: "GitHub Pages أو Vercel — بدون تكلفة.",
    latest: "أفضل المشاريع",
    latestHint: "أضف أفضل 3",
    p1: "شات بوت دعم عملاء",
    p1d: "شات بوت للموقع بأسئلة شائعة + ردود ذكية (Flask / FastAPI).",
    p2: "مساعد السيرة الذاتية",
    p2d: "تحسين CV وكتابة Cover Letter حسب الوظيفة.",
    p3: "تحليل العملاء المحتملين",
    p3d: "رفع ملف CSV → تقييم العملاء + لوحة معلومات.",
    tech: "التقنيات",
    footer: "© 2026 Ahmed Mohy — بورتفوليو ذكاء اصطناعي"
  }
};

function setLang(lang){
  localStorage.setItem("lang", lang);
  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.body.classList.toggle("rtl", isAr);

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(t[lang][key]) el.textContent = t[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(t[lang][key]) el.setAttribute("placeholder", t[lang][key]);
  });

  const btn = document.getElementById("langBtn");
  if(btn) btn.textContent = (lang === "ar") ? "EN" : "AR";
}

document.addEventListener("DOMContentLoaded", ()=>{
  const saved = localStorage.getItem("lang") || "en";
  setLang(saved);

  const btn = document.getElementById("langBtn");
  if(btn){
    btn.addEventListener("click", ()=>{
      const current = localStorage.getItem("lang") || "en";
      setLang(current === "en" ? "ar" : "en");
    });
  }
});
