

// Reflective 'Read more' button

// Define the variables needed for the typewriter effect
// Define the texts to cycle through
const texts = [" Developer !", " Js Programmer !", "  Coder !"];

// Initialize variables
let textIndex = 0; // Index for current text in texts array
let charIndex = 0; // Index for current character in current text
const speed = 100; // Speed of typing effect

function typeWriter() {
    let currentText = texts[textIndex % texts.length];
    
    if (charIndex < currentText.length) {
        document.getElementById("demo").innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // Reset charIndex and clear the content to start over
        charIndex = 0;
        setTimeout(() => {
            document.getElementById("demo").innerHTML = '';
            textIndex++; // Move to the next text in the array
            typeWriter();
        }, speed * 10); // Slight delay before starting again
    }
}

// Initialize the typewriter effect when the document loads
window.onload = function() {
    typeWriter();
}

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


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.b').forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('buty');
        });

        element.addEventListener('mouseout', () => {
            element.classList.remove('buty');
        });
    });
});
