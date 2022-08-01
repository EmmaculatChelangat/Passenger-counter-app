// create a variable, myAge, and set its value to your age
// log the myAge variable to the console
// let myAge = 21;
// console.log(myAge);

// create 2 variables, myAge and humanDog ratio
// multiply the two together and store the results in myDogAge
// log myDogAge to the console

// 1 human year = 7 dog year

let myAge = 21;
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

// create a variable, bonusPoints. Initialize it as 50. increase to 100
// decrease it down to 25, and finally increase it to 70
let bonusPoints= 50;
console.log(bonusPoints)

bonusPoints += 50;
console.log(bonusPoints)

bonusPoints -= 75;
console.log(bonusPoints)

bonusPoints += 45;
console.log(bonusPoints)

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()

// create a function that logs out the number 42 to the console
// invokes the function
function myFunc(){
    console.log(42)
}
myFunc();


// create a function that logs out the sum of all the lap times
let lap1 =34;
let lap2 = 33;
let lap3 = 36;


function logLapTime(){
    let totalTime = lap1+lap2+lap3;
    console.log(totalTime);
}
logLapTime();

// 
let lapsCompleted =0;
// create a function that increments the lapsCompleted variable with one
// Run it 3 times
function incrementLap(){
    lapsCompleted +=1;
}

incrementLap();

incrementLap();

incrementLap();
console.log(lapsCompleted);


// create a variable, message, that stores the string:
let username = "chelaa"
let message = "You have three new notification"
console.log(`${username}, ${message}`)

// create a variable, name and greeting and concatenate
// create third variable,my greeting that concatenate the 2 strings
let name = 'Jill'
let greeting = 'Hi, my name is'

let myGreeting = `${greeting} ${name}`

console.log(myGreeting)

// grab the welcome-el paragraph and store it in a variable called welcomeEl
// create 2 variables (name % greeting) that contains your name
// and the greeting we want to render on the page
// render the welcome message using welcomeEl.innerText

let welcomeEl = document.getElementById('welcome-el')

let name1 = 'Jill';
let greeting1 = "Welcome back, " 

welcomeEl.innerText = `${greeting1} ${name1}`

// add emoji
welcomeEl.innerText +=  ' emoji'