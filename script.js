/* =====================================
   SITECRAFT CONFIGURATION
===================================== */

const CONFIG = {

    // ضع رقم واتساب الشركة هنا
    // مصر: 2010XXXXXXXX

    whatsappNumber: "201023713311",

    email: "hello@sitecraft.studio"

};


/* =====================================
   PORTFOLIO PROJECTS
   تحكم في المشاريع من هنا فقط
===================================== */

const PROJECTS = [

    {
        name: "SMASH-WICH",

        category: "Restaurant Website",

        description: "Restaurant website · Brand experience",

        image: "images/LOGO.JPG",

        link: "https://mohameds01344-ship-it.github.io/smash-Wich/",

        label: "SMASH WICH",

        headline: "THE ART OF<br><span>fast food.</span>",

        footer: "MADE FRESH. SERVED BOLD."
    },

    {
        name: "RIVO Store",

        category: "E-commerce",

        description: "Fashion e-commerce · Streetwear",

        image: "images/rivo.jpeg",

        link: "https://mohameds01344-ship-it.github.io/rivoo/",

        label: "RIVO / NEW COLLECTION",

        headline: "OWN<br>YOUR<br><span>SPACE.</span>",

        footer: "STREETWEAR / 2026"
    },

    {
        name: "ابو عمار السوري",

        category: "شاورما سوري",
         description:"شاورما ومشويات وفتة وطواجن وبروست ومكرونة وحلويات بطعم شامي أصيل.",


        



        image: "images/abo.jpg",

        link: "https://mohameds01344-ship-it.github.io/a/",

        label: "FRESH FROM THE OVEN",

        headline: "GOOD FOOD.<br><span>GOOD MOOD.</span>",

        footer: "ORDER / ENJOY / REPEAT"
    }

];


/* =====================================
   ADD / REMOVE / DISPLAY PROJECTS
===================================== */

function renderProjects() {

    const grid = document.getElementById("projectsGrid");

    if (!grid) return;

    grid.innerHTML = PROJECTS.map((project, index) => {

        const image = project.image

            ? `<img class="project-cover"
                src="${escapeHTML(project.image)}"
                alt="${escapeHTML(project.name)}"
                loading="lazy">`

            : `
            <div class="project-art">

                <small>${escapeHTML(project.label || project.name)}</small>

                <strong>
                    ${project.headline || escapeHTML(project.name)}
                </strong>

                <em>${escapeHTML(project.footer || project.category)}</em>

            </div>
            `;

        return `

            <article class="project-card reveal">

                <a class="project-image dynamic-project"

                    href="${escapeHTML(project.link || "#")}"

                    target="_blank"

                    rel="noopener noreferrer">

                    ${image}

                    <span class="project-open">↗</span>

                </a>


                <div class="project-meta">

                    <div>

                        <h3>${escapeHTML(project.name)}</h3>

                        <p>
                            ${escapeHTML(project.description || project.category || "")}
                        </p>

                    </div>

                    <span>
                        ${String(index + 1).padStart(2, "0")}
                        /
                        ${String(PROJECTS.length).padStart(2, "0")}
                    </span>

                </div>

            </article>

        `;

    }).join("");


    grid.querySelectorAll(".reveal").forEach(element => {

        if (window.projectObserver) {

            window.projectObserver.observe(element);

        } else {

            element.classList.add("visible");

        }

    });

}


/* حماية النصوص المعروضة داخل HTML */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"

    })[char]);

}


/* =====================================
   LANGUAGE SYSTEM
===================================== */

const translations = {

    en: {

        navHome: "Home",
        navServices: "Services",
        navWork: "Our Work",
        navAbout: "About",
        navContact: "Contact",

        startProject: "Start a project",

        heroEyebrow: "DIGITAL STUDIO · EGYPT",

        heroTitle: 'We build websites<br>that move <em>business</em><br>forward<span class="blue-dot">.</span>',

        heroText: "From the first idea to the final click, we create thoughtful digital experiences that help brands stand out, connect, and grow.",

        heroButton: "Let's build together ↗",

        viewWork: "Explore our work ↓",

        heroProof: "DESIGN WITH PURPOSE. DEVELOPMENT WITH PRECISION.",

        servicesEyebrow: "WHAT WE DO",

        servicesTitle: 'Good ideas deserve<br><em>great digital homes.</em>',

        servicesIntro: "We combine clear strategy, purposeful design, and reliable development to create websites that do more than look good.",

        service1Title: "Website Design",
        service1Text: "Distinctive interfaces shaped around your brand.",

        service2Title: "Web Development",
        service2Text: "Fast and responsive websites across devices.",

        service3Title: "E-commerce",
        service3Text: "Online stores that make ordering effortless.",

        service4Title: "Ongoing Support",
        service4Text: "Updates and improvements for your website.",

        workEyebrow: "SELECTED PROJECTS",

        workTitle: 'Made to make<br><em>an impression.</em>',

        workIntro: "A selection of digital concepts and client projects.",

        portfolioNote: "Select a project to open its live demo.",

        aboutEyebrow: "A LITTLE ABOUT US",

        aboutTitle: 'Small details.<br><em>Big difference.</em>',

        aboutText: "SiteCraft is a digital studio focused on helping businesses build a stronger online presence.",

        aboutPoint1: "Built around your brand",
        aboutPoint2: "Designed for every screen",
        aboutPoint3: "Focused on business goals",

        processEyebrow: "HOW WE WORK",

        processTitle: 'From first thought<br>to <em>launch day.</em>',

        step1Title: "Discover",
        step1Text: "We learn about your business and goals.",

        step2Title: "Design",
        step2Text: "We shape the visual direction.",

        step3Title: "Build",
        step3Text: "We develop and test your website.",

        step4Title: "Launch & Grow",
        step4Text: "We help you launch confidently.",

        contactEyebrow: "HAVE A PROJECT IN MIND?",

        contactTitle: "Let's make<br><em>something matter.</em>",

        contactText: "Tell us about your idea. Let's bring it online.",

        formName: "YOUR NAME",

        formContact: "EMAIL OR WHATSAPP",

        formType: "WHAT DO YOU NEED?",

        formMessage: "TELL US ABOUT YOUR PROJECT",

        sendMessage: "Send project enquiry",

        formNote: "Your enquiry will be prepared in WhatsApp.",

        footerLine: "Thoughtful digital experiences, built with purpose.",

        rights: "ALL RIGHTS RESERVED.",

        backTop: "BACK TO TOP ↑"

    },


    ar: {

        navHome: "الرئيسية",

        navServices: "خدماتنا",

        navWork: "أعمالنا",

        navAbout: "من نحن",

        navContact: "تواصل معنا",

        startProject: "ابدأ مشروعك",

        heroEyebrow: "استوديو رقمي · مصر",

        heroTitle: 'نبني مواقع<br>تحرّك <em>أعمالك</em><br>للأمام<span class="blue-dot">.</span>',

        heroText: "من أول فكرة لحد الإطلاق، بنصمم تجارب رقمية تساعد علامتك التجارية تتميز وتنمو.",

        heroButton: "خلينا نبني مشروعك ↗",

        viewWork: "شاهد أعمالنا ↓",

        heroProof: "تصميم له هدف. وتطوير بأعلى دقة.",

        servicesEyebrow: "ماذا نقدم",

        servicesTitle: 'أفكارك تستحق<br><em>حضور رقمي مميز.</em>',

        servicesIntro: "بنجمع بين التخطيط والتصميم والتطوير علشان نبني مواقع تخدم أهداف مشروعك.",

        service1Title: "تصميم المواقع",
        service1Text: "واجهات مميزة تعبر عن هوية علامتك التجارية.",

        service2Title: "تطوير المواقع",
        service2Text: "مواقع سريعة ومتجاوبة على جميع الأجهزة.",

        service3Title: "المتاجر الإلكترونية",
        service3Text: "متاجر أونلاين تجعل الشراء أسهل.",

        service4Title: "الدعم والتطوير",
        service4Text: "تحديثات وتحسينات مستمرة لموقعك.",

        workEyebrow: "نماذج من أعمالنا",

        workTitle: 'مشاريع تترك<br><em>انطباعًا مميزًا.</em>',

        workIntro: "مجموعة من المشاريع والمفاهيم الرقمية.",

        portfolioNote: "اضغط على المشروع لفتح النسخة التجريبية.",

        aboutEyebrow: "نبذة عننا",

        aboutTitle: 'تفاصيل صغيرة.<br><em>فرق كبير.</em>',

        aboutText: "SiteCraft استوديو رقمي هدفه يساعد الشركات تبني حضور أقوى على الإنترنت.",

        aboutPoint1: "تصميم يعبر عن هويتك",

        aboutPoint2: "متوافق مع كل الشاشات",

        aboutPoint3: "يركز على أهداف مشروعك",

        processEyebrow: "طريقة شغلنا",

        processTitle: 'من أول فكرة<br>لحد <em>يوم الإطلاق.</em>',

        step1Title: "نفهم مشروعك",
        step1Text: "نتعرف على نشاطك وأهدافك.",

        step2Title: "نصمم",
        step2Text: "بنحدد الشكل البصري وتجربة الاستخدام.",

        step3Title: "نطوّر",
        step3Text: "بنبرمج الموقع ونجربه على الأجهزة المختلفة.",

        step4Title: "نطلق ونطوّر",
        step4Text: "بنساعدك تطلق موقعك بثقة.",

        contactEyebrow: "عندك مشروع في بالك؟",

        contactTitle: 'خلينا نعمل<br><em>حاجة تفرق.</em>',

        contactText: "احكيلنا فكرتك وهنساعدك نحولها لحضور أونلاين.",

        formName: "اسمك",

        formContact: "الإيميل أو واتساب",

        formType: "محتاج إيه؟",

        formMessage: "احكيلنا عن مشروعك",

        sendMessage: "إرسال طلب المشروع",

        formNote: "النموذج هيفتح واتساب والرسالة جاهزة للإرسال.",

        footerLine: "تجارب رقمية مدروسة، مبنية بهدف.",

        rights: "جميع الحقوق محفوظة.",

        backTop: "العودة للأعلى ↑"

    }

};


/* =====================================
   LANGUAGE SWITCH
===================================== */

let currentLang = localStorage.getItem("sitecraft-language") || "en";

const langSwitch = document.getElementById("langSwitch");


function setLanguage(lang) {

    currentLang = lang;

    const isArabic = lang === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";


    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[lang][key]) {

            element.innerHTML = translations[lang][key];

        }

    });


    langSwitch.textContent = isArabic ? "English" : "العربية";

    localStorage.setItem("sitecraft-language", lang);

}


langSwitch.addEventListener("click", () => {

    setLanguage(currentLang === "en" ? "ar" : "en");

});


setLanguage(currentLang);


/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});


mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

    });

});


/* =====================================
   SCROLL ANIMATIONS
===================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.12

});


window.projectObserver = observer;


document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


renderProjects();


/* =====================================
   CURSOR EFFECT
===================================== */

const glow = document.querySelector(".cursor-glow");


if (window.matchMedia("(pointer:fine)").matches) {

    window.addEventListener("pointermove", event => {

        glow.style.left = event.clientX + "px";

        glow.style.top = event.clientY + "px";

    });

}


/* =====================================
   CONTACT FORM
===================================== */

document.getElementById("contactForm").addEventListener("submit", event => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name").trim();

    const contact = data.get("contact").trim();

    const type = data.get("type");

    const message = data.get("message").trim();


    const intro = currentLang === "ar"

        ? "طلب مشروع جديد من موقع SiteCraft"

        : "New project enquiry from SiteCraft website";


    const body =

        `${intro}\n\n` +

        `Name: ${name}\n` +

        `Email / WhatsApp: ${contact}\n` +

        `Project type: ${type}\n` +

        `Details: ${message}`;


    const number = CONFIG.whatsappNumber.replace(/\D/g, "");


    if (number === "20100000000" || !number) {

        alert(

            currentLang === "ar"

                ? "من فضلك ضع رقم واتساب الشركة في ملف script.js أولاً."

                : "Please add your company WhatsApp number in script.js first."

        );

        return;

    }


    window.open(

        `https://wa.me/${number}?text=${encodeURIComponent(body)}`,

        "_blank"

    );

});


/* =====================================
   FOOTER YEAR
===================================== */

document.getElementById("year").textContent = new Date().getFullYear();