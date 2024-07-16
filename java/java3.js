document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");

    projects.forEach(function(project) {
        project.addEventListener("click", function() {
            const cover = this.querySelector(".cover");
            if (cover.style.bottom === '0%') {
                cover.style.bottom = '-100%'; // Slide down to hide
            } else {
                cover.style.bottom = '0%'; // Slide up to show
            }
        });
    });
});
