async function listaTarjetas(){
    const conexion = await fetch("http://localhost:3002/tarjetas",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
   
    return conexionConvertida;
    
}

async function enviarTarjeta(imagen,nombre,precio){
    
    const conexion= await fetch("http://localhost:3002/tarjetas",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            precio:precio
        })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarTarjeta(id){
    const conexion= await fetch("http://localhost:3002/tarjetas/" + id,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
            }
        });

}

export const conectaAPI={
    listaTarjetas, enviarTarjeta, eliminarTarjeta
}
