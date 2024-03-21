document.addEventListener("DOMContentLoaded", function(){//loading content before executing//
    let headings = document.querySelectorAll('header, h2, h3, h4, h5, h5');
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            // Change the color of the clicked heading
            this.style.color = randomColor;
        });
    });
});