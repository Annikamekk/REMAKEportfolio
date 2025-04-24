document.getElementById("email").addEventListener("input", function () {
    document.getElementById("_replyto").value = this.value;
});



// Function to check if the element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate the progress bars
function animateProgressBar() {
    const progressBars = document.querySelectorAll('.progressBar');
    progressBars.forEach(bar => {
        if (isInView(bar)) {
            const skillPercentage = bar.getAttribute('data-skill');
            bar.style.width = skillPercentage + '%'; // Set width based on the data-skill attribute
        }
    });
}

// Trigger the animation when the page is scrolled
window.addEventListener('scroll', animateProgressBar);
window.addEventListener('load', animateProgressBar); // Trigger on page load
