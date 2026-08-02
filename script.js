// =================================
// PARA TI ✨
// CONECTANDO CON EL UNIVERSO 🌌
// SCRIPT V2.0
// =================================


// ===============================
// CAMBIO DE ESCENAS
// ===============================


function mostrarEscena(id){

    const escenas = document.querySelectorAll(".escena");


    escenas.forEach(escena=>{

        escena.classList.remove("activa");

    });


    document.getElementById(id).classList.add("activa");

}



// ===============================
// INICIO DEL VIAJE
// ===============================


function comenzar(){


    const musica = document.getElementById("musica");


    if(musica){

        musica.play();

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


    const texto =
    document.getElementById("estadoUniverso");


    if(!texto) return;


    texto.innerHTML =
    frasesUniverso[fraseActual];


    fraseActual++;


    if(fraseActual >= frasesUniverso.length){

        fraseActual = 0;

    }


}



setInterval(cambiarFrases,2500);




// ===============================
// CARTA
// ===============================


function abrirCarta(){

    mostrarEscena("astronauta");

    iniciarCaminata();

}




// ===============================
// ASTRONAUTA CAMINANDO
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



    },500);



    setTimeout(()=>{


        clearInterval(caminando);


        astronauta.src =
        "img/astronauta3.png";



    },3000);



}






// ===============================
// MOSTRAR POEMA
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

texto:
"Quiero descubrir cada rincón del universo contigo, compartir caminos, sueños y momentos que solo tengan sentido porque estamos juntos."

},


{

titulo:"AUNQUE ESTÉS LEJOS",

texto:
"Aunque existan distancias enormes, siempre habrá una parte de mí buscando la forma de estar contigo."

},


{

titulo:"SIEMPRE TE ELEGIRÍA",

texto:
"Entre millones de personas, caminos y universos, volvería a encontrarte y volvería a elegirte."

},


{

titulo:"NUESTRO UNIVERSO",

texto:
"El universo puede ser infinito, pero encontrarte hizo que mi pequeño mundo fuera suficiente."

}


];


let disponibles = [...tickets];



function sacarTicket(){



    if(disponibles.length===0){

        disponibles=[...tickets];

    }



    const numero =
    Math.floor(
    Math.random()*disponibles.length
    );



    const ticket =
    disponibles[numero];



    disponibles.splice(numero,1);



    const texto =
    document.getElementById("ticketTexto");



    texto.innerHTML="";



    escribirTicket(
        ticket.titulo,
        ticket.texto
    );


}





function escribirTicket(titulo,texto){



    const elemento =
    document.getElementById("ticketTexto");



    let contenido =
    `<b>${titulo}</b><br><br>${texto}`;



    let i=0;



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
