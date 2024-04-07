let name = document.querySelector("#text");
let color = document.querySelector("#color");
let fila = [];

function addFila() {
  let cliente = {
    nome: name.value,
    cor: color.value,
  };
  fila.push(cliente);
}
function removeFila() {
  fila.shift();
  showClient();
}

function showClient() {
  let filaDisplay = fila
    .map((cliente, index) => {
      return `<div style="display: flex; align-items: center; backdrop-filter: blur(4px); padding: 10px; margin-bottom: 5px; border-radius: 10px">
        <div style="display: flex; align-items: center;">
            <span style="color: white;">${cliente.nome}</span>
        </div>
        <p>--</p>
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: ${cliente.cor}; margin-right: 10px;">
        <span style="color: white; margin-left: 1px;">${index + 1}</span></div>
    </div>`;
    })
    .join("");
  document.getElementById("cliente").innerHTML = filaDisplay;
}
