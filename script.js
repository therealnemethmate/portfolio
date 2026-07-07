const terminal = document.querySelector('.terminal');
const terminalContent = document.querySelector('.terminal-content');
const form = document.querySelector('#command-form');
const input = document.querySelector('#command-input');
const response = document.querySelector('#command-response');
const navLinks = [...document.querySelectorAll('.terminal-nav a')];
const commandSections = [...document.querySelectorAll('.command-section')];

const sections = new Map([
    ['about', '#about'],
    ['whoami', '#about'],
    ['experience', '#experience'],
    ['skills', '#skills'],
    ['projects', '#projects'],
    ['contact', '#contact'],
]);

const externalCommands = new Map([
    ['cv', 'assets/cv.pdf'],
    ['github', 'https://github.com/therealnemethmate'],
    ['linkedin', 'https://www.linkedin.com/in/matenemeth91/'],
]);

const commandHistory = [];
let historyIndex = 0;

function setResponse(message, type = 'success') {
    response.textContent = message;
    response.dataset.type = type;
}

function activateSection(command, updateUrl = true) {
    const selector = sections.get(command);
    const section = document.querySelector(selector);

    if (!section) return;

    terminalContent.classList.remove('is-cleared');
    commandSections.forEach((candidate) => {
        const active = candidate === section;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-hidden', String(!active));
    });

    navLinks.forEach((link) => link.classList.toggle('is-active', link.hash === selector));
    terminalContent.scrollTop = 0;

    if (updateUrl) window.history.replaceState(null, '', selector);
}

function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase().replace(/^\.\//, '');

    if (!command) return;

    commandHistory.push(command);
    historyIndex = commandHistory.length;

    if (command === 'help') {
        setResponse('about  experience  skills  projects  contact  cv  github  linkedin  clear');
        return;
    }

    if (command === 'clear') {
        terminalContent.classList.add('is-cleared');
        commandSections.forEach((section) => {
            section.classList.remove('is-active');
            section.setAttribute('aria-hidden', 'true');
        });
        navLinks.forEach((link) => link.classList.remove('is-active'));
        setResponse('');
        return;
    }

    if (sections.has(command)) {
        activateSection(command);
        setResponse('');
        return;
    }

    if (externalCommands.has(command)) {
        window.open(externalCommands.get(command), '_blank', 'noopener');
        setResponse(`opening ${command} in a new tab`);
        return;
    }

    setResponse(`zsh: command not found: ${command}`, 'error');
}

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    runCommand(input.value);
    input.value = '';
});

input?.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

    event.preventDefault();
    const offset = event.key === 'ArrowUp' ? -1 : 1;
    historyIndex = Math.max(0, Math.min(commandHistory.length, historyIndex + offset));
    input.value = commandHistory[historyIndex] ?? '';
    input.setSelectionRange(input.value.length, input.value.length);
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        runCommand(link.textContent.trim());
        input.focus();
    });
});

document.addEventListener('keydown', (event) => {
    const target = event.target;
    const typing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;

    if (event.key === '/' && !typing) {
        event.preventDefault();
        input.focus();
    }
});

terminal?.addEventListener('click', (event) => {
    if (event.target === terminalContent) input.focus();
});

terminal?.classList.add('is-interactive');

const initialCommand = window.location.hash.slice(1);
activateSection(sections.has(initialCommand) ? initialCommand : 'about', false);

if (window.matchMedia('(pointer: fine)').matches) {
    input.focus({ preventScroll: true });
}
