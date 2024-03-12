function onIniciar() {
	let divCarrouselGrande = document.querySelector(".carrousel__grande");
	let flechaIzquierda = document.querySelector(".flecha-izquierda");
	let flechaDerecha = document.querySelector(".flecha-derecha");

	let actual = 0;

	function desplazarCarrusel(direccion) {
		// Calcula el ancho de un elemento del carrusel
		let anchoElemento = divCarrouselGrande.offsetWidth / 3;
		// Calcula el porcentaje de desplazamiento
		let porcentajeDesplazamiento =
			(anchoElemento / divCarrouselGrande.offsetWidth) * 100;

		// Calcula la nueva posición basada en la dirección
		let nuevaPosicion =
			direccion == "izquierda"
				? actual + porcentajeDesplazamiento
				: actual - porcentajeDesplazamiento;

		// Verifica si el carrusel está en el límite izquierdo o derecho
		if (nuevaPosicion > 0) {
			// Si está a la izquierda del todo, establece nuevaPosicion a 0 y
			// deshabilita la flecha izquierda
			nuevaPosicion = 0;
			flechaIzquierda.disabled = true;
		} else if (nuevaPosicion < -66) {
			// Si está a la derecha del todo, establece nuevaPosicion a -66 y
			// deshabilita la flecha derecha
			nuevaPosicion = -66;
			flechaDerecha.disabled = true;
		} else {
			// Si no está en los límites, es decir en el centro, habilita ambas flechas
			flechaIzquierda.disabled = false;
			flechaDerecha.disabled = false;
		}

		// Actualiza la posición actual y aplica el desplazamiento
		actual = nuevaPosicion;
		divCarrouselGrande.style.transform = `translateX(${actual}%)`;
	}

	flechaIzquierda.addEventListener("click", () =>
		desplazarCarrusel("izquierda")
	);
	flechaDerecha.addEventListener("click", () => desplazarCarrusel("derecha"));
}

window.onload = onIniciar;
