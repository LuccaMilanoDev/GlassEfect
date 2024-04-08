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
      return `<div style="display: flex; align-items: center;
      background: rgba( 255, 255, 255, 0.25 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 0px );
      -webkit-backdrop-filter: blur( 0px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18)
      ; padding: 10px; margin-bottom: 5px; border-radius: 10px">
        <div style="display: flex; align-items: center;">
            <span style="color: white;">${cliente.nome}</span>
        </div>
        <p>--</p>
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: ${cliente.cor};">
        <span style="color: white; margin-left: 1px;">${index + 1}</span></div>
    </div>`;
    })
    .join("");
  document.getElementById("cliente").innerHTML = filaDisplay;
}
