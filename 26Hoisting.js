a = 10;
var b = 20;

console.log(add(a,b));

function add(a,b) {
    return a + b;
}

var a;
// output
30
// How we got 30 as output because javaScript pick the code as like this:
// JavaScript will execute like this:
var a;
var b;
function add(a,b) {
    return a + b;
}

a = 10;
b = 20;
console.log(add(a,b));
// This is what exactly called "Hoisting"
// In whichever way we write our code or even called the function before declaring it.
// it will work. 


// but in other programming languages it gives error like: the application will break because
// you are calling function before declaring and .....declaration is not done..so..on..

// but in JavaScript or Python it will not break because
// we have the concept of "Hoisting"