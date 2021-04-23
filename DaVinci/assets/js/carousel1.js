var slideIndex = 1;
showSlides(slideIndex);

function plusSlides1(n, totalSlides) {

    console.log(slideIndex);

    if(slideIndex < totalSlides ) {
        showSlides(slideIndex += n);
    }

}
function prevSlides1() {
    if(slideIndex > 1) {
        // console.log(slideIndex);

        slideIndex --;
        showSlides(slideIndex);
    }
}


function currentSlide1(n) {
    showSlides(slideIndex = n);
}

function currentIndex1() {
    slideIndex = 1;
}

function showSlides(n) {
    // console.log(slideIndex);
    var i;
    var slides = document.getElementsByClassName("mySlides1");
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