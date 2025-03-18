// case insensitively
// let text = " visit ";
// let pattern = /w3schools/i;
// let result = pattern.test(text);
// console.log(result);

let text1 = "IS this all there is?";

let pattern1 = /is/g; // it is going to check all the occurences
let result1 = text1.match(pattern1);
console.log(result1);

let text2 = "aaaabb"; // it match every text start with or end with aa or bb
let pattern2 = /(aa)(bb)/d;
let result2 = pattern2.test(text2);
console.log(result2);

let text3 = `
    Is 
    this
     all there 
    is
`;
let pattern3 = /is/m; //
let result3 = pattern3.test(text3);
console.log(result3);

let text4 = "Is this all there is?";
let pattern4 = /h/;
const result = text4.match(pattern4);

console.log(result);

let string = "har@sha";
let regex = /^[a-zA-z]+$/; // it is going to match the entire string
const result4 = regex.test(string);
console.log(result4);

let number = "12345";
let regex2 = /^[0-9]+$/;
const result5 = regex2.test(number);
console.log(result5);

let string2 = "abcd";
let regex3 = /[^abc]/; // it is going to check non characters of a,b,c
const result6 = regex3.test(string2);
console.log(result6);

let text = "re,green,red,green";
let regex4 = /(red|green)/;
const result7 = regex4.test(text);
console.log(result7);

// \w-  a word character including underscore
let text5 = "harsha_1";
let regex5 = /^[\w]+$/;
const result8 = regex5.test(text5);
console.log(result8);

// \W - non word characters

// \d - digit from 0-9
let text6 = "100 give 100";
let regex6 = /^[\d]$/;
const result9 = regex6.test(text6);
console.log(result9);

// \D - non digits
// \s - whitespace
let text7 = "  Is this all there is?";
let regex7 = /\S/g; // non white spaces
const result10 = regex7.test(text7);
console.log(result10);

let text8 = "HELLO, L0OK AT YOU";
let regex8 = /\bLO/g; // it is used to check start with L0
let regex9 = /\BLO/; // find the oocurence of LO not start with LO
const result11 = regex8.exec(text8);
const result12 = regex9.exec(text8);
console.log(result11);
console.log(result12);

let text10 = "Visit W3Schools.\0Learn Javascript.";
let pattern = /\0/; // it search for null character
const result13 = pattern.exec(text10);
console.log(result13);

// \n it search for newline character

let text11 = "Hell Wrld! Hell W3Schls!";
let pattern12 = /o+/g; // it is going to check globally, atleast one character
let pattern13 = /lo*/g; // it is going to check globally L followed by zero or more character
let pattern14 = /lo?/g; // it is going to check L globally followed by zero or one character
const result14 = text11.match(pattern12);
const result15 = text11.match(pattern13);
console.log(result14);
console.log(result15);

let text12 = "100, 10 or 100000?";
let pattern15 = /\d{4}/g; // a substring should contain the 4 digits
let pattern16 = /\d{3,4}/g; // a substring should contain the 3 to 4 digits
let pattern17 = /\d{3}/g; // a substring should contain atleast 3 digits
const result16 = pattern15.test(text12);
const result17 = pattern16.test(text12);
console.log(result16);
console.log(result17);
