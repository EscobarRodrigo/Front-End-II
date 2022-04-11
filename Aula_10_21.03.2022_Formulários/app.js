
// 1. Seleção do formulário
var formulario = document.querySelector("formularioDeCadastro");

//2. Seleção do campo

var campoTelefone = document.getElementById("telefone");

// 3. Captura o evento de envio do formulário e disparar a rotina
formulario.addEventListener("submit", function (evento) {

    // Captura o valor do input
    var telefoneSemTratamento = evento.target[0].value;

    // facilitadores: s, D, W *** 
    //s= espaço (remove os espaços) 
    //somente D= somente números (remove as letras,caracteres inseridas) 
    //W= somente letras (remove os números)
    //02 parâmetros > 1º informação do usuário e 2º o que defini = quero receber a informação

    // Removi os espaços 
    var telefoneSemEspacos = telefoneSemTratamento.replace(/\s/g, "");
    

    // Removi os caracteres especiais e letras
    var telefoneApenasNumeros = telefoneSemEspacos.replace(/\D/g, "");

    //

    var textoMinusculo = telefoneSemTratamento.toLowerCase();
    var textoMaisculo = telefoneSemTratamento.toUperCase();

    
    // Apresento o valor a partir de um popup alert()
    alert(telefoneApenasNumeros); // Removi os caracteres especiais e letras
    alert(telefoneSemEspacos);   // Removi os espaços 
    
});