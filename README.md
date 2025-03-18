# Amigo Secreto - Desafio Oracle ONE

Este projeto é parte do desafio da Oracle ONE e tem como objetivo fortalecer habilidades fundamentais em lógica de programação através de um aplicativo simples de sorteio de amigo secreto.

## 🔍 Funcionalidades
- Adicionar participantes para o sorteio.
- Sortear aleatoriamente um participante.
- Exibir o participante sorteado e removê-lo da lista para evitar duplicações.

## 🛠️ Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## 🚀 Como Utilizar

1. Clone este repositório:
```bash
git clone <URL_DO_REPOSITÓRIO>
```

2. Abra o arquivo `index.html` no seu navegador preferido.

3. Insira o nome dos participantes no campo disponível e clique em "Adicionar".

4. Após adicionar todos os participantes, clique em "Sortear" para descobrir o amigo secreto sorteado.

## 💻 Código JavaScript Principal

```javascript
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
  amigoSorteado.remove();
}
```

## 📌 Desafio
Este desafio faz parte do curso Oracle ONE e tem o objetivo de desenvolver o raciocínio lógico e aprimorar as habilidades práticas com JavaScript.

