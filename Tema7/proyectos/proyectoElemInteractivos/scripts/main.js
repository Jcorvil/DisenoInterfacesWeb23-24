function onIniciar() {
  // CÓDIGO DEL CARROUSEL
  // Seleccionamos el nodo con clase carrousel__grande
  const divCarrouselGrande = document.querySelector(".carrousel__grande");
  // Añadimos una funcionalidad click a los botones. Seleccionamos TODOS los botones.
  const botones = document.querySelectorAll(".botones__boton");

  // Una vez seleccionados los nodos, añadimos el eventListener a TODOS LOS BOTONES
  botones.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log(`Se ha pulsado el botón número ${i}`);

      // Quitamos la clase css activo a TODOS LOS BOTONES
      botones.forEach((botonQuitar) => {
        botonQuitar.classList.remove("activo");
      });
      // para luego añadírsela al botón al que se le ha hecho click.
      boton.classList.add("activo");

      let calculoPx = i * -50;

      console.log(`Click en ${i}: calculo= ${calculoPx}`);

      divCarrouselGrande.style.transform = `translateX(${calculoPx}%)`;
    });
  });
}

window.onload = onIniciar();
