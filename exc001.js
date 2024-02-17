// Getting Started Exercises with TypeScript and Node.js

// QUES-1:
document.querySelector("#ques1").innerHTML = "Hello, World.";
console.log("Hello, World.");

// QUES-2:
let personName = "Aasif";
let message = "hello everyone, let's learn some coding today.";
console.log(personName +": " + message);
document.querySelector("#ques2").innerHTML = personName +": " + message;

// QUES-3:
let personName2 = "Aasif Ali Noonari.";
// Lower-case
console.log(personName2.toLowerCase());
// Upper-case
console.log(personName2.toUpperCase());
// Title-case
//  Can't do it
document.querySelector("#ques3").innerHTML = 
`lower-cas: ${personName2.toLowerCase()} <br> 
upper-case: ${personName2.toUpperCase()} <br>
title-case: Can't do.`;

// QUES-4:
let ans4 = `Voltaire once said, "When it is a question of money, everybody is of the same religion."`
console.log(ans4);
document.querySelector("#ques4").innerHTML = ans4;

// QUES-5:
let famous_person = "Votaire";
let message2 = '"When it is a question of money, everybody is of the same religion."';
let ans5 = `${famous_person} once said, ${message2} `
console.log(ans5);
document.querySelector("#ques5").innerHTML = ans5;

// QUES-6:
let personName3 = "     Aasif Ali Noonari.   "
console.log(personName3);
console.log(personName3.trim());
document.querySelector("#ques6").innerText = personName3;

// QUES-7:
