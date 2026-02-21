document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Language Switcher Logic --- */
    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const langItems = document.querySelectorAll('.lang-menu li');
    const currentLangText = document.querySelector('.current-lang-text');
    const currentLangFlag = document.querySelector('.lang-toggle .fi');
    const body = document.body;

    // Toggle Dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('open');
    });

    // Close on Click Outside
    document.addEventListener('click', () => {
        langMenu.classList.remove('open');
    });

    // Translation Data
    const translations = {
        en: {
            hero_title: "Architecting <br> <span class='txt-gradient'>Scalable Systems</span>",
            hero_bio: "I bridge the gap between complex development and reliable operations. Specializing in Automation, Cloud Infrastructure, and Observability.",
            btn_contact: "Contact Me <i class='fas fa-arrow-right'></i>",
            btn_resume: "Download CV <i class='fas fa-download'></i>",
            stack_title: "Technologies",
            exp_title: "Experience",
            job1_title: "Senior DevOps Engineer",
            job1_desc: "Leading cloud migration and implementing GitOps workflows.",
            job2_title: "SRE Specialist",
            job2_desc: "Improved system uptime to 99.99% and optimized monitoring.",
            job3_title: "Linux Administrator",
            job3_desc: "Managed over 500+ Linux servers and automated patching.",
            cert_title: "Certifications",
            services_title: "What I Do",
            stat_exp: "Years Exp.",
            stat_projects: "Projects",
            projects_title: "Projects",
            project1_title: "Auto-scaling CI/CD on AWS",
            project1_desc: "A Jenkins pipeline using spot instances to run builds, saving 60% on EC2 costs.",
            project2_title: "K8s GitOps Platform",
            project2_desc: "Built a developer platform on EKS with ArgoCD for seamless and secure deployments.",
            footer_cta: "Let's Build Something Robust"
        },
        fa: {
            hero_title: "معماری <br> <span class='txt-gradient'>سیستم‌های مقیاس‌پذیر</span>",
            hero_bio: "پل ارتباطی بین توسعه پیچیده و عملیات پایدار. متخصص در اتوماسیون، زیرساخت ابری و مانیتورینگ.",
            btn_contact: "تماس با من <i class='fas fa-arrow-left'></i>",
            btn_resume: "دانلود رزومه <i class='fas fa-download'></i>",
            stack_title: "تکنولوژی‌ها",
            exp_title: "تجربیات",
            job1_title: "مهندس ارشد DevOps",
            job1_desc: "رهبری مهاجرت ابری و پیاده‌سازی جریان‌های کاری GitOps.",
            job2_title: "متخصص SRE",
            job2_desc: "بهبود پایداری سیستم تا ۹۹.۹۹٪ و بهینه‌سازی مانیتورینگ.",
            job3_title: "مدیر لینوکس",
            job3_desc: "مدیریت بیش از ۵۰۰ سرور لینوکس و اتوماسیون پچینگ.",
            cert_title: "گواهینامه‌ها",
            services_title: "خدمات من",
            stat_exp: "سال تجربه",
            stat_projects: "پروژه",
            projects_title: "پروژه‌ها",
            project1_title: "CI/CD خودکار در AWS",
            project1_desc: "یک خط لوله Jenkins با استفاده از spot instances برای اجرای buildها که ۶۰٪ در هزینه‌های EC2 صرفه‌جویی می‌کند.",
            project2_title: "پلتفرم K8s GitOps",
            project2_desc: "یک پلتفرم توسعه‌دهنده بر روی EKS با ArgoCD برای استقرارهای یکپارچه و امن ساخته شده است.",
            footer_cta: "بیایید چیزی قدرتمند بسازیم"
        },
        de: {
            hero_title: "Architekt <br> <span class='txt-gradient'>skalierbarer Systeme</span>",
            hero_bio: "Die Brücke zwischen komplexer Entwicklung und zuverlässigem Betrieb. Spezialisiert auf Automatisierung, Cloud-Infrastruktur und Observability.",
            btn_contact: "Kontaktieren <i class='fas fa-arrow-right'></i>",
            btn_resume: "CV herunterladen <i class='fas fa-download'></i>",
            stack_title: "Technologien",
            exp_title: "Erfahrung",
            job1_title: "Senior DevOps Engineer",
            job1_desc: "Leitung der Cloud-Migration und Implementierung von GitOps-Workflows.",
            job2_title: "SRE-Spezialist",
            job2_desc: "Verbesserung der Systemverfügbarkeit auf 99,99% und Optimierung des Monitorings.",
            job3_title: "Linux-Administrator",
            job3_desc: "Verwaltung von über 500 Linux-Servern und automatisiertes Patching.",
            cert_title: "Zertifizierungen",
            services_title: "Was ich tue",
            stat_exp: "Jahre Erf.",
            stat_projects: "Projekte",
            projects_title: "Projekte",
            project1_title: "Auto-skalierende CI/CD auf AWS",
            project1_desc: "Eine Jenkins-Pipeline, die Spot-Instanzen zur Ausführung von Builds verwendet und 60 % der EC2-Kosten einspart.",
            project2_title: "K8s GitOps-Plattform",
            project2_desc: "Aufbau einer Entwicklerplattform auf EKS mit ArgoCD für nahtlose und sichere Bereitstellungen.",
            footer_cta: "Lass uns etwas Robustes bauen"
        }
    };

    // Lang Selection Logic
    langItems.forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.getAttribute('data-lang');
            const flagClass = item.querySelector('.fi').className;
            const menuText = item.textContent.trim();

            // Perform Update
            updateLanguage(lang, flagClass, menuText);
        });
    });

    function updateLanguage(lang, flagClass, text) {
        // Update Button UI
        currentLangText.textContent = text;
        currentLangFlag.className = flagClass;

        // Update Direction & HTML Lang
        if (lang === 'fa') {
            document.body.setAttribute('dir', 'rtl');
            document.documentElement.lang = 'fa';
            // Swap arrow icons for RTL
            const arrows = document.querySelectorAll('.fa-arrow-right');
            arrows.forEach(a => { a.classList.remove('fa-arrow-right'); a.classList.add('fa-arrow-left'); });
        } else {
            document.body.setAttribute('dir', 'ltr');
            document.documentElement.lang = lang;
            const arrows = document.querySelectorAll('.fa-arrow-left'); // Revert
            arrows.forEach(a => { a.classList.remove('fa-arrow-left'); a.classList.add('fa-arrow-right'); });
        }

        // Translate Content
        const t = translations[lang];
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (t[key]) {
                elem.innerHTML = t[key];
            }
        });
    }


    /* --- 2. Theme Toggle --- */
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const current = body.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }


    /* --- 3. 3D Cube Spin Interactive --- */
    const cube = document.querySelector('.cube-wrapper');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;
        cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

});
