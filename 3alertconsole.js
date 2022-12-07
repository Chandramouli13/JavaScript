
alert    >>> Notification
console  >>> debugging
prompt   >>> to take input from user
confirm  >>> weather yes or no

/////////////////// alert - Notification ///////////////////
////  alert is used for only Notification purpose
alert("Form Submitted Successfully")
// output: it popups on screen with successful notification (Form Submitted Successfully)
/// The notification will popup on the screen when form is submitted.

// Examples
alert("404 error")
// Notification popup on screen with 404 error
alert("No slot left")
// Notification popup on screen with No slot left


/////////////////// confirm - yes or no (true or false) /////////////////
///// confirm is used for user decision to confirm or not 
////  confirms input from user either true or false

////  If user want to leave page it asks (Ok & Cancel) button popups on screen
// If user clicks Ok then true - the page will leave.
confirm("Do you want to leave")
true
// If user clicks Cancel then false - No change.
confirm("Do you want to leave")
false

/////// we can write using functions also ///////
var a = confirm("Do you want to leave")
// If user clicks Ok then variable a is true
a
true

var a = confirm("Do you want to leave")
// If user clicks Cancel then variable a is false
a
false


/////////////////// prompt - takes input from user /////////////////
//// The user gives his related information based on questions popups on screen
prompt("What is your name")  // input from user name - John -> when user clicks OK
'John'
prompt("What is your name")  // input from user name - null -> when user clicks Cancel
null
prompt("What is your name")  
'Stuart'
prompt("What is your age")   
'32' 

var age = prompt("whats your age")
//  here, input from user gave his age 23 so the variable age is 23.
age
'23'
////// If user clicks Cancel then variable is null  for any prompt //////



//////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = prompt("Enter First Value");
var b = prompt("Enter Second Value");
alert(a+b)
// output
a + b
'1010'
// its gives String so we need to convert into a Number
// we use :
alert(Number(a) + Number(b))
// Try this :
var a = prompt("Enter First Value");
var b = prompt("Enter Second Value");
alert(Number(a) + Number(b))
// output
// input from user gave first value as 10
// inout from user gave second value as 10
20   // 10+10 = 20


