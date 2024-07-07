document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.mode');
    const body = document.body;

    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
        updateIcon();
    }

    function updateIcon() {
        const icon = themeToggleBtn.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        } else {
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        }
    }

    function applyStoredTheme() {
        const storedTheme = localStorage.getItem('theme') || 'dark-theme';
        body.classList.add(storedTheme);
        updateIcon();
    }

    applyStoredTheme();

    themeToggleBtn.addEventListener('click', toggleTheme);
});
