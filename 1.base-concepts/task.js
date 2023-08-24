"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - (4 * a * c);
  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant) ) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let totalAmount = (payment * countMonths).toFixed(2);
  return Number(totalAmount);
}