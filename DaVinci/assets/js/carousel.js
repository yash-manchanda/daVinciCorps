var slideIndex = 1;
var localVar;
showSlides(slideIndex);


function plusSlides(n, totalSlides) {

    if(slideIndex < totalSlides ) {
        showSlides(slideIndex += n);
    }
}
function prevSlides() {
    if(slideIndex > 1) {
        console.log(slideIndex);

        slideIndex --;
        showSlides(slideIndex);
    }
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentIndex(id) {
    slideIndex = 1;
    localVar = id;
    showSlides(slideIndex);
}

function showSlides(n) {
    console.log(slideIndex);
    var i;
    var value = "mySlides".concat(localVar);
    var slides = document.getElementsByClassName(value);
    console.log(slides.length);
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}