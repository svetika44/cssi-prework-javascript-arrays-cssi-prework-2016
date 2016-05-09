'use strict';

function createArray(newArray) {
  var newArray = ["snickers", "hundred grand", "kitkat", "skittles"];
  return newArray;
}

function addElementToArray(newArray) {
  var newArray = ["Home Alone", "Love Actually", "Elf"];
  newArray.push ("A Christmas Story");
  return newArray;
}

function accessThirdElementFromArray(newArray) {
  var newArray = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  console.log(newArray[4]);
  return newArray;
}


function replaceElementInArray(newArray) {
  var newArray = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  newArray[3] = "Carter"
  return newArray;
}


function removeElementFromArray(newSecondArray) {
  var newArray = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  var newSecondArray = newArray.splice(4,2,'Roast Chicken');
  return newSecondArray;
}


function iterateArray(newArray) {
  var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  newArray.forEach(function(newNums);
    console.log (newNums+5);
  return newArray;
}







