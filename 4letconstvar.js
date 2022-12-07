
// To declare a variable we use var
// and we have let & const also
var   >>> we can redeclare and reassign the variable 

////////////////// What is the Feature of ES6 ? /////////////////
////////////////// Answer : let & const ////////////////////
//// es6 ////  
let   >>> we cannot redeclare but we can reassign it
const >>> we cannot redeclare and we cannot reassign as well

///////////////
var a = 10
var a  >>>>>>>> declaration
a = 10 >>>>>>>> assignment

> var a = 10
> a
10
> var a = 20  // we can redeclare  
> a
20
> a = 30     // we can reassign
30


////////////////
> let b = 20
> b
20
> let b = 30      /// we cannot redeclare
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 30         /// we can reassign
30
> c = 30
30


////////////////
/// If you want variable whose value should not be change in any scenario
/// Then we use const - nobody can change value.
> const b = 20   // b is already taken & we cannot redeclare
Uncaught SyntaxError: Identifier 'b' has already been declared
> const c = 10
> c
10
> const c = 11    // we cannot redeclare
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11          // we cannot reassign
Uncaught TypeError: Assignment to constant variable.
