let items = document.querySelectorAll('.slider .item');
let active = 0;
let intervalId;

function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 1 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 1 ? 0 : 0.6;
    }
}

function startRotation() {
    intervalId = setInterval(() => {
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
    }, 2000); // Change card every 2 seconds
}

function stopRotation() {
    clearInterval(intervalId);
}

document.querySelector('.slider').addEventListener('mouseenter', stopRotation);
document.querySelector('.slider').addEventListener('mouseleave', startRotation);

// Mobile touch events
document.querySelector('.slider').addEventListener('touchstart', stopRotation);
document.querySelector('.slider').addEventListener('touchend', startRotation);

// Manually change card on touch move (swipe)
document.querySelector('.slider').addEventListener('touchmove', (e) => {
    let touch = e.touches[0];
    let startX = touch.pageX;

    document.querySelector('.slider').addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].pageX;
        if (startX > endX + 50) {
            // swipe left
            active = active + 1 < items.length ? active + 1 : 0;
        } else if (startX < endX - 50) {
            // swipe right
            active = active - 1 >= 0 ? active - 1 : items.length - 1;
        }
        loadShow();
        startRotation();
    }, { once: true });
});

loadShow();
startRotation();