// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger-btn');
const menu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.innerHTML = hamburger.innerHTML === '&#9776;' ? '&#10006;' : '&#9776;';
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});
