//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  let lista = document.getElementById("listaAmigos");
  let item = document.createElement("li");
  item.textContent = amigo;
  lista.appendChild(item);
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  let lista = document.getElementById("listaAmigos");
  let amigos = lista.getElementsByTagName("li");
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").textContent =
    "O amigo sorteado foi: " + amigoSorteado.textContent;
  amigoSorteado.remove(); //fiz para que uma vez que o amigo foi sorteado ele seja removido da lista
}
