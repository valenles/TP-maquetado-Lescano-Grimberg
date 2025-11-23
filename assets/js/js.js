let slides = document.querySelectorAll(".slides > div");
let puntos = document.querySelectorAll(".puntitos button");


function mostrarSlide(indice) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("disponible");
    slides[i].classList.add("no-disponible");
    puntos[i].classList.remove("punto-activo");
    puntos[i].classList.add("punto");
  }

  // Mostrar el slide correspondiente
  slides[indice].classList.remove("no-disponible");
  slides[indice].classList.add("disponible");
  console.log(slides[indice]);

  // Activar el puntito correspondiente
  puntos[indice].classList.remove("punto");
  puntos[indice].classList.add("punto-activo");
}

for (let i = 0; i < puntos.length; i++) {
  puntos[i].addEventListener("click", function() {
    mostrarSlide(i);
    console.log(i);

  });
}






// // Arrays paralelos
// let texto = ["Ana", "Luis", "Valentina"];
// let edades = [25, 30, 28];


// // Acceso paralelo
// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i] + " tiene " + edades[i] + " años y vive en " + ciudades[i]);
// }



// const slides = document.querySelectorAll('.slide');
// const puntos = document.querySelectorAll('.punto');
// let currentIndex = 0;
// let lastIndex = 0;





// function showSlide(index) {
//   slides[lastIndex].classList.remove('active', 'prev');
//   slides[index].classList.remove('prev');

//   // Marca la anterior para que salga hacia la izquierda
//   slides[lastIndex].classList.add('prev');
//   slides[index].classList.add('active');


// }

// function nextSlide() {
//   const next = (currentIndex + 1) % slides.length;
//   showSlide(next);
//   currentIndex = next;
// }

// let auto = setInterval(nextSlide, 8000);


