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
            hero_bio: "SRE & Infrastructure Specialist with 5 years of experience maximizing system uptime and automation. Expert in Kubernetes, Docker, CI/CD, and enterprise network security.",
            btn_contact: "Contact Me <i class='fas fa-arrow-right'></i>",
            btn_resume: "Download CV <i class='fas fa-download'></i>",
            stack_title: "Technologies",
            exp_title: "Experience",
            job1_title: "Site Reliability Engineer (SRE)",
            job1_desc: "Maintained 99.9% availability, migrated to K8s, Traefik, Gitlab CI/CD, Terraform & Ansible at Bontech.",
            job2_title: "DevOps & Infrastructure Engineer",
            job2_desc: "Managed enterprise virtualized infrastructure using VMware ESXi, Veeam, and automated with Ansible at Arzsh Afaranan Koohestan.",
            job3_title: "System Administrator / IT Specialist",
            job3_desc: "Reduced monthly downtime by 60% via PM lifecycle and optimized backups via Python in Food Industry Sector.",
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
            hero_bio: "متخصص SRE و زیرساخت با ۵ سال تجربه در به حداکثر رساندن آپتایم و اتوماسیون. متخصص در Kubernetes، Docker، CI/CD و امنیت شبکه‌های سازمانی.",
            btn_contact: "تماس با من <i class='fas fa-arrow-left'></i>",
            btn_resume: "دانلود رزومه <i class='fas fa-download'></i>",
            stack_title: "تکنولوژی‌ها",
            exp_title: "تجربیات",
            job1_title: "مهندس قابلیت اطمینان سایت (SRE)",
            job1_desc: "حفظ ۹۹.۹٪ آپتایم، مهاجرت به K8s، Traefik، Gitlab CI/CD، Terraform و Ansible در بن‌تک.",
            job2_title: "مهندس DevOps و زیرساخت",
            job2_desc: "مدیریت زیرساخت مجازی‌سازی شده سازمانی با VMware ESXi، Veeam و اتوماسیون با Ansible در شرکت ارزش آفرینان کوهستان.",
            job3_title: "مدیر سیستم / متخصص IT",
            job3_desc: "کاهش ۶۰ درصدی قطعی ماهانه از طریق چرخه PM و بهینه‌سازی بک‌آپ‌ها با پایتون در بخش صنایع غذایی.",
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
            hero_bio: "SRE- und Infrastruktur-Spezialist mit 5 Jahren Erfahrung in der Maximierung von Systemverfügbarkeit und Automatisierung. Experte für Kubernetes, Docker, CI/CD und Unternehmensnetzwerksicherheit.",
            btn_contact: "Kontaktieren <i class='fas fa-arrow-right'></i>",
            btn_resume: "CV herunterladen <i class='fas fa-download'></i>",
            stack_title: "Technologien",
            exp_title: "Erfahrung",
            job1_title: "Site Reliability Engineer (SRE)",
            job1_desc: "Aufrechterhaltung von 99,9 % Verfügbarkeit, Migration zu K8s, Traefik, Gitlab CI/CD, Terraform & Ansible bei Bontech.",
            job2_title: "DevOps & Infrastructure Engineer",
            job2_desc: "Verwaltung der virtualisierten Unternehmensinfrastruktur mit VMware ESXi, Veeam und automatisiert mit Ansible bei Arzsh Afaranan Koohestan.",
            job3_title: "Systemadministrator / IT-Spezialist",
            job3_desc: "Reduzierung der monatlichen Ausfallzeiten um 60 % durch PM-Lebenszyklus und optimierte Backups via Python im Lebensmittelindustriesektor.",
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
