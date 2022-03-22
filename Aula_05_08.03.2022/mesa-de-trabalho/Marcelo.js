//1. Selecione via JavaScript o elemento `<section id="carrinho">"` e guarda informação em uma variável.

var secaoCarrinho = document.querySelector("#carrinho");
//2. Crie um elemento `<ul>`.
var elementoUL = document.createElement("ul");

//3. Adicione a classe **`lista`** ao elemento `<ul>`.
elementoUL.classList.add("lista");

//4. Adicione o elemento `<ul>` no elemento `<section id="carrinho">"`.
secaoCarrinho.appendChild(elementoUL);

//5. Crie cinco elementos `<li>`.
var liCarros = document.createElement("li");
var liBike = document.createElement("li");
var liPatinete = document.createElement("li");
var liCelular = document.createElement("li");
var liCarregador = document.createElement("li");

//6. Adicione a classe **`lista__item`** ao elemento `<li>`.
liCarros.classList.add("lista__item");
liBike.classList.add("lista__item");
liPatinete.classList.add("lista__item");
liCelular.classList.add("lista__item");
liCarregador.classList.add("lista__item");

//7. Adicione texto a cada `<li>` conforme o trecho de código disponibilizado a seguir.

var textoCarro = document.createTextNode("Carros");
liCarros.appendChild(textoCarro);
var textoBike = document.createTextNode("Bike");
liBike.appendChild(textoBike);
var TextoPatinete = document.createTextNode("Patinete");
liPatinete.appendChild(TextoPatinete);
var TextoCelular = document.createTextNode("Celular");
liCelular.appendChild(TextoCelular);
var TextoCarregador = document.createTextNode("Carregador");
liCarregador.appendChild(TextoCarregador);

//8. Adicione os cinco elementos `<li>` no elemento `<ul>`.
elementoUL.appendChild(liCarros);
elementoUL.appendChild(liBike);
elementoUL.appendChild(liPatinete);
elementoUL.appendChild(liCelular);
elementoUL.appendChild(liCarregador);



