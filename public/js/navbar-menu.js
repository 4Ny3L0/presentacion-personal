const cerrar = document.querySelector('#x');
const menu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.nav');
cerrar.addEventListener('click', () => {
    navbar.style.display = 'none';
});

menu.addEventListener('click', () => {
    navbar.style.display = 'block';
})