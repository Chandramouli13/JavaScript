
//  JavaScript has two scopes - Global and Local
// >> local   - whatever we refer inside the local scope or curly brackets 
// >> global  - whatever we refer outside the local scope or curly brackets 
// >> Enclose something

// here, by default the function make a closure. {} curly brackets make a closure.
var a = 10;           // global - whatever is refer outside the local scope or curly brackets
                      // here, variable a is declared outside the scope{}. a is accessible everywhere.
function add() {      // add will print because it is function.  By default the function make a closure.
    var b = 20        // here, variable b will not print because b is defined inside the function.
                      // scope of b got restricted inside the function. b is not accessible as it is inside the scope.
    return a + b
}

console.log(">>>>a",a)
console.log(">>>>add",add())
console.log(">>>>b",b)

// output
>>>>a 10
>>>>add 30
Uncaught ReferenceError: b is not defined
    at <anonymous>:9:21

////////

///// lets try with loop ////////

var a = 10;   // global 
for(i=0;i<5;i++){     // {}not making a closure.
    var b = 20;    // here, b is also accessible because of the var.
                    // here, if we use let then b wont be accessible.
    console.log(a+b+i)
}

console.log(">>>>a",a)
console.log(">>>>b",b)

// output
30
31
32
33
34
a 10
b 20


var a = 10;   // global 
for(i=0;i<5;i++){     // {}not making a closure.
    let b = 20;       // here, if we use  let then b wont be accessible.              
    console.log(a+b+i)
}

console.log(">>>>a",a)
console.log(">>>>b",b)

// output
30
31
32
33
34
>>>>a 10
Uncaught ReferenceError: b is not defined
    at <anonymous>:8:21
