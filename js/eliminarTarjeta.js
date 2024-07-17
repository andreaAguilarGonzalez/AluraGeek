import { conectaAPI } from "./conectaAPI.js";

async function agregarListener(){
    const tarjetas = document.querySelectorAll("[data-id]");
    tarjetas.forEach((item) => {
        item.addEventListener("click", evento => eliminarTarjeta(item.dataset.id));
    });
}

setTimeout(() => agregarListener(),500); 


async function eliminarTarjeta(id){

    try{
        await conectaAPI.eliminarTarjeta(id)
        console.log("exitoso")
    }catch(e){
        alert(e);
    }
}
