
//1. Selecione via JavaScript o elemento `<section id="carrinho">"` e guarda informação em uma variável.

var secaoCarrinho = document.querySelector("#carrinho");


//2.Criar um elemento (tags html)
var carrinho = document.createElement("ul");

//3. Adicione a classe **`lista`** ao elemento `<ul>`.
carrinho.classList.add("lista");

//4. Adicione o elemento `<ul>` no elemento `<section id="carrinho">"`.

secaoCarrinho.appendChild(carrinho);
//document.body.appendChild(carrinho)

//5. Crie cinco elementos `<li>`.
var liCarro = document.createElement("li");
var liBike = document.createElement("li");
var liPatinete = document.createElement("li");
var liCelular = document.createElement("li");
var liCarregador = document.createElement("li");

//6. Adicione a classe **`lista__item`** ao elemento `<li>`.
liCarro.classList.add ("lista__item");
liBike.classList.add ("lista__item");
liPatinete.classList.add ("lista__item");
liCelular.classList.add ("lista__item");
liCarregador.classList.add ("lista__item");

//7. Adicione texto a cada `<li>` conforme o trecho de código disponibilizado a seguir.

var textoCarro = document.createTextNode("Carros");
liCarro.appendChild(textoCarro);
var textoBike = document.createTextNode("Bike");
liBike.appendChild(textoBike);
var TextoPatinete = document.createTextNode("Patinete");
liPatinete.appendChild(TextoPatinete);
var TextoCelular = document.createTextNode("Celular");
liCelular.appendChild(TextoCelular);
var TextoCarregador = document.createTextNode("Carregador");
liCarregador.appendChild(TextoCarregador);

//8. Adicione os cinco elementos `<li>` no elemento `<ul>`.

carrinho.appendChild(liCarro);
carrinho.appendChild(liBike);
carrinho.appendChild(liPatinete);
carrinho.appendChild(liCelular);
carrinho.appendChild(liCarregador);








