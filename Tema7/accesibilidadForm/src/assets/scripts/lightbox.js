// CÓDIGO DEL LIGHTBOX
// 1º Seleccionamos el nodo al que queremos añadir evento click
const imagenes = document.querySelectorAll(".div-img__img");
// Seleccionamos también el nodo al que cambiar la clase activo
const divLightbox = document.querySelector(".main__ligthbox-proyecto-selected");
const imgLigthbox = document.querySelector(".div-img__img--lightbox");

imagenes.forEach((cadaImagen, i) => {
  cadaImagen.addEventListener("click", () => {
    // Podemos ver por pantalla que cadaImagen.src es el atributo src del nodo img... es decir... la ruta de la imagen
    console.log(cadaImagen.src); // Cada nodo es cada imagen del lightbox, es decir, las imagenes en pequeño

    // Añadimos la clase activo al divLightbox
    divLightbox.classList.add("activo"); // divLightbox es el div con position fixed que se abre al hacer click en el nodo (divImg)
    // Le ponemos, al atributo src de la img del lightbox (la grande) el src de la imagen a la que se le ha hecho click
    imgLigthbox.setAttribute("src", cadaImagen.src);
  });
});

// Ya sólo queda dale funcionalidad al boton cerrar
const botonCerrar = document.querySelector(
  ".ligthbox-proyecto-selected__boton"
);
botonCerrar.addEventListener("click", () => {
  divLightbox.classList.remove("activo");
});
