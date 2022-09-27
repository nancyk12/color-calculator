const prompt = require('prompt-sync')({sigint: true});
let colorDecision = prompt('Thank you for choosing to use the WDI 101 Color Calculator. Please choose \n combine (c) \n or deconstruct (d): ');
console.log(`You chose: ${colorDecision.toLowerCase()}.`)

// If they choose to combine colors start here
if (colorDecision === "c"){
let color1 = prompt("Please choose your first color to combine: (red, blue, yellow:) ");
console.log(`You chose: ${color1.toLowerCase()}`);
let color2 = prompt("Please choose your second color to combine: (red, blue, yellow) ");
console.log(`You chose: ${color2.toLowerCase()}`);
if (color1 === "red" && color2 === "blue")
console.log("Your color combination is purple!");
if (color1 === "red" && color2 === "yellow" )
  console.log("Your color combination is orange!");
if(color1 === "blue" && color2 === "yellow" )
  console.log("Your color combination is green!");
if (color1 === "blue" && color2 === "red")
console.log("Your color combination is purple!");
if (color1 === "yellow" && color2 === "red" )
  console.log("Your color combination is orange!");
if(color1 === "yellow" && color2 === "blue" )
  console.log("Your color combination is green!");

// If participant chooses deconstruct the following takes place
} else if(colorDecision === "d"){
let color3 = prompt("Please choose your color to deconstruct: (purple, orange, green:) ");
console.log(`You chose: ${color3.toLowerCase()}`);
if (color3 === "purple")
console.log("Your color combination red and blue!");
if (color3 === "orange")
console.log("Your color combination red and yellow!");
if (color3 === "green")
console.log("Your color combination blue and yellow!");
} else {
  console.log("Failed here");
}


