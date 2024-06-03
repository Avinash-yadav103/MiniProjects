document.querySelector('.slider i').addEventListener('click', function() {
    document.querySelector(".slider").classList.toggle('slider--on');
});

document.querySelector('.open i').addEventListener('click', function() {
    document.querySelector(".slider").classList.toggle('slider');
});