let name = document.querySelector("#text")
let color = document.querySelector("#color")
let fila=[];

function addFila(){
    let cliente ={
        nome:name.value,
        cor:color.value
    }
    fila.push(cliente)
}
function removeFila(){
    fila.shift()
    showClient()
}


function showClient(){
    let filaDisplay = fila.map((cliente, index) => {
        return `<div style="backdrop-filter: blur(4px); ${cliente.cor}; padding: 10px; margin-bottom: 5px;">
                    <span style="color: white;">${cliente.nome}</span>
                    <span style="color: white; margin-left: 10px;">Número: ${index + 1}</span>
                </div>`;
    }).join('');
    document.getElementById("cliente").innerHTML = filaDisplay
}