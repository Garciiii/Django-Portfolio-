let slideIndex = 1;
ShowSlides(slideIndex)

function moveSlide(n){
    slideIndex += n
    ShowSlides(slideIndex)
}

function ShowSlides(n){
   let i;
   let slides = document.getElementsByClassName("carousel-item") 
   if ( n > slides.length ){
       slideIndex = 1
   }
   if ( n < 1){
      slideIndex = slides.length;
   }

   for (let i = 0; i= slides.length; i++){
       slides[i].style.display = "none"
   }
   slides[slideIndex - 1].style.display = "flex"
}