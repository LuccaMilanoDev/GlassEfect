let name = document.querySelector("#text")
let fila=[];

function addFila(){
    fila.push(name.value)
    console.log(fila)
}
function removeFila(){
    fila.shift()
    console.log(fila)
}