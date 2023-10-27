function soma(){
    var a = 10
    var b = 10
    console.log(a + b)
}

function soma(a, b){
    console.log(a + b)
}
//a primeira função vai ter o resultado NaN por houve uma sobrecarga de método que o sistema não permite
//soma()
//soma(10,15)

//A Arrow function pode ser usada como varivável
const soma = () => {
    console.log('teste')
}

function functionWithCallback (callback){
    callback(10,15)
}

functionWithCallback(soma)

