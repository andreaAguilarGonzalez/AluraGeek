import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

export default function construyeCard(imagen,nombre,precio,id) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";

    tarjeta.innerHTML = `
                    <img class="ima_caja" src="${imagen}" alt="storm">
                    <div class="container">
                      <p style="font-size: 15px;">${nombre}</p>
                      <div class="boton_delete">
                        <p style="font-size: 16px;">$${precio}</p>
                        <a href="#" data-id="${id}"><img src="ima/delete.png" type="submit" /></a>
                      </div>
                    </div>
                `

    return tarjeta;
}

async function listaTarjetas() {
    try{
        const listaAPI = await conectaAPI.listaTarjetas();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.imagen, element.nombre, element.precio, element.id)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de tarjeta</h2>`;
    }
}

listaTarjetas();