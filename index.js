//document.getElementById("count-el").innerText= 5;

// let count = 0;
// console.log(count);

// initialize count = 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked(log it out)
// change the count-el in the html to reflect the new count

let countEl =document.getElementById('count-el')
// grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')

let count = 0;

function increment(){
    count +=1;
    countEl.innerText =count
    console.log(count)
}

// create a function save() which logs out the count when it's called


function save(){

    // create an element that contains both the count and dash separator
    let countStr = count + " - "

    // render the variable in the saveEl using  innerText

    // innerText shows human readable lang
    // textContent return every element in html
    saveEl.textContent += countStr;
    // set element to zero after saving
    countEl.textContent = 0
    count = 0
}

console.log("let's count people from subway")


