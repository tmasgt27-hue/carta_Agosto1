// =================================
// PARA TI ✨
// CONECTANDO CON EL UNIVERSO 🌌
// =================================



// CAMBIO DE ESCENAS

function mostrarEscena(id) {


    const escenas = document.querySelectorAll(".escena");


    escenas.forEach(escena => {

        escena.classList.remove("activa");

    });



    document.getElementById(id).classList.add("activa");


}






// INICIO

function comenzar(){

    alert("¡El botón funciona!");

    const musica = document.getElementById("musica");

    if(musica){
        musica.play();
    }

    mostrarEscena("carta");

}






// CARTA

function abrirCarta(){

    mostrarEscena("astronauta");

}






// ASTRONAUTA

function mostrarTarjeta(){

    mostrarEscena("tarjeta");

}






// TARJETA

function leerMensaje(){

    mostrarEscena("mensaje");

    escribirTexto();

}








// TEXTO ANIMADO

function escribirTexto(){



const texto = `

Incluso en un universo enorme,
lleno de estrellas y caminos desconocidos,

existen personas que hacen que todo parezca
tener un poco más de sentido.

Entre millones de lugares,
mi corazón encontró uno especial:

estar contigo.

`;



let i = 0;


const elemento = document.getElementById("texto");


elemento.innerHTML = "";



function escribir(){


    if(i < texto.length){


        elemento.innerHTML += texto.charAt(i);


        i++;


        setTimeout(escribir,60);


    }


}



escribir();


}









// =================================
// TICKETS DEL UNIVERSO 🎟️
// =================================



const tickets = [


{

titulo:"CAMINA CONMIGO",

texto:`

Cuando digo que quiero caminar contigo,
no hablo solo de compartir un camino.

Hablo de sueños, sonrisas y momentos juntos.

Toma mi mano y no tengas miedo,
porque si es contigo,
quiero descubrir cada rincón del universo.

`

},



{

titulo:"AUNQUE ESTÉS LEJOS",

texto:`

Aunque existan kilómetros entre nosotros,
hay una parte de mí que siempre encuentra
la forma de estar contigo.

Porque hay personas que incluso desde lejos
se sienten como hogar.

`

},




{

titulo:"SIEMPRE TE ELEGIRÍA",

texto:`

Entre millones de personas,
entre caminos y posibilidades,

si tuviera que elegir otra vez,

en cualquier vida,
en cualquier lugar
y en cualquier universo,

volvería a elegirte.

`

},



{

titulo:"NUESTRO UNIVERSO",

texto:`

Quizás el universo sea infinito,

pero entre tantas estrellas
tuve la suerte de encontrar
a alguien que hizo mi mundo especial.

`

}


];






let ticketsDisponibles = [...tickets];






function sacarTicket(){



if(ticketsDisponibles.length === 0){

ticketsDisponibles = [...tickets];

}




const posicion = Math.floor(

Math.random() * ticketsDisponibles.length

);




const ticket = ticketsDisponibles[posicion];



ticketsDisponibles.splice(posicion,1);





document.getElementById("ticket").innerHTML = `


<h3>${ticket.titulo}</h3>


<p>${ticket.texto}</p>


`;



}








// REINICIAR


function reiniciar(){


    mostrarEscena("inicio");


}
