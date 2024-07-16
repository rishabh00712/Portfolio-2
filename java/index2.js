function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');
    menuIcon.classList.toggle('active');
    menuContent.classList.toggle('active');
}
