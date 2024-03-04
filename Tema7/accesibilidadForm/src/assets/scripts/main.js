function onIniciar() {
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
}

window.onload = onIniciar();
