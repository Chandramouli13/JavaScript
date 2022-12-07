
// What is ECMAScript ?
// European Computer Manufacturers Association Script.

// es5
// > Ecma Script 5

// es6
// >Ecma Script 6

//  JavaScript is Case sensitive like email  
// John@gmail.com  john@gmail.com both are not same John & john
///////////////////

//DataTypes: JavaScript mainly support (Three different data types)

String >>> "Hii" 'Hello' '10' "true" `Test` "10hi$"

Number >>> 10 72344543 234.4363 .2352515

Boolean >>> true  false


//es5
//To declare a variable we use (var)
var a = 10
var b = "Hi"
var c = true

//Output
a
10
b
'Hi'
c
true

//inbuilt method in javascript is (typeof)
typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'

var d = "20"
typeof(d)
'string'
var e = `test`
typeof(e)
'string'
var f = 10.234124
typeof(f)
'number'

///////////////// Numbers //////////////////

//Basic math operations
var a = 10
var b = 20
//output
a+b (addition) // numbers
30
a-b
-10
b-a
10
a*b
200
a/b
0.5
b/a
2
a%b
10

// Decimals
var a = 10.124
var b = 20
//output
a + b
30.124000000000002
a - b
-9.876
a * b
202.48000000000002
a / b
0.5062
b / a
1.9755037534571314
a % b
10.124

//Modulus operations
2%4   /////// The number which is less than other number 
>> 2
3%4  /////// will gives the remainder 
>> 3
4%4   
>> 0 

//////////////// Strings /////////////////

var a = "Hii"
var b = "JavaScript"
//output
a 
'Hii'
b
'JavaScript'
a + b   (concatenation(concat)) //string concatenation
'HiiJavaScript'
a - b    // String - String = NaN (Not a Number)
NaN
a * b
NaN
a/b
NaN
b/a
NaN
a%b
NaN

//////////////// String and number ///////////////
var a = "Hii"
var b = 10
//output
a + b
'Hii10'  //string concatenation
a - b    // String - number also = NaN (Not a Number)
NaN

///////// Simple Logic for String and number
String + String = String  //"hii" + "Script" = "hiiScript"
String + number = String  //"hii" + 10  = "hii10"
number + String = String  //20 + "hello" = "20hello"
number + number = number  //30 + 30 = 60


// Examples
"10"+20+30
10+"20"+30
10+20+"30"
//output
"10"+20+30
>> '102030'

10+"20"+30
>> '102030'

10+20+"30"
>> '3030'

// lets Understand it
"10"+20+30 
"10"+20     /// String + number = String  
"1020"+30   /// String + number = String
"102030"    /// completely String

10+"20"+30  
10+"20"     /// number + String = String  
"1020"+30   /// String + number = String
"102030"    /// completely String

10+20+"30"
10+20       /// number + number = number (addition)
30+"30"     /// number + String = String
"3030"      /// completely String  


// Another Example with Subtraction
"10"+20+30-1
10+"20"+30-1
10+20+"30"-1
//output
"10"+20+30-1
>> 102029

10+"20"+30-1
>> 102029

10+20+"30"-1
>> 3029

// lets understand it
///////// (Except addition) because addition gives us String
"10"+1  // string concatenation
>> 101
/////////  Any Number with Quotes that gives us number as output like (Subtracting,Multiplying,Dividing e.t.c.)
//example: number in quotes(Number with String) gives us number but if:
"10a"-1  /// :it contains "10a" is String with Character and number = NaN
NaN
"hi"-1   // "hi" is String with character
NaN
"10"-1   // "10" is number with quotes = 10 (number)
9
"5"*"2"   // "5"*"2" = 5*2 = 10
10
"10"/"3"  // "10"/"3" = 10/3 = 3.33
3.3333333333333335

// so 
"10"+20+30-1
"102030"-1   // "102030"-1 = 102030 -1 = 102029
102029

10+"20"+30-1
"102030"-1   // "102030"-1 = 102030-1 = 102029
102029

10+20+"30"-1
30+"30"-1  
"3030"-1     // "3030" -1 = 3029
"3029"


