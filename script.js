document.addEventListener('DOMContentLoaded', () => {
    // 1. Time Update
    function updateTime() {
        const timeElement = document.getElementById('local-time');
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Tehran' // User is in Iran based on earlier context ("Tehran, Iran" in HTML)
        };
        timeElement.textContent = now.toLocaleTimeString('en-US', options);
    }

    // Update immediately and then every minute
    updateTime();
    setInterval(updateTime, 60000);

    // 2. Theme Toggling
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // 3. Language Translation
    const translations = {
        en: {
            role: "DevOps Engineer",
            bio: "Automating the world one pipeline at a time. Cloud native enthusiast & reliability guardian.",
            status: "Available",
            stack: "Tech Stack",
            contact: "Let's automate together",
            project1_title: "K8s Cluster",
            project1_desc: "HA Cluster setup on bare metal",
            project2_title: "CI/CD Pipe",
            project2_desc: "Zero-downtime deployment",
            years: "Years Exp.",
            projects: "Deployments",
            uptime_label: "Uptime",
            terminal_cmd: "uptime"
        },
        fa: {
            role: "مهندس دواپس",
            bio: "خودکارسازی دنیا، هر پایپ‌لاین یک قدم. علاقه‌مند به کلاد نیتیو و نگهبان پایداری.",
            status: "آماده به کار",
            stack: "تکنولوژی‌ها",
            contact: "بیایید با هم بسازیم",
            project1_title: "کلاستر کوبرنتیز",
            project1_desc: "راه‌اندازی کلاستر HA روی سرور شخصی",
            project2_title: "پایپ‌لاین CI/CD",
            project2_desc: "دیپلوی بدون قطعی",
            years: "سال تجربه",
            projects: "دیپلوی‌ها",
            uptime_label: "آپ‌تایم",
            terminal_cmd: "uptime"
        },
        de: {
            role: "DevOps-Ingenieur",
            bio: "Automatisierung der Welt, eine Pipeline nach der anderen. Cloud-Native-Enthusiast.",
            status: "Verfügbar",
            stack: "Technologie-Stack",
            contact: "Lass uns zusammenarbeiten",
            project1_title: "K8s Cluster",
            project1_desc: "HA-Cluster auf Bare Metal",
            project2_title: "CI/CD Pipe",
            project2_desc: "Bereitstellung ohne Ausfallzeit",
            years: "Jahre Erf.",
            projects: "Einsätze",
            uptime_label: "Betriebszeit",
            terminal_cmd: "uptime"
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = {
        role: document.querySelector('.role'),
        bio: document.querySelector('.bio'),
        status: document.querySelector('.status-text'),
        stack: document.querySelector('.stack-card h2'),
        contact: document.querySelector('.contact-card-main h2'),
        p1t: document.querySelector('.p1 h3'),
        p1d: document.querySelector('.p1 p'),
        p2t: document.querySelector('.p2 h3'),
        p2d: document.querySelector('.p2 p'),
        years: document.querySelector('.stat-item:nth-child(1) .label'),
        projects: document.querySelector('.stat-item:nth-child(2) .label'),
        uptime_label: document.querySelector('.uptime-label'),
        terminal_cmd: document.querySelector('.cmd-text')
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');

            // Active class
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set Direction
            if (lang === 'fa') {
                document.body.setAttribute('dir', 'rtl');
                document.documentElement.lang = 'fa';
            } else {
                document.body.setAttribute('dir', 'ltr');
                document.documentElement.lang = lang;
            }

            // Update Text
            const t = translations[lang];
            if (elementsToTranslate.role) elementsToTranslate.role.textContent = t.role;
            if (elementsToTranslate.bio) elementsToTranslate.bio.textContent = t.bio;
            if (elementsToTranslate.status) elementsToTranslate.status.textContent = t.status;
            if (elementsToTranslate.stack) elementsToTranslate.stack.textContent = t.stack;
            if (elementsToTranslate.contact) elementsToTranslate.contact.textContent = t.contact;
            if (elementsToTranslate.p1t) elementsToTranslate.p1t.textContent = t.project1_title;
            if (elementsToTranslate.p1d) elementsToTranslate.p1d.textContent = t.project1_desc;
            if (elementsToTranslate.p2t) elementsToTranslate.p2t.textContent = t.project2_title;
            if (elementsToTranslate.p2d) elementsToTranslate.p2d.textContent = t.project2_desc;
            if (elementsToTranslate.years) elementsToTranslate.years.textContent = t.years;
            if (elementsToTranslate.projects) elementsToTranslate.projects.textContent = t.projects;
            if (elementsToTranslate.uptime_label) elementsToTranslate.uptime_label.textContent = t.uptime_label;
            if (elementsToTranslate.terminal_cmd) elementsToTranslate.terminal_cmd.textContent = t.terminal_cmd;
        });
    });

    // 4. Random Uptime Graph
    const uptimeBars = document.querySelectorAll('.bar');
    uptimeBars.forEach(bar => {
        // Random height between 40% and 100%
        const height = Math.floor(Math.random() * 60) + 40;
        bar.style.height = `${height}%`;
    });

    // 5. Simple fade-in animation for cards
    const cards = document.querySelectorAll('.card, .terminal-card-mini');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index); // Staggered delay
    });
});
