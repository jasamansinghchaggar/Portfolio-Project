function smoothScroll(targetId) {
    event.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        const offset = targetSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}