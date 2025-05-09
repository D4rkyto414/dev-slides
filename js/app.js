// Slide Constructor
function Slide(title, description = '', bullets = []) {
    this.title = title;
    this.description = description;
    this.bullets = bullets;
}

// Sample slides
const slides = [
    new Slide('Bienvenida', '¡Hola! Bienvenidos a mi presentación.', ['¿Quién soy?', 'Mis objetivos', 'Expectativas para Code 301']),
    new Slide('Habilidades Técnicas', 'Tecnologías que domino:', ['HTML', 'CSS', 'JavaScript', 'React']),
    new Slide('Retos Personales', 'Desafíos que enfrento como desarrollador:', ['Organización del código', 'Optimización de rendimiento', 'Mejora continua']),
    new Slide('Futuro en la Tecnología', 'Mis metas para el futuro.', ['Contribuir a proyectos innovadores', 'Desarrollar aplicaciones de impacto', 'Convertirme en un líder técnico']),
    new Slide('Gracias por tu Atención', 'Gracias por seguir mi presentación. ¡Vamos a construir algo increíble!')
];

// State
let currentIndex = 0;

// DOM Elements
const slideContent = document.getElementById('slide-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Render Slide
function renderSlide(index) {
    const slide = slides[index];
    slideContent.style.opacity = 0;
    setTimeout(() => {
        slideContent.innerHTML = `
            <h2>${slide.title}</h2>
            ${slide.description ? `<p>${slide.description}</p>` : ''}
            ${slide.bullets.length ? `<ul>${slide.bullets.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        `;
        slideContent.style.opacity = 1;
    }, 300);
    prevButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
}

// Event Listeners
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderSlide(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        renderSlide(currentIndex);
    }
});

// Initial Render
renderSlide(currentIndex);
