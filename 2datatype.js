

/////////// Semicolon is not compulsory in JavaScript its our wish ////////////////


/// Boolean
var a = true;    
var b = false;

true = 1    ///// true is equal to 1
false = 0   ///// false is equal to 0

//output
a + b   // true + false = 1  // 1 + 0 = 1
1
a - b   // true - false = 1 // 1 - 0 = 1
1
a * b   // true * false = 0  // 1 * 0 = 0
0
a / b   // true / false = Infinity  // 1 / 0 = Infinity
Infinity    ///////// Anything divide by zero is Infinity
b / a   // false / true = 0  // 0 / 1 = 0
0
a % b   // true % false = NaN // 1 % 0 = NaN
NaN

// Examples  (true=1 and false=0)
10 + true 
11
10 - false
10
20 - true
19
10 / false
Infinity

/// But if Boolean is in String quotes, then
"true" + "true"
>> 'truetrue'
"true" - "true"
>> NaN
"false" + "false"
>> 'falsefalse'
"false" - "false"
>> NaN
'true' + `false`
>> 'truefalse'
"true" - "flase"
>> 'truefalse'


/////////// Convert a String of number or a string into number we use : /////////////
////  parseInt  - Number in quotes converts to a number
////  parseFloat  - Decimal in quotes converts to a number
////  Number - In es6 we use this function to convert its easy to use.

/// Examples: how to convert a number of a string into a number
// parseInt
var a = "10"
var b = "1"
// output
a + b
'101'
parseInt(a)
10
parseInt(b)
1
parseInt(a) + parseInt(b)
11

// parseFloat
var a = "62.234"
var b = "32.765"
// output
parseFloat(a)  
62.234
parseFloat(b)
32.765
parseFloat(a) + parseFloat(b)
94.999


///////// important Logic ////////////

var a = "123Delhi"
var b = "Delhi123"
// Try this
parseInt(a) 
parseInt(b) 

// output
parseInt(a)
123
parseInt(b)
NaN

/// If the value is starting number till the point its gets number
//  "123Delhi" - 123
/// If the value is starting with string(Characters) by default NaN
// "Delhi123" - NaN

/// Examples
var a = "123Delhi456"
var b = "Delhi123456"
// output
parseInt(a)   // only starting number 123 takes
123
parseInt(b)   // starting with String (Delhi) by default NaN
NaN


////////////////////////// es6 //////////////////////////////////////////

/// Same like parseInt & parseFloat only here we use Number() in es6 ///
var a = "10.32"
var b = "214.342"
var c = "20"
// output
Number(a)   // converts string into number
10.32
Number(b)   
214.342
Number(c)
20

//// Difference with Number() is if anywhere encounters the String by default NaN
var a = "123Delhi456"    // here, Number with String using Number() function we get NaN
var b = "Delhi123456"
// output
Number(a)    // 123Delhi456 - Number & String gives NaN
NaN
Number(b)    // String(Delhi) encounters with number(123456) - Delhi123456 - NaN
NaN
