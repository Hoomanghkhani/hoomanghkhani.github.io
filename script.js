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

    // 3. Language Translation (SRE & DevOps Focus)
    const translations = {
        en: {
            role: "DevOps Engineer | SRE",
            bio: "Bridging Development & Operations. Building reliable, scalable, and automated infrastructure.",
            status: "On Call",
            stack: "Observability Stack",
            contact: "Ping Me",
            project1_title: "K8s Cluster",
            project1_desc: "Bare-metal HA Setup",
            project2_title: "GitOps Pipe",
            project2_desc: "ArgoCD & Helm Charts",
            years: "Years Exp.",
            projects: "Incidents Resolved",
            uptime_label: "System Status",
            cmd_text: "systemctl status"
        },
        fa: {
            role: "مهندس دواپس | SRE",
            bio: "پل ارتباطی بین عملیات و توسعه. ساخت زیرساخت‌های پایدار، مقیاس‌پذیر و خودکار.",
            status: "آنکال",
            stack: "ابزارهای مانیتورینگ",
            contact: "ارتباط با من",
            project1_title: "کلاستر کوبرنتیز",
            project1_desc: "کلاستر HA روی سرور",
            project2_title: "پایپ‌لاین گیت‌لاپس",
            project2_desc: "ArgoCD و Helm Charts",
            years: "سال تجربه",
            projects: "حل بحران‌ها",
            uptime_label: "وضعیت سیستم",
            cmd_text: "systemctl status"
        },
        de: {
            role: "DevOps Engineer | SRE",
            bio: "Verbindung von Dev & Ops. Aufbau zuverlässiger, skalierbarer und automatisierter Infrastruktur.",
            status: "Bereitschaft",
            stack: "Beobachtbarkeit",
            contact: "Ping mich an",
            project1_title: "K8s Cluster",
            project1_desc: "Bare-metal HA Setup",
            project2_title: "GitOps Pipe",
            project2_desc: "ArgoCD & Helm Charts",
            years: "Jahre Erf.",
            projects: "Vorfälle gelöst",
            uptime_label: "Systemstatus",
            cmd_text: "systemctl status"
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
        uptime_label: document.querySelector('.terminal-title'), /* Re-mapped */
        cmd_text: document.querySelector('.cmd-text')
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
            if (elementsToTranslate.cmd_text) elementsToTranslate.cmd_text.textContent = t.cmd_text;
        });
    });

    // 4. Monitoring Bar Animation (SRE Style) & Dynamic Values
    const uptimeBars = document.querySelectorAll('.bar');
    const latencyVal = document.querySelector('.status-value'); // Latency
    const loadVal = document.querySelectorAll('.status-value')[1]; // Service Mesh -> Now Load for dynamic? 
    // Actually relying on specific selection is brittle, let's select by context

    // Let's grab specific status values from the DOM based on text
    const statusValues = document.querySelectorAll('.status-value');

    function animateBars() {
        uptimeBars.forEach(bar => {
            // Randomly toggle 'active' class to simulate CPU/Network load activity
            // Smoother randomization
            let height = 20;
            if (Math.random() > 0.6) {
                height = Math.floor(Math.random() * 60) + 30; // 30-90%
                bar.classList.add('active');
            } else {
                height = Math.floor(Math.random() * 20) + 10; // 10-30%
                bar.classList.remove('active');
            }
            bar.style.height = `${height}%`;
        });

        // Update Latency (Random walk)
        if (statusValues.length > 1) {
            // Assuming 2nd is Latency as per HTML order
            // Actually let's look at index.html: 
            // 1. Service Mesh -> Active
            // 2. Latency -> 24ms
            const currentLatency = parseInt(statusValues[1].textContent);
            const variation = Math.floor(Math.random() * 10) - 5; // -5 to +5
            let newLatency = currentLatency + variation;
            if (newLatency < 10) newLatency = 12;
            if (newLatency > 150) newLatency = 140;
            statusValues[1].textContent = `${newLatency}ms`;
        }
    }

    // Animate every 800ms for less frantic updates
    setInterval(animateBars, 800);
    animateBars();

    // 5. Typing Effect for Command
    const cmdText = document.querySelector('.cmd-text');
    const fullCmd = "systemctl status k8s-cluster";
    let charIndex = 0;

    // Clear and restart typing
    function typeCommand() {
        cmdText.textContent = "";
        charIndex = 0;
        cmdText.classList.add('typing-cursor');

        const typeInterval = setInterval(() => {
            if (charIndex < fullCmd.length) {
                cmdText.textContent += fullCmd.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                cmdText.classList.remove('typing-cursor');
                // Wait and restart
                setTimeout(typeCommand, 10000);
            }
        }, 100);
    }

    // Initial start lag
    setTimeout(typeCommand, 1000);

    // 6. Simple fade-in animation for cards
    const cards = document.querySelectorAll('.card, .terminal-card-mini');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index); // Staggered delay
    });
});
