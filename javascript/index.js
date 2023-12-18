 
 // ====================== About Section ====================== //
document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carousel');
    var text = document.getElementById('carousel-text');
    var images = carousel.querySelectorAll('.carousel-image');

    carousel.addEventListener('scroll', function() {
        var index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
        switch(index) {
            case 0:
                text.textContent = 'Text for Image 1';
                break;
            case 1:
                text.textContent = 'Text for Image 2';
                break;
            case 2:
                text.textContent = 'Text for Image 3';
                break;
            case 3:
                text.textContent = 'Text for Image 4';
                break;
            case 4:
                text.textContent = 'Text for Image 5';
                break;
            // Add more cases as needed
        }
    });
});

// ====================== About Section ====================== //
function navigateToAbout() {
    document.getElementById('about-section').scrollIntoView({
        behavior: 'smooth'
    });
}