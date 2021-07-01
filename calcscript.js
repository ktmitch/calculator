

function clear() {
    var clearButton = document.getElementById("clear")
    clearButton.addEventListener('click', () => {
        document.getElementById("result-num").innerText = ""   
    }
    )
}

// var num = document.getElementsByClassName('button-num').innerText

function displayNum() {
    var numButtons = document.getElementsByClassName('button-num')

    for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', () => {
            console.log(numButtons[i].innerText)
            document.getElementById("result-num").innerText += numButtons[i].innerText
        }
        )
        
    }
    
}

let getNum = () => { //Arrow Function
    var displayValue = document.getElementById("result-num").innerText
    console.log
}

function useOperator() {
    var opButtons = document.getElementsByClassName('operator')
    var opButtonsLength = opButtons.length //For better performance
    let equal = document.getElementById('equal') 

    for (let i = 0; i < opButtonsLength; i++) {
        opButtons[i].addEventListener('click', () => { //Add Listener to all operator buttons
            var input = document.getElementById("result-num").innerText //Gets first input
            console.log("First number is " + input)
            
            document.getElementById("result-num").innerText += opButtons[i].innerText //Adds to Display
            
            var opOne = opButtons[i].innerText //Get Operator
            console.log("Operator is " + opButtons[i].innerText)


            
            equal.addEventListener('click', () => {


                var fullInput = document.getElementById("result-num").innerText.split(opOne) //Get Last input
                console.log("Input numbers are " + fullInput)
                var lastInput = fullInput.pop()
                console.log("Last number is " + lastInput)

                    
                console.log("Test")
                operate(parseInt(input), opOne, parseInt(lastInput))
                console.log("Test on Operate")
            })
        }
        )
        
    }
    
}

function add (num1, num2) {
    document.getElementById("result-num").innerText = num1 + num2
    console.log(num1 + num2)
}

function sub (num1, num2) {
    document.getElementById("result-num").innerText = num1 - num2
    console.log(num1 - num2)
}

function multi (num1, num2) {
    document.getElementById("result-num").innerText = num1 * num2
    console.log(num1 * num2)
}

function div (num1, num2) {
    document.getElementById("result-num").innerText = num1 / num2
    console.log(num1 / num2)
}

function operate(num1, operator, num2) {

    if (operator == "+") {
        add(num1, num2) 
    }
    else if (operator == "-") {
        sub(num1, num2) 
    }
    else if (operator == "x") {
        multi(num1, num2) 
    }
    else if (operator == "/") {
        div(num1, num2) 
    }
    else {
        console.log("Not valid")
    }
}

document.addEventListener('onload', clear())
document.addEventListener('onload', displayNum())
document.addEventListener('onload', useOperator())

