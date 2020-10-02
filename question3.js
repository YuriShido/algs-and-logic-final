/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // change all strings is lower case.
    let lowCase = str.toLowerCase();
    
    //split word to change top of word to upper case.
    let splitWord = lowCase.split(' ')
    //change top of word to Uppercase 
    for(i = 0; i < splitWord.length; i++) {
        splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1)

    // } console.log(splitWord)
  
    // add it with kabab case
    }
    let join = splitWord.join('-');
    // return join;
     return join;

    // write a condition if it's empty string, return 'This is an empty string!'
    if(str === null) {
        return 'This is an empty string!'}
    
};

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

console.log((kebabCase('Coding Is Fun')));
