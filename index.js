function toggleText() {
    const para = document.getElementById('con2p');
    const button = document.getElementById('readMoreBtn');

    if (para.classList.contains('expanded')) {
        para.classList.remove('expanded');
        button.innerHTML = 'Read More';
    } else {
        para.classList.add('expanded');
        button.innerHTML = 'Read Less';
    }
}
/*----Slider script-----*/

let currentIndex = 0;

function moveLeft() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    const maxIndex = items.length - 3; // Only showing 3 items at a time
    
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
}

function moveRight() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    const maxIndex = items.length - 3; // Only showing 3 items at a time
    
    if (currentIndex < maxIndex) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
}

