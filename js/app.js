let firstNumber = Number(prompt("say me your number"))
let operation = prompt("what are you doing")
let secondNumber = Number(prompt("say me your number"))

let="result";

if( operation == "+"){
    result=firstNumber+secondNumber
}
else if( operation == "-"){
    result=firstNumber-secondNumber
}
else if( operation == "*"){
    result=firstNumber*secondNumber
}
else if( operation == "/"){
    result=firstNumber/secondNumber
}
alert(result)