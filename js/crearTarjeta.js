import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function enviarTarjeta(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;

    try{
        await conectaAPI.enviarTarjeta(imagen,nombre,precio)
        console.log("exitoso")
    }catch(e){
        alert(e);
    }
}

formulario,addEventListener("submit",evento=>enviarTarjeta(evento));