document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle');
    const list = document.querySelector('.list');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        if (list.classList.contains('active')) {
            list.classList.remove('active');
            list.classList.add('inactive');
        } else {
            list.classList.remove('inactive');
            list.classList.add('active');
        }
    });
});
