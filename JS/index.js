onload = () => {
  document.getElementById("headerIndex").style.width = innerWidth;
  document.getElementById("headerIndex").style.width = innerWidth
  agrandar()
  subir()
};
//Prueba Fer

let slideIndex = 0;
let botonNext = document.getElementById("next");
let botonPrev = document.getElementById("prev");
let slides = document.getElementsByClassName("mySlides");
showSlides();

function botonDerecha() {
    slideIndex+2;
  showSlides();
}

function botonIzquierda() {
    slideIndex-2;
    showSlides();
}

function showSlides() {
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  botonNext.addEventListener("click", botonDerecha);
  botonPrev.addEventListener("click", botonIzquierda );

}


function subir(){
    document.getElementById("textHotel").style.marginTop = "1em"
} 
function agrandar(){
    document.getElementById("textHotel").style.fontSize = "75px"
}
