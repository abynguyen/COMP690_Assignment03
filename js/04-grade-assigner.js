// The “Grade Assigner” Application
// Usage: Use else if or switch statements
// 1.	Collect the a number between 1 and 100 from the user.
// 2.	Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// 3.	If the score is between 60 and 69, write out “You received a D” into the console.
//      If the score is between 70 and 79, write out “You received a C” into the console.
//      If the score is between 80 and 89, write out “You received a B” into the console.
//      If the score is between 90 and 100, write out “You received an A” into the console.
//      If the score is less than 60, write out “You received an F” into the console.

let userInput

main()

function main(){
    getInput()

    if(userInput >= 60 && userInput <=69){
            console.log("You received a D")
    } else if(userInput >= 70 && userInput <=79){
            console.log("You received a C")
    } else if(userInput >= 80 && userInput <=89){
            console.log("You received a B")
    } else if(userInput >= 90 && userInput <=99){
            console.log("You received a A")
    } else if(userInput < 60){
            console.log("You received an F")
    } else{
            console.log("Default")
    }
}

function getInput(){
    userInput = prompt("Enter a number between 1 and 100: ")

    if (userInput < 1 || userInput > 100){
        alert("Invalid number entered. You must enter a number between 1 and 100.")

        getInput()
    }
}
