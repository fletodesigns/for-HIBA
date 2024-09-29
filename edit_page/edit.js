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

const passwordContainer = document.getElementById('passwordContainer');
const passwordInput = document.getElementById('passwordInput');
const enterBtn = document.getElementById('enterBtn');

function openPage() {
    if(passwordInput.value = "WEfleto.7"){
        passwordContainer.style.display = 'none';
    }
}

enterBtn.addEventListener('click', openPage);
