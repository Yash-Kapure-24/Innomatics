// navbar humburger

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// slide show conatiner

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// testimonial slider js

window.onload = function () {
    let slides = 
        document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 400, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 400, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 1500);
};

// blog slide show

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".img-slide");
    const totalSlides = slides.length;
    const visibleSlides = 4;

    function showSlides() {
        slides.forEach((slide, index) => {
            if (index >= slideIndex && index < slideIndex + visibleSlides) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
        slideIndex = (slideIndex + 1) % totalSlides;
        setTimeout(showSlides, 2000); 
    }

    showSlides();
});
