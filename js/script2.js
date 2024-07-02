'use strict';

// Image Slider
function plusSlides(element, n) {
    const sliderContainer = element.closest('.slideshow-container');
    let slideIndex = parseInt(sliderContainer.dataset.slideIndex) || 1;
    showSlides(sliderContainer, slideIndex + n);
}

function showSlides(sliderContainer, n) {
    const slides = sliderContainer.querySelectorAll('.mySlides');
    let slideIndex = n;

    if (slideIndex > slides.length) { 
        slideIndex = 1;
    } else if (slideIndex < 1) { 
        slideIndex = slides.length; 
    }

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex - 1 ? "block" : "none";
    });

    sliderContainer.dataset.slideIndex = slideIndex;
}

// Initialize slider
const sliderContainer = document.querySelector('.slideshow-container');
showSlides(sliderContainer, 1);