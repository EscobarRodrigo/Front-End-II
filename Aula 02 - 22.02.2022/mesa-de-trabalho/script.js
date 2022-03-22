var nome = prompt("Qual seu nome completo?");
var telefone;
let whats;

if (nome == "") {

    while (nome == "") {
        alert("É obrigatório preencher o nome!");
        nome = prompt("Qual seu nome completo?");
    }
}

telefone = prompt("Qual seu Telefone?");

if (telefone == "") {

    while (telefone == "") {
        alert("É obrigatório preencher o telefone!");
        telefone = prompt("Qual seu Telefone?");
    }

}

whats = confirm("Esse número é whats?");
console.log(whats)

alert("Muito obrigado" ${nome}, "um de nossos consultores entrará em contato contigo através do número" ${telefone});

console.log(nome: ${nome}, Telefone: ${telefone}, "aceita receber mensagem por WhatsApp:" ${whats});