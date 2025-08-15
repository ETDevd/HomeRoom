const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide img');
    const leftButton = document.querySelector('.nav-button.left');
    const rightButton = document.querySelector('.nav-button.right');

    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const totalSlides = slides.length;

    // Auto-scroll function
    function autoScroll() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    // Update slide position
    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Button navigation
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    // Start auto-scroll
    let autoScrollInterval = setInterval(autoScroll, 3000);

    // Pause auto-scroll on hover
    document.querySelector('.slideshow').addEventListener('mouseover', () => {
        clearInterval(autoScrollInterval);
    });

    document.querySelector('.slideshow').addEventListener('mouseout', () => {
        autoScrollInterval = setInterval(autoScroll, 3000);
    });

document.querySelector('.float-button').addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});