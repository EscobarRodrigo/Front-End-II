
// 1. Criar o elemento que desejos adicionar ao DOM
var botao = document.createElement("button");

// 2. Criamos o texto que iremos adicionar ao elemento
var botaoTexto = document.createTextNode("Abrir um alerta");

// 3. Adicionamos o texto ao elemento como um nó de texto
botao.appendChild(botaoTexto);

//appenChild = NÓ = amarrando como filho um elemento ao outro.
// >> botao = objeto PAI
// >> botaoTexto = filho (NO)

// 4. Adicionamos o elemento que contém um nó de texto no DOM
document.body.appendChild(botao);

// 5. Adicionamos atributo(s) e valores ao elemento
// Neste exemplo adicionaremos uma url de destino
//botao.setAttribute("href", "https://www.google.com");

// 6. Podemos aproveitar e adicionar uma classe para estilizar o elemento
botao.classList.add("botao");


//Observações: 

// 7. Define qual tarefa você deseja realizar

// Funções = Rotina
function criarUmAlerta() {
    alert('Você clicou no botão...')
}
// mesma função, escrita de forma diferente//
var criarUmAlerta = function () {
    alert ("Você clicou aqui")
};


// Método = Acionar/Chamar
// criarUmAlerta();

// 8. Capturar um evento específico do elemento e executa a tarefa
botao.addEventListener('click', criarUmAlerta);

//9. Redirecionando usuário ao clicar no botão

var botaoRedirecionarPara = document.querySelector("#enviarPara");

botaoRedirecionarPara.addEventListener("click", function() {
    window.location.replace("https://www.google.com.br")
});

//Arrow function
// botaoRedirecionarPara.addEventListener("click", () =>  window.location.replace("https://www.google.com.br")
//);
