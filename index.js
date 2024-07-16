
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
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

