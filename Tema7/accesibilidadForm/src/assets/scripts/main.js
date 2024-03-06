function onIniciar() {
  // ---------------CÓDIGO TABS--------------- //
  // 1.- Coneguimos todas las pestañas(botones)
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  // 2.- Conseguimos los bloques de texto
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");

  // 3.- Añadir un eventListener de click a los botones
  botonesTab.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log("Click en botón " + i);

      // 4.- Se le quita "activo" a todos los botones, lo tengan o no, y luego se le añade
      // al boton que se haya pulsado.
      // Se hace lo mismo para los bloques de texto.
      botonesTab.forEach((botonFE, j) => {
        botonFE.classList.remove("activo");
        bloquesTexto[j].classList.remove("activo");
      });

      boton.classList.add("activo");
      bloquesTexto[i].classList.add("activo");
    });
  });

  // ---------------CÓDIGO ACORDEÓN--------------- //
  // h2Titulo va a tener un eventListener de click
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  // pContenido es al que vamos a modificarle las clases css
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  console.log(h2Titulo);
  console.log(pContenido);

  h2Titulo.forEach((nodo, i) => {
    nodo.addEventListener("click", () => {
      if (
        pContenido[i].classList.contains("divContenedor__contenido--activo")
      ) {
        pContenido[i].classList.remove("divContenedor__contenido--activo");
      } else {
        pContenido[i].classList.add("divContenedor__contenido--activo");
      }
    });
  });
}

window.onload = onIniciar();
