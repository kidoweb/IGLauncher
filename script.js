// Menu navigation logic
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.main-content');
const sidebar = document.querySelector('.sidebar');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.hasAttribute('data-section')) {
            e.preventDefault();

            // Remove active class from all menu items
            menuItems.forEach(el => el.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show the selected section
            const sectionId = item.getAttribute('data-section') + '-section';
            document.getElementById(sectionId).style.display = 'flex';
        }
    });
});

// Handle server connection and minimize launcher
const playButton = document.querySelector('.play-button');
const minimizeLauncherCheckbox = document.getElementById('minimize-launcher'); // Get checkbox for minimizing

playButton.addEventListener('click', () => {
    window.location.href = 'steam://connect/46.174.50.56:27015';
    
    // Check if the option to minimize launcher is enabled
    if (minimizeLauncherCheckbox.checked) {
        window.open('', '_self').close(); // Simulate launcher minimization
    }
});

// Particle animation toggle
const particlesToggle = document.getElementById('toggle-particles');
particlesToggle.addEventListener('change', (e) => {
    const particlesContainer = document.getElementById('particles-container');
    if (e.target.checked) {
        particlesContainer.style.display = 'none';  // Disable particles
    } else {
        particlesContainer.style.display = 'block';  // Enable particles
    }
});

// Particle system
const particlesContainer = document.getElementById('particles-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    particle.style.opacity = Math.random();
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);  // Remove after animation
}

setInterval(createParticle, 100);  // Create particles every 100ms


const languageSelect = document.getElementById('language-select');

function updateFlagIcon() {
    const selectedOption = languageSelect.options[languageSelect.selectedIndex];
    const iconUrl = selectedOption.getAttribute('data-icon');

    // Добавляем иконку флага в качестве фона для select
    languageSelect.style.backgroundImage = `url(${iconUrl}), url('data:image/svg+xml,%3Csvg width="10" height="5" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0l5 5 5-5z" fill="%23fff" /%3E%3C/svg%3E')`;
    languageSelect.style.backgroundPosition = 'left 10px center, right 20px center';
    languageSelect.style.backgroundSize = '30px, 10px';
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', updateFlagIcon);

// Событие изменения выбора языка
languageSelect.addEventListener('change', updateFlagIcon);
