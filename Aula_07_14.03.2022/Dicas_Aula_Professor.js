// 1. Selecionar os elementos do HTML

var campo = document.querySelector(".campo");

var botao = document.querySelector(".botao");

// 2. Criar uma Rotina (função) à ser executada;
function adiocionarOuRemoverAtributoDisable (){

    //Guardar o valor digitado pelo usuário...
    var valorDoCampo = campo.value;
    console.log (valorDoCampo);

    // Condicional...
    //if, se for valor VAZIO

    if (valorDoCampo == "") {
    //Adiocinar atributo disable
    botao.setAttribute("disable", true);
    }
    //else
    else {
        //Remove atributo disable
botao.removeAttribute("disable");
    }
}

//3. A rotina acontecerá a partir de um evento do usuário;

// campo.addEventListener("change",function() {
//     console.log("Alteração no campo...");
// });

campo.addEventListener("change", adiocionarOuRemoverAtributoDisable ());

//Expressões Regulares (REGEX)
//Serve para realizar testes; ou seja, se eu quero validar que o usuário só possa digitar texto / data / número e etc...ou se o usuário digitar o CPF sem os pontos, posso customizar para que seja mostrado os pontos durante a digitação.

