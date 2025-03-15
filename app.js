// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const listaAmigos = [];

function agregarAmigo(){
    const nuevoAmigo = document.getElementById("amigo").value;
   
    if (nuevoAmigo === "" ){
        alert("Por favor ingrese un nombre válido");
    } else{
        listaAmigos.push(nuevoAmigo);
        document.getElementById("amigo").value = "";
        const ulListaAmigos = document.getElementById("listaAmigos")
        ulListaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`;
    }
    //console.log(listaAmigos)
}

function sortearAmigo(){

    const cantidadAmigos= listaAmigos.length;

    if (cantidadAmigos === 0){
        alert ("Favor introduzca un amigo")
    } else {
        const iAmigo = Math.floor(Math.random()*cantidadAmigos);
        const resultadoHTML = document.getElementById("resultado")
        resultadoHTML.innerHTML= listaAmigos[iAmigo];
    }
}



    