function add (num1, num2) {
    console.log(num1 + num2)
}

function sub (num1, num2) {
    console.log(num1 - num2)
}

function multi (num1, num2) {
    console.log(num1 * num2)
}

function div (num1, num2) {
    console.log(num1 / num2)
}

function operate(num1, operator, num2) {
    if (operator == "+") {
        add(num1, num2) 
    }
    else if (operator == "-") {
        sub(num1, num2) 
    }
    else if (operator == "*") {
        multi(num1, num2) 
    }
    else if (operator == "/") {
        div(num1, num2) 
    }
    else {
        console.log("Not valid")
    }
}