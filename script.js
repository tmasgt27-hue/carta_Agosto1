// ==========================================
// CARTA AGOSTO V3
// Hecho con muchísimo amor ❤️
// ==========================================



// ==========================================
// ESCENAS
// ==========================================

function mostrarEscena(id){

    const escenas = document.querySelectorAll(".escena");

    escenas.forEach(escena=>{

        escena.classList.remove("activa");

    });

    const nueva = document.getElementById(id);

    if(nueva){

        nueva.classList.add("activa");

    }

}




// ==========================================
// INICIO
// ==========================================

function comenzar(){

    const musica =
    document.getElementById("musica");

    if(musica){

        musica.volume = 0.25;

        musica.play().catch(()=>{});

    }

    mostrarEscena("carta");

}




// ==========================================
// FRASES DEL UNIVERSO
// ==========================================

const frasesUniverso=[

"Sincronizando constelaciones...",

"Buscando el recuerdo correcto...",

"Leyendo el destino...",

"Destino encontrado ✨"

];


let fraseActual=0;



function cambiarFrases(){

    const texto =
    document.getElementById("estadoUniverso");

    if(!texto) return;

    texto.innerHTML =
    frasesUniverso[fraseActual];

    fraseActual++;

    if(fraseActual>=frasesUniverso.length){

        fraseActual=0;

    }

}


setInterval(cambiarFrases,2500);




// ==========================================
// CARTA
// ==========================================

function abrirCarta(){

    escribirCarta();

}



function escribirCarta(){

    const texto=`

Mi amor...

Gracias por hacer cada uno de mis días más bonitos.

Hoy quiero recordarte que eres una de las personas más importantes de mi vida.

Jamás cambiaría por nada la suerte de haberte encontrado.

Eres la mejor "coincidencia" que Dios puso en mi camino.

Una de esas personas que llegan sin avisar...

...y terminan convirtiéndose en un lugar al que siempre quiero volver.

`;



    const papel =
    document.getElementById("textoCarta");

    if(!papel) return;

    papel.innerHTML="";



    let i=0;



    function escribir(){

        if(i<texto.length){

            papel.innerHTML+=texto.charAt(i);

            i++;

            setTimeout(escribir,55);

        }

        else{

            const abrir=
            document.getElementById("botonAbrir");

            if(abrir){

                abrir.style.display="none";

            }



            const continuar=
            document.getElementById("botonContinuar");

            if(continuar){

                continuar.style.display="block";

            }

        }

    }



    escribir();

}


alert("SCRIPT CARGADO");
