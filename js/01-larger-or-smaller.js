// Larger or Smaller?
// Usage: Use simple conditional statements
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

let numOne
let numTwo
let largerNum

main()

function main() {
    getUserInput()

    getLargerNumber()

    alert("The larger number entered is: " + largerNum)
}

function getUserInput() {
    numOne = parseInt(prompt("Enter a number: "))
    numTwo = parseInt(prompt("Enter another number: "))

    if(numOne === numTwo){
        alert("Enter two different numbers.")

        getUserInput()
    }
}

function getLargerNumber(){
    if(numOne > numTwo){
        largerNum = numOne
    }else{
        largerNum = numTwo
    }
}