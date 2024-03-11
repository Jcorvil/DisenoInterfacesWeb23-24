function onIniciar() {
	const divCarrouselGrande = document.querySelector(".carrousel__grande");
	const flechaIzquierda = document.querySelector(".flecha-izquierda");
	const flechaDerecha = document.querySelector(".flecha-derecha");

	let actual = 0;

	function desplazarCarrusel(direccion) {
		const anchoImagen = divCarrouselGrande.offsetWidth / 4;
		actual =
			direccion === "izquierda" ? actual + anchoImagen : actual - anchoImagen;
		divCarrouselGrande.style.transform = `translateX(${actual}px)`;
	}

	flechaIzquierda.addEventListener("click", () =>
		desplazarCarrusel("izquierda")
	);
	flechaDerecha.addEventListener("click", () => desplazarCarrusel("derecha"));
}

window.onload = onIniciar;
