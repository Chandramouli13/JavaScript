
// all the conditional operators always return boolean output (true/false).

=    // assignment
==   // compare the data
===  // compare the data and datatype

var a = 10  // assignment
var b = "10"
var c = 20
var d = 10

a == b  // 10 == "10"  its true // it compare the data - 10=10
true
a == c  // 10 == 20 its false - 10 is not equal to 20
false

a === b   // it compare the data and datatype  // 10 === "10"  datatype(false)
false     // 10 === "10" -> Number === String -> false
a === c   
false

a == d
true
a === d
true

var e = true
var f = 1

e == f   // true(1) = 1 => true
true
e === f  // true is not equal to 1 => false => checks data and datatype 
false

// Examples of greater than,less than,not equal to,greater than or equal to, less than or equal to...
10 > 5
true
5 < 10
true
10 < 20
true
10 != 20
true
10 >= 5
true
10 <= 20
true
10 <= 5
false

// Negation operator //
// To reverse the input using !(exclamation) //
var a = true;
!a             /// !a -> opposite of a
false         /// a is true & !a is false.
var a = false;
!a
true

var a = 1  // all conditional operators return boolean output (true/false)
!a
false

var a = 0
!a
true

var a = -1
!a
false

var a = "Hii"
!a
false

////////////////// Important ///////////////////
/////// truthy & falsy values/////////

truthy >> any number except 0 weather +ve or -ve, any String -> true
falsy  >> 0, false, null, undefined -> false