
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
var inputUsuarioSemNúmeros = inputUsuario.replace(/[^a-zA-Z]+/g,"")
// console.log(inputusuarioSemNúmeros);

// 2.2. Remova todos os espaços vazios
var inputusUarioSemEspacos = inputUsuario.replace(/\s/g, "")
// console.log(inputusuarioSemEspacos);

alert(inputUsuario);
alert(inputUsuarioSemEspacos);
alert(inputUsuarioSemNúmeros); //(/[^a-zA-Z]+/g,"")

// var listaDeCadastro = document.querySelector(".c-lista__item")
// listaDeCadastro.innerText = inputUsuario;

});

// 3. Capture o evento de envio do formulário e disparar a rotina

var listaDeCadastro = document.querySelector(".c-lista__item")
listaDeCadastro.innerText = inputUsuarioSemNúmeros;
campo.value = '';
preventDefault();






//HUGO

// var formulario = document.querySelector('#formularioDeCadastro');

// function rotina(event){

//     var valorInputDigitado = document.querySelector('.c-form__campo');
//     var valorInputSemEspacos = valorInputDigitado.value.replace(/\s/g, '');
//     var valorInputSemNumeros = valorInputSemEspacos.replace(/\d/g, '');
    
//     var listaCadastrados = document.querySelector('.c-lista__item'); 
//     listaCadastrados.innerText = `Último item adicionado: ${valorInputSemNumeros}`;
//     valorInputDigitado.value = '';
//     event.preventDefault();
// }

// document.addEventListener('submit', (event) => {
//     rotina(event); 
// });

