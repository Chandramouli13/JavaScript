
///// if else ////////
if(condition){
     // statement
}else{
     // statement
}

///////////////// if & else condition//////////////////
var a = 10;
if (a%2 == 0){
    console.log(`Number ${a} is even` )
}else{
    console.log(`Number ${a} is odd` )
}
// output
// Number 10 is even

// Examples
var a = 20;
if (a%2 == 0){
    console.log(`Number ${a} is even` )
}else{
    console.log(`Number ${a} is odd` )
}
// output
// Number 20 is even

var a = 20.123;
if (a%2 == 0){
    console.log(`Number ${a} is even` )
}else{
    console.log(`Number ${a} is odd` )
}
// output
// Number 20.123 is odd

var a = 15;
if (a%2 == 0){
    console.log(`Number ${a} is even` )
}else{
    console.log(`Number ${a} is odd` )
}
// output
// Number 15 is odd



/////////////////// else if condition ///////////////////
if(condition){
     // statement
}else if(condition){
     // statement
}else if(condition){
     // statement
}else{
     // statement
}

/// To check multiple conditions/////

var uname = "Nikita"
if(uname == "Amit"){
    console.log(`${uname} is admin`)
}else if(uname == 'Mansi'){
    console.log(`${uname} is super admin`) 
}else if(uname == 'Aakash'){
    console.log(`${uname} is user`)
}else{
    console.log(`${uname} is unknown`)
}
// output
// Nikita is unknown

// Examples
var uname = "Amit"
if(uname == "Amit"){
    console.log(`${uname} is admin`)
}else if(uname == 'Mansi'){
    console.log(`${uname} is super admin`) 
}else if(uname == 'Aakash'){
    console.log(`${uname} is user`)
}else{
    console.log(`${uname} is unknown`)
}
// output
// Amit is admin

var uname = "Mansi"
if(uname == "Amit"){
    console.log(`${uname} is admin`)
}else if(uname == 'Mansi'){
    console.log(`${uname} is super admin`) 
}else if(uname == 'Aakash'){
    console.log(`${uname} is user`)
}else{
    console.log(`${uname} is unknown`)
}
// output
// Mansi is super admin

var uname = "Aakash"
if(uname == "Amit"){
    console.log(`${uname} is admin`)
}else if(uname == 'Mansi'){
    console.log(`${uname} is super admin`) 
}else if(uname == 'Aakash'){
    console.log(`${uname} is User`)
}else{
    console.log(`${uname} is unknown`)
}
// output
// Aakash is User


//////////////// Nested if  condition /////////////////////
var uname = "Nikita"
var role = "Admin"

if (role == "Admin"){
    if (uname == "Amit"){
        console.log(`${uname} is admin`)
    }else{
        console.log(`${uname} is not an admin`)
    } 
}else if(role == "User"){
    if(uname == "Nikita"){
        console.log(`${uname} is User`)
    }else{
        console.log(`${uname} is not a User`)
    }
}
// output
// Nikita is not an admin

var uname = "Nikita"
var role = "User"

if (role == "Admin"){
    if (uname == "Amit"){
        console.log(`${uname} is admin`)
    }else{
        console.log(`${uname} is not an admin`)
    } 
}else if(role == "User"){
    if(uname == "Nikita"){
        console.log(`${uname} is User`)
    }else{
        console.log(`${uname} is not a User`)
    }
}
// output
// Nikita is User



///////////////// Ternary operator //////////////////////
///////// Single line if else /////////

// If the condition before the ?(question mark) is true, then the first part will run :(else) second part will run.
condition ? if condition is true : if condition is false

var a = 10;
a == 10 ? "Hii" : "Bye"
// output
'Hii'

var a = 10;
a > 10 ? "yes" : "no"
// output
'no'

var a = 10;
a > 10 ? a+1 : a-1
// output
9

var a = 10;
a == 10 ? a+1 : a-1
// output
11
 

