"use strict";

// alert("Hello");
// const con = confirm("Are you here?");
// console.log(con);

// const answer = +prompt("Вам есть 18?", 16);  
// console.log(answer + 5);

// const mas = [];

// mas[0] = prompt("СКолько вам лет?", '');
// mas[1] = prompt("СКолько вам?", "");
// mas[2] = prompt("как вас зовут?", "");

// const category = 'toyyys';
// console.log(`https://someurl.com/${category}/5`)

const eur = 0.011;
const usd = 0.012;
const gbp = 0.0090;

const request = +prompt("Enter rub to convert to eur, usd, gbp:", 100);

let solutionEur = (request * eur).toFixed(4);
let solutionUsd = (request * usd).toFixed(4);
let solutionGbp = (request * gbp).toFixed(4);

console.log(`Result: ${request}rub = ${solutionEur}eur, ${request}rub = ${solutionUsd}usd, ${request}rub = ${solutionGbp}gbp`);
