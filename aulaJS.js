var num = 1
//conseguimos redeclarar o var a qualquer momento
//let text = 'texto'
const boolean = true


console.log
//imprime no log do navegador qualquer coisa que eu queira

//var
var num = 1

console.log(num)

var num = 5

console.log(num)

//let 
// o let é parecido com o var, mas tem que ser declarado em um outro escopo
let text = 'texto'

console.log(text);

{
    let text = 'outro texto'
    console.log(text)
}

//RunTime - erro que acontece qndo o código tá rodando
//CompileTime - erro que acontece qndo o código tá compilando

console.log(num, num)
console.log(num + num)
console.log(num + text)
console.log(num + boolean)
console.log(num, boolean)
console.log(num + "" + text)
console.log(num + text * boolean)
console.log(`text + ${num*num}`)

let stringNum = '25'

console.log( num + stringNum)

console.log( num * stringNum)

//Funções

function printMyName() {
    console.log(`Alicia`);
}

//Passando um parâmetro para a função

function printMyName(nome){
    console.log(nome);
}

//Passando mais de um parâmetro para a função
function printOtherName (nome, idade){
    console.log(`Meu nome é ${nome}, e minha idade é ${idade}`)
    console.log(nome+idade);
}

printMyName('Alicia')
printMyName('Vitória')
printMyName('Guiradelo')

printOtherName('Alicia', 22)
printOtherName(22, 'Alicia')

//Pergunta de entrevista: Me explica o que é hosting

//Função anônima ou Arrow Function
_ => {
    console.log("esta é minha arrow function");
}

//Podemos colocar essa função anônima dentro de uma variável
let  arrow = (nome,idade) => {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos`);
    console.log(nome+idade)
}

//console.log(calcWithReturn(calcWithReturn(5,10), 'Pedro'));

//Laços (estrutura) de repetição
//1. do while
do {
    console.log('Teste = ', num)
    num--
} while (num>0)

//2. for
for (i = 5; i > 0; i--){
    console.log(i)
}

//3. interação dentro de uma lista utilizando o for
var list = [1,2,3,4]

//i é uma palavra reservada, se refere ao index
for (i in list){
    console.log(i)
}

//dessa forma imprime o valor do item da lista e não o seu índice (posição)
for (i in list){
    console.log(list[i])
}

var list = [0, 'Cavalo', true]

= atribuição
== comparação
=== comparação de valor e tipo

"" é falso