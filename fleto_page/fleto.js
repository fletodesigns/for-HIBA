// Burger menu toggle
const burgerButton = document.querySelector('header.header button');
burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
});

// menu functions
const closeBtn = document.querySelector('#menu-btn');
const sidebar = document.querySelector('.sidebar');
const appBoxContainer = document.querySelector('body');
const appBox = document.querySelector('.app-box-container');

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('nav-active');
    appBoxContainer.classList.toggle('app-con-nav-active');
    appBox.classList.toggle('app-nav-active');
});

// Slider functionality
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide img');
let currentIndex = 0;

function currentSlide(n) {
    currentIndex = n;
    updateSlides();
}

function updateSlides() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
