function onIniciar() {
  console.log("Hola Mundo");

  // CODIGO DEL TAB
  // 1º es conseguir todas las pestañas aka los botones
  // 2º conseguir todos los bloques de texto
  const botonesTab = document.querySelectorAll(".botonesTab__pestana");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");

  // 3º Sería añadir un eventListener de click a todos los botones
  botonesTab.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      console.log("Click en boton " + i);

      // RECORRER TODOS LOS BOTONES Y QUITAR CLASE ACTIVO
      // Le quitamos la clase activo al resto de botones
      botonesTab.forEach((botonFE, j) => {
        botonFE.classList.remove("activo");
        bloquesTexto[j].classList.remove("activo");
      });

      // Y le ponemos activo al boton AL QUE LE HEMOS HECHO CLICK
      boton.classList.add("activo");
      bloquesTexto[i].classList.add("activo");
    });
  });

  // CÓDIGO DEL ACORDEON
  // 1º Seleccionamos los nodos en cuestión. Los nodos que vamos a tratar
  // h2Titulo va a tener un eventListener de click
  const h2Titulo = document.querySelectorAll(".divContenedor__titulo");
  // pContenido es al que vamos a modificarle las clases css... la classList
  const pContenido = document.querySelectorAll(".divContenedor__contenido");

  h2Titulo.forEach((nodo, i) => {
    nodo.addEventListener("click", () => {
      // Si el pContenido tiene la clase css divContenedor__contenido--activo, la quitamos
      if (
        pContenido[i].classList.contains("divContenedor__contenido--activo")
      ) {
        pContenido[i].classList.remove("divContenedor__contenido--activo");
      } else {
        // y si no, la añadimos
        pContenido[i].classList.add("divContenedor__contenido--activo");
      }
    });
  });

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
