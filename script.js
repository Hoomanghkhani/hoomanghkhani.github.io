const terminalBody = document.getElementById('terminal-body');
const commandInput = document.getElementById('command-input');
const outputContainer = document.querySelector('.output');
const bootSequenceContainer = document.getElementById('boot-sequence');

const bootMessages = [
    "Loading kernel modules...",
    "Mounting root file system...",
    "Checking file systems...",
    "[ OK ] Reached target Local File Systems.",
    "[ OK ] Reached target System Initialization.",
    "[ OK ] Reached target Basic System.",
    "Starting Network Manager...",
    "[ OK ] Started Network Manager.",
    "Starting User Login Service...",
    "[ OK ] Started User Login Service.",
    "Starting GitHub CV Interface...",
    "[ OK ] Started GitHub CV Interface.",
    "Welcome to GitHub CV OS v1.0"
];

async function runBootSequence() {
    for (const msg of bootMessages) {
        const line = document.createElement('div');
        line.className = 'boot-line';

        if (msg.includes("[ OK ]")) {
            line.innerHTML = msg.replace("[ OK ]", '<span class="boot-ok">[ OK ]</span>');
        } else {
            line.textContent = msg;
        }

        bootSequenceContainer.appendChild(line);
        bootSequenceContainer.scrollTop = bootSequenceContainer.scrollHeight;

        // Random delay between 100ms and 500ms
        await new Promise(r => setTimeout(r, Math.random() * 400 + 100));
    }

    // Wait a bit before clearing boot screen
    await new Promise(r => setTimeout(r, 1000));

    bootSequenceContainer.style.display = 'none';
    terminalBody.style.display = 'flex';
    commandInput.focus();
}

// Start boot sequence on load
window.addEventListener('load', runBootSequence);

const commands = {
    help: {
        description: 'List available commands',
        action: () => {
            const helpText = Object.keys(commands).map(cmd =>
                `<span class="command">${cmd}</span> - ${commands[cmd].description}`
            ).join('<br>');
            printOutput(helpText);
        }
    },
    about: {
        description: 'Display information about me',
        action: () => {
            printOutput(`
Hello! I'm a passionate developer who loves building things.
I enjoy working with web technologies and solving complex problems.
(You can edit this text in script.js to add your own bio!)
            `);
        }
    },
    skills: {
        description: 'List my technical skills',
        action: () => {
            printOutput(`
Languages: JavaScript, Python, HTML, CSS
Frameworks: React, Vue, Node.js
Tools: Git, Docker, VS Code
(Add your skills in script.js)
            `);
        }
    },
    contact: {
        description: 'Show contact information',
        action: () => {
            printOutput(`
Email: user@example.com
GitHub: github.com/user
LinkedIn: linkedin.com/in/user
            `);
        }
    },
    clear: {
        description: 'Clear the terminal screen',
        action: () => {
            outputContainer.innerHTML = '';
        }
    },
    date: {
        description: 'Show current date and time',
        action: () => {
            printOutput(new Date().toString());
        }
    },
    ls: {
        description: 'List directory contents',
        action: () => {
            printOutput('resume.pdf  projects.txt  contact.md  skills.json  <span style="color: #5fd7ff">projects/</span>');
        }
    },
    pwd: {
        description: 'Print working directory',
        action: () => {
            printOutput('/home/user');
        }
    },
    whoami: {
        description: 'Print effective userid',
        action: () => {
            printOutput('user');
        }
    },
    cd: {
        description: 'Change directory',
        action: (args) => {
            if (!args || args.length === 0) {
                return; // Do nothing, like cd ~
            }
            if (args[0] === '..') {
                printOutput('cd: permission denied: /home');
            } else {
                printOutput(`cd: no such file or directory: ${args[0]}`);
            }
        }
    },
    uname: {
        description: 'Print system information',
        action: (args) => {
            if (args && args[0] === '-a') {
                printOutput('Linux github-cv 5.4.0-100-generic #113-Ubuntu SMP Thu Feb 3 18:43:29 UTC 2025 x86_64 x86_64 x86_64 GNU/Linux');
            } else {
                printOutput('Linux');
            }
        }
    },
    sudo: {
        description: 'Execute a command as another user',
        action: () => {
            printOutput('user is not in the sudoers file. This incident will be reported.');
        }
    },
    reboot: {
        description: 'Reboot the system',
        action: () => {
            printOutput('Rebooting...');
            setTimeout(() => location.reload(), 1000);
        }
    },
    echo: {
        description: 'Display a line of text',
        action: (args) => {
            printOutput(args ? args.join(' ') : '');
        }
    }
};

// Focus input when clicking on terminal
terminalBody.addEventListener('click', () => {
    commandInput.focus();
});

// Handle command input
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = commandInput.value.trim();
        if (input) {
            // Add command to output
            const commandLine = document.createElement('p');
            commandLine.innerHTML = `<span class="prompt">user@github-cv:~$</span> ${input}`;
            outputContainer.appendChild(commandLine);

            // Process command
            processCommand(input);
        }
        commandInput.value = '';
        scrollToBottom();
    } else if (e.key === 'Tab') {
        e.preventDefault();
        handleTabCompletion();
    }
});

function handleTabCompletion() {
    const currentInput = commandInput.value;
    const availableCommands = Object.keys(commands);

    const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput));

    if (matches.length === 1) {
        commandInput.value = matches[0];
    } else if (matches.length > 1) {
        // Show matches
        const commandLine = document.createElement('p');
        commandLine.innerHTML = `<span class="prompt">user@github-cv:~$</span> ${currentInput}`;
        outputContainer.appendChild(commandLine);

        printOutput(matches.join('  '));
        scrollToBottom();
    }
}

function processCommand(input) {
    const parts = input.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[cmd]) {
        commands[cmd].action(args);
    } else {
        printOutput(`<span style="color: var(--error-color)">Command not found: ${cmd}</span>. Type <span class="command">help</span> for a list of commands.`);
    }
}

function printOutput(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    outputContainer.appendChild(p);
}

function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
}
