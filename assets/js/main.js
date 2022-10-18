//setting of first variable
//about NAME

let name = prompt('write your name');

//just check it

console.log(name);

//setting of second variable
//about LAST-NAME

let lastname = prompt('write your lastname');

//check

console.log(lastname);

//setting of third variable
//about FAVOURITE COLOR

let favourite_color = prompt('write your fovourite color');

//check

console.log(favourite_color);

//setting of constant
//about a NUMBER

const number = '89';

//check

console.log(number);

//password generator
//now, we'll get the html's element, for inset it the resolt of js function

document.getElementById('password').innerHTML = `La tua Password insicurissima è: ${name + lastname + favourite_color + number}`