let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slides = document.getElementById('slides');

let imgbg = document.getElementById('img-bg');

// console.log(slides.firstElementChild);
// console.log(slides.lastElementChild);
console.log(imgbg.firstElementChild);

next.addEventListener('click', function() {
    let first = slides.firstElementChild;
    let second = imgbg.firstElementChild;
    slides.removeChild(first);
    imgbg.removeChild(second);
    imgbg.appendChild(first);
    slides.appendChild(second);
});


// prev.addEventListener('click', function() {
//     let last = slides.lastElementChild;
//     let second = imgbg.firstElementChild;
//     let first = slides.firstElementChild;
//     imgbg.removeChild(second);
//     slides.removeChild(first);
//     imgbg.appendChild(last);
//     slides.appendChild(second);
// });