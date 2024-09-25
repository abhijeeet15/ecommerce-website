const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const totalSlides = slideElements.length;
let autoSlideInterval;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.setAttribute('data-index', i);
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    });
    dotsContainer.appendChild(dot);
}

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}vw)`;

    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

next.addEventListener('click', () => {
    showNextSlide();
    stopAutoSlide();
});

prev.addEventListener('click', () => {
    showPrevSlide();
    stopAutoSlide();
});

updateSlider();
startAutoSlide();



document.addEventListener("DOMContentLoaded", function() {
    let secondSliderIndex = 0;
    const secondSlides = document.querySelectorAll(".second-slide");
    const secondDotsContainer = document.querySelector(".second-dots");
    const secondPrevArrow = document.querySelector(".second-prev");
    const secondNextArrow = document.querySelector(".second-next");

    function showSecondSlide(index) {
        secondSlides.forEach((slide, i) => {
            slide.style.opacity = "0";
            slide.classList.remove("active");
            if (i === index) {
                slide.style.opacity = "1";
                slide.classList.add("active");
            }
        });

        updateSecondDots(index);
    }

    secondSlides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.addEventListener("click", () => showSecondSlide(i));
        secondDotsContainer.appendChild(dot);
    });

    function updateSecondDots(index) {
        const secondDots = document.querySelectorAll(".second-dots div");
        secondDots.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === index) {
                dot.classList.add("active");
            }
        });
    }

    secondNextArrow.addEventListener("click", () => {
        secondSliderIndex = (secondSliderIndex + 1) % secondSlides.length;
        showSecondSlide(secondSliderIndex);
    });

    secondPrevArrow.addEventListener("click", () => {
        secondSliderIndex = (secondSliderIndex - 1 + secondSlides.length) % secondSlides.length;
        showSecondSlide(secondSliderIndex);
    });

    showSecondSlide(secondSliderIndex);
});






