

//window.alert ("Aula 03 - Manipulando DOM")

// var nome = "Rodrigo";
// window.nome;


// **DOCUMENT**



// ** Quando usado o console.log, ele RETORNA somente a ID que eu definir**

// console.log(document.getElementById("primeiro"))


var segundoItem = document.querySelector("#segundo")

// console.log(segundoItem); // retorna o elemente HTML

var todosComClassItem = document.querySelectorAll(".item");

console.log(todosComClassItem);

//----------------------------------------


// 2.Manipular elementos selecionados.

//retorna o filho desse elemento
primeiroItem.innerText = "Primeiro Item"
// retorna como se fosse uma váriavel// 

segundoItem.innerHTML = "<h1>Segundo Item </h1>";

console.log(todosComClassItem[2]);
todosComClassItem[2].innerText = "Terceiro Item";