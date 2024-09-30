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

const detailsContainer = document.getElementById('detailsContainer');
const payImg = document.getElementById('payImg');
const payAppName = document.getElementById('payAppName');
const containerCloseBtn = document.getElementById('closeBtn');

const payName = document.getElementById('payName');
const payNumber = document.getElementById('payNumber');
const payType = document.getElementById('payType');

const paypalBtn = document.getElementById('paypalBtn');
const gpayBtn = document.getElementById('gpayBtn');
const paytmBtn = document.getElementById('paytmBtn');
const phonepeBtn = document.getElementById('phonepeBtn');

function openDetailsContainer() {
    detailsContainer.style.display = 'block';
}

containerCloseBtn.onclick = () => {
    detailsContainer.style.display = 'none';
}

paypalBtn.onclick = () =>{
    openDetailsContainer();
    payImg.src = "/img/paypal.png";
    payAppName.textContent = "Paypal";
    payName.textContent = "for HIBA";
    payType.textContent = "Mail :"
    payNumber.innerHTML = 'shkutty4<br>@gmail.com';
}

gpayBtn.onclick = () =>{
    openDetailsContainer();
    payImg.src = "/img/gpay.jpg";
    payAppName.textContent = "G pay";
    payName.textContent = "for HIBA";
    payNumber.textContent = '1234567890';
}

paytmBtn.onclick = () =>{
    openDetailsContainer();
    payImg.src = "/img/paytm.png";
    payAppName.textContent = "Paytm";
    payName.textContent = "for HIBA";
    payNumber.textContent = '1234567890';
}

phonepeBtn.onclick = () =>{
    openDetailsContainer();
    payImg.src = "/img/phonepe.png";
    payAppName.textContent = "PhonePe";
    payName.textContent = "for HIBA";
    payNumber.textContent = '1234567890';
}
