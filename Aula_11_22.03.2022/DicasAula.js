//1. Seleção do campo nome
var campoNome = document.querySelector('#nome');

/*
focus
blur
change
*/

//2 Captura o envento do campo nome
campoNome.addEventListener('change',function(evento){

    var valorCampoNome = evento.target.value.trim();
    //trim > remove os espaços antes e depois
    // alert(valorCampoNome)

    // Resultados de validação para apresentação das mensagens

    var campoEstaVazio = estaVazio(valorCampoNome);
    // var possuiMaisDeDezCaracteres

    //2.1 Valor do campo está vazio

    if (campoEstaVazio(valorCampoNome)) {
        console.log ('Está Vazio')
    }

    else if (possuiMaisDeDezCaracteres(valorDoCampoNome)){
        alert ('Você ultrapassou o limite de caracteres')
    }

    else if(possuiNumeros(valorCampoNome)){
        alert('Esse campo não permite o uso de números')
    }

    else if (possuiCaracteresEspeciais(valorDoCampoNome)){
        alert('Esse campo não permite o uso de caracteres especiais')
    }
    else {
        alert('Tudo ok, pode enviar!');
    }

    //2.2 Valor do campo possui números

    //2.3 Valor do campo possui caracteres especiais
    
    //2.4 Valor do campo possui mais de dez caracteres


});

//2.1 Valor do campo está vazio
function estaVazio(valorDoCampo) {

    var valorVazio = ""; 
    var respostaDaValidacao = valorDoCampo === valorVazio;
    return respostaDaValidacao;
}

//2.2 Valor do campo possui números
function possuiNumeros(valorDoCampo) {

    var expressaoRegular = /\d/g;
    //d = verifica os números/digitos
    //D = verifica tudo MENOS os números

    var respostaDaValidacao = expressaoRegular.teste(valorDoCampo);

    return respostaDaValidacao;


}

//2.3 Valor do campo possui caracteres especiais

function possuiCaracteresEspeciais(valorDoCampo) {

    var expressaoRegular = /[$#@%&*]/g;
    var respostaDaValidacao = expressaoRegular.teste

}

//2.4 Valor do campo possui mais de dez caracteres
function possuiMaisDeDezCaracteres(valorDoCampo) {

    var numeroDeCaracteresDoCampoValor = valorDoCampo.length;
    //comparação * limite de caracteres
    var limiteDeCaracteres = 10;
    
    var respostaDaValidacao = numeroDeCaracteresDoCampoValor > limiteDeCaracteres;

    return respostaDaValidacao;
}