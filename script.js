// Burger menu toggle
const burgerButton = document.querySelector('header.header button');
burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
});

// Number counter for donation
const donationElement = document.getElementById('tot-don-te');
let startValue = 0;
let endValue = 1000000;

const incrementCounter = () => {
    const increment = Math.ceil(endValue / 100);
    if (startValue < endValue) {
        startValue += increment;
        donationElement.textContent = `₹ ${startValue.toLocaleString('en-IN')}`;
        requestAnimationFrame(incrementCounter);
    } else {
        donationElement.textContent = `₹ ${endValue.toLocaleString('en-IN')}`;
    }
};

incrementCounter();

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
