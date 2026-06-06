document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Language Switcher Logic --- */
    const langBtns = document.querySelectorAll('.lang-btn');
    
    const translations = {
        en: {
            title: "Site Reliability Engineer <br>& Infrastructure Architect",
            tagline: "Engineering high-availability systems & zero-downtime deployments.",
            about_title: "About Me",
            about_desc: "SRE & Infrastructure Specialist with over 5 years of experience maximizing system uptime and automation in high-availability environments. Proven track record of architecting highly reliable infrastructure, optimizing CI/CD workflows, and reducing production downtime through proactive observability and Python-driven automation.",
            exp_title: "Experience",
            job1_title: "Lead Site Reliability Engineer (SRE)",
            job1_desc: "Architecting highly available Kubernetes clusters and steering the migration of monolithic legacy services to robust microservice architectures. Engineering secure GitLab CI/CD pipelines to ensure automated, zero-downtime deployments. Developing advanced observability and alerting systems to proactively detect anomalies and drastically reduce MTTR, ensuring 99.9% uptime for core financial services.",
            job2_title: "DevOps & Infrastructure Engineer",
            job2_desc: "Managed and optimized enterprise virtualized infrastructure using VMware ESXi for continuous uptime. Designed and maintained resilient backup and replication strategies utilizing Veeam to guarantee data integrity. Built high-performance NGINX reverse proxies for load distribution and automated complex system configurations using Ansible playbooks.",
            job3_title: "Infrastructure Reliability Specialist",
            job3_desc: "Spearheaded the design and execution of a strict Preventive Maintenance lifecycle, slashing monthly downtime by 60%. Engineered Python-based automation scripts for backup workflows, reducing execution time by 66% and saving hardware resources. Managed complex enterprise network infrastructures including cross-branch routing and Linux/Windows server ecosystems.",
            skills_title: "Technical Arsenal",
            cat_orch: "Orchestration & IaC",
            cat_cicd: "CI/CD & Servers",
            cat_net: "Networking & Security",
            cat_obs: "Observability & Coding",
            certs_title: "Certifications & Education",
            cert_uni: "B.Sc. in ICT",
            cert_uni_meta: "Shaheed Shamsipoor Technical College • GPA: 17.78/20",
            cert_py: "Python Programming Certification",
            footer_text: "© 2026 Hooman Ghardashkhani Niari. Architected with precision."
        },
        fa: {
            title: "مهندس قابلیت اطمینان سایت <br>و معمار زیرساخت",
            tagline: "مهندسی سیستم‌های با دسترسی‌پذیری بالا و استقرارهای بدون قطعی.",
            about_title: "درباره من",
            about_desc: "متخصص SRE و زیرساخت با بیش از ۵ سال تجربه در به حداکثر رساندن آپتایم و اتوماسیون. دارای سابقه اثبات‌شده در معماری زیرساخت‌های بسیار پایدار، بهینه‌سازی CI/CD و کاهش زمان قطعی از طریق مانیتورینگ پیشگیرانه و اتوماسیون با پایتون.",
            exp_title: "تجربیات",
            job1_title: "مهندس ارشد SRE",
            job1_desc: "معماری کلاسترهای Kubernetes با دسترسی‌پذیری بالا و هدایت مهاجرت سرویس‌های یکپارچه به میکروسرویس. مهندسی خطوط لوله CI/CD گیت‌لب برای استقرارهای بدون قطعی. توسعه سیستم‌های مانیتورینگ و هشدار پیشرفته برای کاهش چشمگیر MTTR و تضمین آپتایم ۹۹.۹٪.",
            job2_title: "مهندس DevOps و زیرساخت",
            job2_desc: "مدیریت و بهینه‌سازی زیرساخت مجازی سازمانی با VMware ESXi. طراحی استراتژی‌های بک‌آپ با Veeam. ایجاد پراکسی‌های معکوس NGINX برای توزیع بار و اتوماسیون تنظیمات پیچیده با Ansible.",
            job3_title: "متخصص پایداری زیرساخت",
            job3_desc: "طراحی و اجرای چرخه نگهداری پیشگیرانه (PM) و کاهش ۶۰ درصدی زمان قطعی. مهندسی اسکریپت‌های پایتون برای بک‌آپ و کاهش ۶۶ درصدی زمان اجرا. مدیریت شبکه‌های سازمانی و سرورهای لینوکس/ویندوز.",
            skills_title: "زرادخانه فنی",
            cat_orch: "ارکستریشن و IaC",
            cat_cicd: "CI/CD و سرورها",
            cat_net: "شبکه و امنیت",
            cat_obs: "مانیتورینگ و برنامه‌نویسی",
            certs_title: "مدارک و تحصیلات",
            cert_uni: "کارشناسی مهندسی فناوری اطلاعات",
            cert_uni_meta: "دانشکده فنی شهید شمسی‌پور • معدل: ۱۷.۷۸/۲۰",
            cert_py: "گواهینامه برنامه‌نویسی پایتون",
            footer_text: "© 2026 هومن قارداشخانی نیاری. با دقت معماری شده است."
        },
        de: {
            title: "Site Reliability Engineer <br>& Infrastruktur-Architekt",
            tagline: "Entwicklung hochverfügbarer Systeme & Zero-Downtime-Deployments.",
            about_title: "Über Mich",
            about_desc: "SRE- und Infrastruktur-Spezialist mit über 5 Jahren Erfahrung in der Maximierung von Systemverfügbarkeit und Automatisierung. Nachweisbare Erfolge bei der Architektur hochzuverlässiger Infrastrukturen, Optimierung von CI/CD-Workflows und Reduzierung von Produktionsausfällen durch proaktive Observability.",
            exp_title: "Erfahrung",
            job1_title: "Lead Site Reliability Engineer (SRE)",
            job1_desc: "Architektur hochverfügbarer Kubernetes-Cluster und Steuerung der Migration von monolithischen Legacy-Diensten. Entwicklung sicherer GitLab CI/CD-Pipelines für automatisierte Zero-Downtime-Deployments. Entwicklung fortschrittlicher Observability- und Alerting-Systeme zur drastischen Reduzierung der MTTR (99,9 % Uptime).",
            job2_title: "DevOps & Infrastructure Engineer",
            job2_desc: "Verwaltung und Optimierung der virtualisierten Unternehmensinfrastruktur mit VMware ESXi. Entwurf robuster Backup-Strategien mit Veeam. Aufbau leistungsstarker NGINX-Reverse-Proxys und Automatisierung komplexer Systemkonfigurationen mit Ansible.",
            job3_title: "Infrastruktur-Zuverlässigkeitsspezialist",
            job3_desc: "Leitung des Designs und der Ausführung eines strengen Preventive Maintenance-Lebenszyklus, wodurch monatliche Ausfallzeiten um 60 % gesenkt wurden. Entwicklung von Python-Automatisierungsskripten für Backups. Verwaltung komplexer Unternehmensnetzwerke und Linux/Windows-Server.",
            skills_title: "Technisches Arsenal",
            cat_orch: "Orchestrierung & IaC",
            cat_cicd: "CI/CD & Server",
            cat_net: "Netzwerk & Sicherheit",
            cat_obs: "Observability & Programmierung",
            certs_title: "Zertifizierungen & Bildung",
            cert_uni: "B.Sc. in ICT",
            cert_uni_meta: "Shaheed Shamsipoor Technical College • Notendurchschnitt: 17.78/20",
            cert_py: "Python-Programmier-Zertifizierung",
            footer_text: "© 2026 Hooman Ghardashkhani Niari. Mit Präzision architektoniert."
        }
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            langBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        // Update Direction & HTML Lang
        if (lang === 'fa') {
            document.body.setAttribute('dir', 'rtl');
            document.documentElement.lang = 'fa';
        } else {
            document.body.setAttribute('dir', 'ltr');
            document.documentElement.lang = lang;
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

    /* --- 2. Scroll Animations (Intersection Observer) --- */
    const fadeSections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after it becomes visible if you only want the animation once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

});
