document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var list = document.querySelector('.list');

    toggleButton.addEventListener('click', function () {
        list.classList.toggle('active');
    });
    document.addEventListener('click', function (event) {
        if (!toggleButton.contains(event.target) && !list.contains(event.target)) {
            list.classList.remove('active');
        }
    });
});
