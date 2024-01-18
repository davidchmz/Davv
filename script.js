document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

   document.addEventListener("DOMContentLoaded", function () {
        var sections = document.querySelectorAll('#fade-in-section');

        sections.forEach(function (section) {
            section.classList.add('animate');
        });
    });
