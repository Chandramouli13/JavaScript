
var a = 10
var b = 20
a+b
30


// function is keyword 
// name of function (parameters)

// syntax: 
keyword nameoffunction(take parameters){
    return values
}

// writing function ////// es5 //////
function add(a,b){
    return a+b
}
// calling function
add(1,2)
// output
3

// Examples
add(4,8)
12
add(12,12)
24
add(1,8,6) /// we are calling only 2 parameters (1,8)
9

/// calling 3 parameters
function add(a,b,c){
    return a+b+c
}
// output
1+2+3
6

//////////// es5 ///////
function isEven(userInput){
    let out;
    if(userInput%2 == 0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}
// output
isEven(5)
'Number 5 is odd'
isEven(10)
'Number 10 is even'


///////////// es6 /////////
// writing function ////// es5 //////
function add(a,b){
    return a+b
}

// writing function (Arrow function(=>)) ////// es6 //////
let addLogic = (a,b) => {return a+b}
addLogic(6,6)
// output
12

addLogic(12,8)
20