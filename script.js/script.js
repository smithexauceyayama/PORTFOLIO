const bouton = document.getElementById('btn-menu');
const menu = document.getElementById('navbar-cache');
const FermerMenu = document.getElementById('navbar-clicable');

bouton.addEventListener('click', function() {
    menu.style.display = 'flex';
    bouton.style.display = 'none';
});
FermerMenu.addEventListener('click', function() {
    menu.style.display = 'none';
    bouton.style.display = 'block';
});