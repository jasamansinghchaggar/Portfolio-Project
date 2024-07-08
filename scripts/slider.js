let items = document.querySelectorAll('.slider .item');
let active = 0;

function loadShow() {
    let stt;

    // Reset styles for current active item
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Loop through items after active item
    stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 1 ? 0 : 0.6;
    }

    // Loop through items before active item
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 1 ? 0 : 0.6;
    }
}

// Keyboard arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        // Move to previous card
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
    } else if (event.key === 'ArrowRight') {
        // Move to next card
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
    }
});

// Swipe gesture for mobile devices
let touchStartX = 0;

document.querySelector('.slider').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
});

document.querySelector('.slider').addEventListener('touchend', (e) => {
    let touchEndX = e.changedTouches[0].pageX;
    let threshold = 50; // Minimum swipe distance in pixels

    if (touchStartX > touchEndX + threshold) {
        // Swipe left
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
    } else if (touchStartX < touchEndX - threshold) {
        // Swipe right
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
    }
});

loadShow();
