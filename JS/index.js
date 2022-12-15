<<<<<<< HEAD
onload = () => {
  document.getElementById("headerIndex").style.width = innerWidth;
};
//Prueba Fer

let slideIndex = 0;
let botonNext = document.getElementById("next");
let botonPrev = document.getElementById("prev");
let slides = document.getElementsByClassName("mySlides");
let tiempo = 10000;
showSlides();

function botonDerecha() {
    slideIndex++;
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

  setTimeout(showSlides,tiempo);

  botonNext.addEventListener("click", botonDerecha);
  botonPrev.addEventListener("click", botonIzquierda );
=======
onload = () =>{

    document.getElementById("headerIndex").style.width = innerWidth
    agrandar()
    subir()
}


function subir(){
    document.getElementById("textHotel").style.marginTop = "1em"
} 
function agrandar(){
    document.getElementById("textHotel").style.fontSize = "75px"
>>>>>>> 5d41ea545c4924167a2debdf7a4b82a66e0e5f85
}
