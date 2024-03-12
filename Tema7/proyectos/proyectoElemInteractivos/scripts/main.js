function onIniciar() {
	const divCarrouselGrande = document.querySelector(".carrousel__grande");
	const flechaIzquierda = document.querySelector(".flecha-izquierda");
	const flechaDerecha = document.querySelector(".flecha-derecha");

	let actual = 0;

	function desplazarCarrusel(direccion) {
		const anchoElemento = divCarrouselGrande.offsetWidth / 3;
		const porcentajeDesplazamiento =
			(anchoElemento / divCarrouselGrande.offsetWidth) * 100;

		actual =
			direccion == "izquierda"
				? actual + porcentajeDesplazamiento
				: actual - porcentajeDesplazamiento;

		divCarrouselGrande.style.transform = `translateX(${actual}%)`;
	}

	flechaIzquierda.addEventListener("click", () =>
		desplazarCarrusel("izquierda")
	);
	flechaDerecha.addEventListener("click", () => desplazarCarrusel("derecha"));
}

window.onload = onIniciar;
