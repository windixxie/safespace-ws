let carousel = document.querySelector('.carousel');
let left = document.querySelector('.left-button');
let right = document.querySelector('.right-button');
let images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

images[0].style.display = 'flex';
images[0].style.opacity = '1';

carousel.addEventListener('mouseover', () => {
    $(left).fadeIn();
    $(right).fadeIn();
    right.style.display = 'flex';
    left.style.display = 'flex';
})

carousel.addEventListener('mouseout', () => {
    $(left).fadeOut();
    $(right).fadeOut();
})

right.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    TweenMax.set(images[currentIndex], {opacity: 0});
    if (currentIndex === (images.length - 1)) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    TweenMax.to(images[currentIndex], 1, {opacity: 1});
    images[currentIndex].style.display = 'flex';
})

left.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    TweenMax.set(images[currentIndex], {opacity: 0});
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--
    }
    TweenMax.to(images[currentIndex], 1, {opacity: 1});
    images[currentIndex].style.display = 'flex';
})
