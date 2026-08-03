// ==========================================================
// PARA TI ✨
// CONECTANDO CON EL UNIVERSO 🌌
//
// SCRIPT V3 FINAL
//
// PARTE 1
// • Referencias
// • Constantes
// • Variables
// • Escenas
// • Inicio
// • Frases del universo
// ==========================================================





// ==========================================================
// REFERENCIAS DEL DOM
// ==========================================================

// Audio
const musica = document.getElementById("musica");

// Escenas
const escenas = document.querySelectorAll(".escena");

// Inicio
const estadoUniverso = document.getElementById("estadoUniverso");
const btnInicio = document.getElementById("btnInicio");

// Carta
const textoCarta = document.getElementById("textoCarta");
const botonAbrir = document.getElementById("botonAbrir");
const botonContinuar = document.getElementById("botonContinuar");

// Astronauta
const astronautaImg = document.getElementById("astronautaImg");
const botonFlores = document.getElementById("botonFlores");

// Poema
const botonPoema = document.getElementById("botonPoema");

// Tickets
const ticketTitulo = document.getElementById("ticketTitulo");
const ticketContenido = document.getElementById("ticketContenido");
const botonTicket = document.getElementById("botonTicket");

// Final
const botonReiniciar = document.getElementById("botonReiniciar");





// ==========================================================
// FRASES DEL UNIVERSO
// ==========================================================

const FRASES_UNIVERSO = [

    "Sincronizando constelaciones...",

    "Buscando el recuerdo correcto...",

    "Leyendo el destino...",

    "Destino encontrado ✨"

];





// ==========================================================
// MENSAJE DE LA CARTA
// ==========================================================

const MENSAJE_CARTA = `Mi amor...

Gracias por hacer cada uno de mis días más bonitos.

Hoy quiero recordarte que eres una de las personas más importantes de mi vida y jamás cambiaría por nada la suerte de haberte encontrado.

Eres la mejor "coincidencia" que Dios puso en mi camino, una de esas personas que llegan sin avisar y terminan convirtiéndose en un lugar al que siempre quiero volver.`;





// ==========================================================
// TICKETS
// ==========================================================

const TICKETS = [

    {
        titulo: "CAMINA CONMIGO",
        contenido: "Quiero descubrir cada rincón del universo contigo, compartir caminos, sueños y momentos que solo tengan sentido porque estamos juntos."
    },

    {
        titulo: "AUNQUE ESTÉS LEJOS",
        contenido: "Aunque existan distancias enormes, siempre habrá una parte de mí buscando la forma de estar contigo."
    },

    {
        titulo: "SIEMPRE TE ELEGIRÍA",
        contenido: "Entre millones de personas, caminos y universos, volvería a encontrarte y volvería a elegirte."
    },

    {
        titulo: "NUESTRO UNIVERSO",
        contenido: "El universo puede ser infinito, pero encontrarte hizo que mi pequeño mundo fuera suficiente."
    }

];





// ==========================================================
// VARIABLES
// ==========================================================

let indiceFrase = 0;

let intervaloFrases = null;

let temporizadorEscritura = null;

let cartaAbierta = false;

let animacionAstronauta = null;

let ticketsDisponibles = [];

let indiceTicket = 0;

let ultimoTicket = false;





// ==========================================================
// CAMBIO DE ESCENAS
// ==========================================================

function mostrarEscena(id){

    escenas.forEach(escena=>{

        escena.classList.remove("activa");

    });

    const nuevaEscena = document.getElementById(id);

    if(nuevaEscena){

        nuevaEscena.classList.add("activa");

    }

}





// ==========================================================
// COMENZAR EL VIAJE
// ==========================================================

function comenzar(){

    if(musica){

        musica.volume = 0.35;

        musica.play().catch(()=>{});

    }

    mostrarEscena("carta");

}





// ==========================================================
// FRASES DEL UNIVERSO
// ==========================================================

function cambiarFrase(){

    indiceFrase++;

    if(indiceFrase >= FRASES_UNIVERSO.length){

        indiceFrase = 0;

    }

    estadoUniverso.textContent = FRASES_UNIVERSO[indiceFrase];

}





function iniciarFrases(){

    estadoUniverso.textContent = FRASES_UNIVERSO[0];

    clearInterval(intervaloFrases);

    intervaloFrases = setInterval(

        cambiarFrase,

        2500

    );

}


// ==========================================================
// PARTE 2
// • Función universal para escribir texto
// • Carta
// • Astronauta
// • Poema
// ==========================================================





// ==========================================================
// ESCRIBIR TEXTO
// ==========================================================

function escribirTexto(elemento, texto, velocidad, alFinal = null){

    clearTimeout(temporizadorEscritura);

    elemento.textContent = "";

    let indice = 0;

    function escribir(){

        if(indice < texto.length){

            elemento.textContent += texto.charAt(indice);

            indice++;

            temporizadorEscritura = setTimeout(

                escribir,

                velocidad

            );

        }else{

            if(typeof alFinal === "function"){

                alFinal();

            }

        }

    }

    escribir();

}





// ==========================================================
// CARTA
// ==========================================================

function abrirCarta(){

    if(cartaAbierta){

        return;

    }

    cartaAbierta = true;

    escribirTexto(

        textoCarta,

        MENSAJE_CARTA,

        40,

        ()=>{

            botonAbrir.style.display = "none";

            botonContinuar.style.display = "inline-block";

        }

    );

}





// ==========================================================
// ASTRONAUTA
// ==========================================================

function iniciarCaminata(){

    clearInterval(animacionAstronauta);

    let sprite = 1;

    astronautaImg.src = "img/astronauta1.png";

    animacionAstronauta = setInterval(()=>{

        sprite++;

        if(sprite > 3){

            sprite = 1;

        }

        astronautaImg.src = `img/astronauta${sprite}.png`;

    },250);

}





function detenerCaminata(){

    clearInterval(animacionAstronauta);

    animacionAstronauta = null;

    astronautaImg.src = "img/astronauta3.png";

}





function irAstronauta(){

    mostrarEscena("astronauta");

    iniciarCaminata();

    setTimeout(()=>{

        detenerCaminata();

    },4000);

}





// ==========================================================
// POEMA
// ==========================================================

function mostrarTarjeta(){

    mostrarEscena("tarjeta");

}


// ==========================================================
// PARTE 3
// • Tickets
// • Reiniciar
// • Eventos
// • Inicialización
// ==========================================================





// ==========================================================
// MEZCLAR TICKETS
// ==========================================================

function mezclarTickets(){

    ticketsDisponibles = [...TICKETS];

    for(let i = ticketsDisponibles.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [ticketsDisponibles[i], ticketsDisponibles[j]] = [

            ticketsDisponibles[j],
            ticketsDisponibles[i]

        ];

    }

    indiceTicket = 0;

    ultimoTicket = false;

}





// ==========================================================
// MOSTRAR TICKET
// ==========================================================

function sacarTicket(){

    if(indiceTicket >= ticketsDisponibles.length){

        return;

    }

    const ticket = ticketsDisponibles[indiceTicket];

    ticketTitulo.textContent = ticket.titulo;

    escribirTexto(

        ticketContenido,

        ticket.contenido,

        28

    );

    indiceTicket++;

    if(indiceTicket >= ticketsDisponibles.length){

        ultimoTicket = true;

        botonTicket.textContent = "✨ Continuar";

    }

}





// ==========================================================
// BOTÓN DE TICKETS
// ==========================================================

function accionBotonTicket(){

    if(ultimoTicket){

        mostrarEscena("final");

        return;

    }

    sacarTicket();

}





// ==========================================================
// REINICIAR
// ==========================================================

function reiniciar(){

    clearTimeout(temporizadorEscritura);

    detenerCaminata();

    mostrarEscena("inicio");

    cartaAbierta = false;

    textoCarta.textContent = "";

    botonAbrir.style.display = "inline-block";

    botonContinuar.style.display = "none";

    ticketTitulo.textContent = "";

    ticketContenido.textContent = "";

    botonTicket.textContent = "✨ Revelar mensaje";

    mezclarTickets();

}





// ==========================================================
// EVENTOS
// ==========================================================

btnInicio.addEventListener(

    "click",

    comenzar

);

botonAbrir.addEventListener(

    "click",

    abrirCarta

);

botonContinuar.addEventListener(

    "click",

    irAstronauta

);

botonFlores.addEventListener(

    "click",

    mostrarTarjeta

);

botonPoema.addEventListener(

    "click",

    ()=>{

        mostrarEscena("tickets");

    }

);

botonTicket.addEventListener(

    "click",

    accionBotonTicket

);

botonReiniciar.addEventListener(

    "click",

    reiniciar

);





// ==========================================================
// INICIALIZACIÓN
// ==========================================================

iniciarFrases();

mezclarTickets();
