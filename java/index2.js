function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');
    menuIcon.classList.toggle('active');
    menuContent.classList.toggle('active');
}
$(".fixed-anchor").on("mouseenter", () => {
    $(".fixed-anchor").addClass("square-box"); 
});


$(".fixed-anchor").on("mouseleave", () => {
    $(".fixed-anchor").removeClass("square-box"); 
});
$(".fixed-anchor-left").on("mouseenter", () => {
    $(".fixed-anchor-left").addClass("square-box"); 
});


$(".fixed-anchor-left").on("mouseleave", () => {
    $(".fixed-anchor-left").removeClass("square-box"); 
});

