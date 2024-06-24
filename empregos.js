const carrossel = document.getElementById('carrossel');
const images = carrossel.querySelectorAll('img');
let currentIndex = 0;

function updateCarrossel() {
    const imageWidth = carrossel.querySelector('img').clientWidth;
    carrossel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    checkArrows();
}

function scrollLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
    }
}

function scrollRight() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarrossel();
    }
}

function checkArrows() {
    document.querySelector('.left-arrow').style.display = currentIndex > 0 ? 'block' : 'none';
    document.querySelector('.right-arrow').style.display = currentIndex < images.length - 1 ? 'block' : 'none';
}

// Initialize arrows visibility and carrossel position
updateCarrossel();
