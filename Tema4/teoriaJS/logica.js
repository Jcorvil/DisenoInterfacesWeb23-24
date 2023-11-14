const onWindowResize =()=>{
    console.warn("Hola");
}

const cambiarDisenno = () => {
    const navTexto = document.querySelector("header .header_zonaNavegacion");
    const navHamburguer = document.querySelector("header .header_zonaNavegacionHamb");

    if (!navTexto.getAttribute("hidden")) {
        console.log("Mostrar nav hamburger");
        navTexto.setAttribute("hidden");
        navTexto.style.display = "none";
        navHamburguer.removeAttribute("hidden");
        navHamburguer.style.display = "block";
    }
};


const cambiarDisenno2 = () => {
    const navTexto = document.querySelector("header .header_zonaNavegacion");
    const navHamburguer = document.querySelector("header .header_zonaNavegacionHamb");
    
    if (!navTexto.getAttribute("hidden")) {
        console.log("Mostrar nav normal");
        navTexto.removeAttribute("hidden");
        navTexto.style.display = "flex";
        navHamburguer.setAttribute("hidden", "true");
        navHamburguer.style.display = "none";
    } 
};


window.onresize = () => {
    if(window.innerWidth <= 600){
        cambiarDisenno();
    }  else {
        cambiarDisenno2();
    }
}