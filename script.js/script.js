const bouton = document.getElementById('btn-menu');
const menu = document.getElementById('header-menu-masquer');
const FermerMenu = document.getElementById('btn-fermer');

bouton.addEventListener('click', function() {
    menu.style.display = 'flex';
});
FermerMenu.addEventListener('click', function() {
    menu.style.display = 'none';
});