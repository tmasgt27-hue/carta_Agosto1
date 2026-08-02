// =================================
// PARA TI ✨
// CONECTANDO CON EL UNIVERSO 🌌
// SCRIPT V2.1
// =================================


// ===============================
// CAMBIO DE ESCENAS
// ===============================

function mostrarEscena(id){

    const escenas = document.querySelectorAll(".escena");

    escenas.forEach(escena => {
        escena.classList.remove("activa");
    });


    const nuevaEscena = document.getElementById(id);

    if(nuevaEscena){
        nuevaEscena.classList.add("activa");
    }

}



// ===============================
// INICIO
// ===============================

function comenzar(){

    const musica = document.getElementById("musica");

    if(musica){

        musica.play().catch(()=>{});

    }


    mostrarEscena("carta");

}



// ===============================
// FRASES DEL UNIVERSO
// ===============================

const frasesUniverso = [

"Sincronizando constelaciones...",

"Buscando el recuerdo correcto...",

"Leyendo el destino...",

"Destino encontrado ✨"

];


let fraseActual = 0;


function cambiarFrases(){

    const texto = document.getElementById("estadoUniverso");


    if(!texto) return;


    texto.innerHTML = frasesUniverso[fraseActual];


    fraseActual++;


    if(fraseActual >= frasesUniverso.length){

        fraseActual = 0;

    }

}


setInterval(cambiarFrases,2500);





// ===============================
// CARTA INICIAL
// ===============================


function abrirCarta(){

    escribirCarta();

}



function escribirCarta(){


    const texto = `

Mi amor...

Gracias por hacer cada uno de mis días más bonitos.

Hoy quiero recordarte que eres una de las personas más importantes de mi vida, y jamás cambiaría por nada la suerte de haberte encontrado.

Eres la mejor "coincidencia" que Dios puso en mi camino, una de esas personas que llegan sin avisar y terminan convirtiéndose en un lugar al que siempre quiero volver.

`;



    const elemento = document.getElementById("textoCarta");


    if(!elemento) return;


    elemento.innerHTML = "";


    let i = 0;



    function escribir(){


        if(i < texto.length){


            elemento.innerHTML += texto.charAt(i);


            i++;


            setTimeout(escribir,60);


        }


    }


    escribir();

}



// ===============================
// ASTRONAUTA
// ===============================


let caminando;


function iniciarCaminata(){


    const astronauta =
    document.getElementById("astronautaImg");


    if(!astronauta) return;



    let paso = 1;



    caminando = setInterval(()=>{


        paso++;


        if(paso > 3){

            paso = 1;

        }


        astronauta.src =
        `img/astronauta${paso}.png`;



    },800);



    setTimeout(()=>{


        clearInterval(caminando);


        astronauta.src =
        "img/astronauta3.png";



    },4000);


}




function irAstronauta(){

    mostrarEscena("astronauta");

    iniciarCaminata();

}




// ===============================
// POEMA
// ===============================


function mostrarTarjeta(){

    mostrarEscena("tarjeta");

}




// ===============================
// TICKETS
// ===============================


const tickets = [

{
titulo:"CAMINA CONMIGO",
texto:"Quiero descubrir cada rincón del universo contigo, compartir caminos, sueños y momentos que solo tengan sentido porque estamos juntos."
},


{
titulo:"AUNQUE ESTÉS LEJOS",
texto:"Aunque existan distancias enormes, siempre habrá una parte de mí buscando la forma de estar contigo."
},


{
titulo:"SIEMPRE TE ELEGIRÍA",
texto:"Entre millones de personas, caminos y universos, volvería a encontrarte y volvería a elegirte."
},


{
titulo:"NUESTRO UNIVERSO",
texto:"El universo puede ser infinito, pero encontrarte hizo que mi pequeño mundo fuera suficiente."
}

];



let disponibles = [...tickets];





function sacarTicket(){


    if(disponibles.length === 0){

        disponibles = [...tickets];

    }



    const numero =
    Math.floor(Math.random()*disponibles.length);



    const ticket =
    disponibles[numero];



    disponibles.splice(numero,1);



    const elemento =
    document.getElementById("ticketTexto");



    if(!elemento) return;



    elemento.innerHTML = "";



    escribirTicket(
        ticket.titulo,
        ticket.texto
    );


}





function escribirTicket(titulo,texto){


    const elemento =
    document.getElementById("ticketTexto");



    const contenido =
    titulo + "\n\n" + texto;



    let i = 0;



    function escribir(){


        if(i < contenido.length){


            elemento.innerHTML +=
            contenido.charAt(i);



            i++;


            setTimeout(escribir,40);


        }


    }



    escribir();


}





// ===============================
// FINAL
// ===============================


function reiniciar(){

    mostrarEscena("inicio");

}
