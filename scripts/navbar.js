document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var list = document.querySelector('.list');

    toggleButton.addEventListener('click', function () {
        list.classList.toggle('active');
    });
});
