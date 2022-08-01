let errorParagraph = document.getElementById("error")

// create 2 variables, firstName and lastName
let firstName = "Jill"

let lastName = "Kaku"

// concatenate the two variables into third variable called fullName
let fullName = `${firstName} ${lastName}`

// log fullName to the console
console.log(fullName)


let name = 'Linda!'
let greeting = 'Hi there,'

// create a function that logs out the message

function greetLinda(){
    let message = `${greeting} ${name}`
    console.log(message);
}
greetLinda()

// increment and decrement
let myPoints = 3

// create 2 functions, add3points() and remove1point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints +=3;
}

function remove1Point(){
    myPoints -=1; 
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
// call the function to that line below logs out 10
console.log(myPoints)

// strings and numbers
// predict what each of the lines will log out
console.log("2" + 2) //"22""
console.log(11 + 7) //18
console.log(6 + "5") //"65"
console.log("myPoints: " + 5 +9) //"myPoints: 59"
console.log(2 + 2) //4
console.log("11" +"14") //"1114"


// rendering an error message

// when the user clicks the purchase button, render out
// "sth went wrong, please try again" in the paragraph
// that has id = 'error
function purchase(){
    console.log('button clicked')
    errorParagraph.textContent = "something went wrong, please try again"
}

// calculator challenge
let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById('sum-el')

// create a function: add(),subtract, divide(), multiply
// call the correct function when the user clicks on one of the buttons
// perform the given calculation using num1 and num2
// render the results of the calculation in the paragraph with id="sum-el"

// e.g if the user clicks on the "plus" button, you should render
// "sum: 10" inside the paragraph with id = "sum-el"
function add(){
    let results = num1 + num2;
    sumEl.textContent = "Sum: " +results;
}
function subtract(){
    let results = num1 - num2;
    sumEl.textContent = "Sum: " +results;
    
}
function divide(){
    let results = num1 / num2;
    sumEl.textContent = "Sum: " +results;
}
function multiply(){
    let results = num1 * num2;
    sumEl.textContent = "Sum: " +results;
}
add()