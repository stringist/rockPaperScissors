"use strict";

// backslashes to 'escape', retain formatting/text without starting or stopping a string
console.log("\u{1f385}");

console.log("\\");

// line break
const longline = " wow such an extremely \n very very very very very very very very long line";

console.log(longline);

// Template Literals: accent grave ``

const name = "Peter";
const drink = "Pepsi";

// with backticks
console.log(`Hello ${name}, would you like a ${drink}?`);

// with classic concatenation
console.log("Hello " + name + ", would you like a " + drink + "?");

// or as variable after others are declared
const text = `Hello ${name}, would you like a ${drink}?`;

console.log(text);

// backticks also allow line-breaks without escaping!

// const firstName = "Peter";
// const petSpecies = "cat";
// const petName = "Mandu";

// console.log(`My name is ${firstName}.
// I have a ${petSpecies} called ${petName}.`);

const firstName = "Kalle";
const petSpecies = "dog";
const petName = "Tapio";

console.log(`My name is ${firstName}.
I have a ${petSpecies} called ${petName}.`);