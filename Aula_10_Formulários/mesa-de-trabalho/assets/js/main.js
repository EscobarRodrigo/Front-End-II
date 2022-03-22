
// 1. Selecione o formulário
var formulario = document.querySelector("#formularioDeCadastro");

// 2. Crie da rotina que será disparada a partir do evento de envio

//Seleção do campo
var  campo = document.querySelector("c-form__campo");
// console.log(campo);

var inputUsuario;

formulario.addEventListener("submit", function (evento) {

inputUsuario = evento.target[0].value;
    // console.log(inputUsuario);


    // 2.1. Remova todos os números permitindo apenas texto
    
    var inputusuarioSemNúmeros = inputUsuario.replace(/[^a-zA-Z]+/g,"")
    // console.log(inputusuarioSemEspacos);

// 2.2. Remova todos os espaços vazios
    var inputusuarioSemEspacos = inputUsuario.replace(/\s/g, "")
    // console.log(inputusuarioSemEspacos);

    alert(inputUsuario);
    alert(inputusuarioSemEspacos);
    alert(inputusuarioSemNúmeros); //(/[^a-zA-Z]+/g,"")


});

// 3. Capture o evento de envio do formulário e disparar a rotina

var listaDeCadastro = document.querySelector(".c-lista__item")
listaDeCadastro.innerText = inputUsuario;






//HUGO

// // 1. Selecione o formulário
// var formulario = document.getElementById('formularioDeCadastro');

// // 2. Crie da rotina que será disparada a partir do evento de envio
// var valorInput = document.querySelector('.c-form__campo');
// formulario.addEventListener('submit', (event) => {
//     console.log(valorInput.value);

//     var valorInputDigitado = event.target[0].value;

//     console.log(valorInputDigitado);
// })
