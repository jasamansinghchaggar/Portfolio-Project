
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.mode');
    const body = document.body;

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        }
    }

    themeToggleBtn.addEventListener('click', toggleTheme);

    body.classList.add('dark-theme');
});