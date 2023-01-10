"use strict";

// VARIABLES

let dayOfWeek = "Monday"

console.log(dayOfWeek)

dayOfWeek = 'Friday'

console.log(dayOfWeek)

dayOfWeek = "I can't wait for Friday!"

console.log(dayOfWeek)
// USER iNPUT

let animalInput = prompt("What is your favorite animal?")

let colorInput = prompt("What is your favorite color?")

let responseOne = 'red'
let responseTwo = 'Dog!'

let response = "I've never seen a"
let space = ""

space += response + " " + responseOne + " " + responseTwo;

console.log(space)

// CONDITIONALS

let timeOfDay = 1900
let meal = ["Eggs and Hot Cheetos", "Turkey Melt", "Steak and Mashed Potatoes"]


if (timeOfDay < 1200) {
    console.log("Eggs and Hot Cheetos")
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
    console.log("Turkey Melt")
}
else (timeOfDay < 1700);{
    console.log("Steak and Mashed Potatoes")
}

// RANDOM NUMBER

let ranNum = Math.floor(Math.random() * 11)
if (ranNum > 0 && ranNum < 3) {
    console.log ("Beatles")
} else if (ranNum > 3 && ranNum < 6) {
    console.log("Stones")
} else if (ranNum > 6 && ranNum < 8) {
    console.log("Floyd")
} else (ranNum > 8 && ranNum < 11) ;{
    console.log("Hendrix")
}

// FOR LOOPS

// TASK 1
for (let i = 0; i < 7; i++) {
    console.log("JavaScript is cool!")
}

// TASK 2

for(let i = 0; i < 11; i++){
    console.log(i)
}

// TASK 3


for (let i = 0; i < 5; i++) {
    console.log("Hello" + '\n' + "Goodbye " + i + '\n')
}

// FUNCTIONS 
// TASK 1: FAVORITE MOVIE

// let fNf = "Tokyo Drift"
// console.log(fNf)

function printMovieName(){
   let fNf = 'Tokyo Drift';
   console.log(fNf);  
}

printMovieName()

// TASK 2: FAVORITE BAND

function favBand(){
    let numOne  = prompt("Enter your favorite band.")
    return numOne
}
let result = favBand()
console.log(result)

// TASK 3: CONCERT(parameters)

function concertDisplay(muscialAct){
    let myStreet = prompt('Please enter the street you live on.')
    let combined = ('It would be great if ' + muscialAct + ' ' + 'played a show on' + ' ' + myStreet)
    return combined
}
let myEvent = concertDisplay("musicalAct")
 console.log(myEvent)

//  ('It would be great if ' + {concertDisplay} + 'played a show on' + {myStreet})

//  ARRAYS

// TASK 1: DesktopItems

let desktopItems = ['Speakers', 'Remote', 'Camera']

console.log(desktopItems[1])

desktopItems.push('Infinity Gauntlet')

for (let i = 0; i < desktopItems.length; i++){
	console.log(desktopItems[i])
}

for (let i = 0; i < desktopItems; i++){
    console.log(desktopItems[i])
}