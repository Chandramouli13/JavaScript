
Array 

// Array is a collection of homogeneous data as well as heterogeneous type

var a = ["hi","hello","Hey","test"]  // Array of string
var b = [,76,2,4,5,1,25,6,457,]  // Array of number
var c = [true, false, false, true,]  // Array of boolean

var a = ["hi",10,true,"test",2,13,false]

var city = ['Delhi','Mumbai','Hyderabad','Chennai']

// .length - Length of the array 
city.length
4

// city[] - read every character of array by using index number
var city = ['Delhi','Mumbai','Hyderabad','Chennai']
city[0]
'Delhi'
city[2]
'Hyderabad'
city[3]
'Chennai'
city[1]
'Mumbai'

// .indexOf('') - read index number by using index value 
var city = ['Delhi','Mumbai','Hyderabad','Chennai']
city.indexOf('Delhi')
0
city.indexOf('Hyderabad')
2
city.indexOf('Mumbai')
1
city.indexOf('Chennai')
3


////////////////////////////////////////////////////////////////////////////////////

// push('') - push will always add a new character to the end of the array
// push('') - add to the last
var city = ['Delhi','Mumbai','Hyderabad','Chennai']

city.push('Pune')
5         // length of array after we push / add a new character
city
(5) ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai', 'Pune']
// Pune is added at the end of the array
city.push('Kochi')
6         // length of array after we push / add a new character
city
(6) ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai', 'Pune', 'Kochi']
// Kochi is added at the end of the array



// pop() - pop always removes the last value/character of the array
// pop() - remove from the last
var city = ['Delhi','Mumbai','Hyderabad','Chennai']

city.pop()      // removes the last character
'Koxhi'   
city.pop()     // removes the last character
'Pune'    
city      // The last two character are removed
(4) ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai']

// Important question here for pop():
// pop('') number inside it won't remove that much characters
// pop('') will remove only the last character. 
//  it don't care of given number to remove.
city.pop(2)  // removes only one last character
'Chennai'
city
(3) ['Delhi', 'Mumbai', 'Hyderabad']
city.pop(3)   // removes only the last character
'Hyderabad'    // only Hyderabad is removed not 3 characters are removed
city
(2) ['Delhi', 'Mumbai']


/////////////////////////////////////////////////////////////////////////////
// unshift() and shift() are opposites of push() and pop()
push    > add value to the end of the array
pop     > remove the last value of the array
shift   > remove the first value of the array
unshift > add value in the beginning of the array 
/////////////////////////////////////////////////////////////////////////////

// shift() - remove the first value.
// shift() is vise versa / opposite to the pop()
var city = ['Delhi','Mumbai','Hyderabad','Chennai']

city.shift()   // removes the first character
'Delhi'
city
(3) ['Mumbai', 'Hyderabad', 'Chennai']

// unshift() - add value in the beginning of the array.
// unshift() is vise versa / opposite to the push()
city.unshift('Delhi')   // adds value in the beginning 
4
city
(4) ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai']


////////////////////////////////////////////////////////////////////////////////

// slice() in array - does not effect the original array
// splice() - is the only array that effects the original array

// Original array //
var city = ['Delhi','Mumbai','Hyderabad','Chennai','Pune','Kochi']

// slice()
city.slice(1)   // gives array without first value
(5) ['Mumbai', 'Hyderabad', 'Chennai', 'Pune', 'Kochi']
city.slice(2)    // gives array without first two values
(4) ['Hyderabad', 'Chennai', 'Pune', 'Kochi']

// if we say range the last index is not taken
city.slice(1,4)    // range from index of 1-4
(3) ['Mumbai', 'Hyderabad', 'Chennai']
city.slice(2,3)     // range from index 2-3
['Hyderabad']
city.slice(2,5)     // range from index 2-5
(3) ['Hyderabad', 'Chennai', 'Pune']
city.slice(0,2)     // range from index 0-2
(2) ['Delhi', 'Mumbai']

// if we say range -1,-2,.... removes last value
city.slice(0,-1)      // range from index 0 and -1
(5) ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai', 'Pune']
city.slice(2,-1)
(3) ['Hyderabad', 'Chennai', 'Pune']
city.slice(1,-1)
(4) ['Mumbai', 'Hyderabad', 'Chennai', 'Pune']
city.slice(1,-3)
(2) ['Mumbai', 'Hyderabad']

/////////////  After slice() - It does not affected the original array  ///////////////
city
(6) ['Delhi', 'Mumbai', 'Hyderabad', 'Chennai', 'Pune', 'Kochi']

///////////////////////////////////////////////////////////////////

// Original array //
var city = ['Delhi','Mumbai','Hyderabad','Chennai','Pune','Kochi']

// splice()
city.splice(startIndex,deleteCount,values)

city.splice(2,2)      // from index 2 it will remove two-2 values  
(2) ['Hyderabad', 'Chennai']      // remove 2 values from index number 2
city                 // from Hyderabad index 2 and removed 2 values Hyderabad & Chennai
(4) ['Delhi', 'Mumbai', 'Pune', 'Kochi']   

city.splice(2,1)   // remove 1 value from index number 2
['Hyderabad']
city
(5) ['Delhi', 'Mumbai', 'Chennai', 'Pune', 'Kochi']


var city = ['Delhi','Mumbai','Hyderabad','Chennai','Pune','Kochi']
// on index number 3 it does not remove any value and it added a new values. 
city.splice(3,0,'Amsterdam','London')
[]
city
(8) ['Delhi', 'Mumbai', 'Hyderabad', 'Amsterdam', 'London', 'Chennai', 'Pune', 'Kochi']

// on index number 2 it remove one value and it added a new value here, like replace the value.
city.splice(2,1,'Denmark')
['Hyderabad']
city
(8) ['Delhi', 'Mumbai', 'Denmark', 'Amsterdam', 'London', 'Chennai', 'Pune', 'Kochi']

///////////////////  After splice() - it affects the original array  /////////////////////////
city
(8) ['Delhi', 'Mumbai', 'Denmark', 'Amsterdam', 'London', 'Chennai', 'Pune', 'Kochi']


///////////////////////////////////////////////////////////////////////////////////////////////////
///////Important question ////////////////////

var c = ['a','b','c',1]
var d = [2,'e','f',5]
c+d

c+d       // Not the right way this is not array.
'a,b,c,12,e,f,5'
c.concat(d)         // correct way to combine the two array
(8) ['a', 'b', 'c', 1, 2, 'e', 'f', 5]


// check the given value is array or not.
var a = "hii"
var b = [1,2,3]
// Array.isArray() - checks and gives the output in boolean
Array.isArray(a)
false
Array.isArray(b)
true


// Nested array 
var a = ['Delhi','Mumbai',['Red',['Audi','Bmw','Mercedes'],'Yellow','Green'],'Hyderabad','Chennai']

// The number of values you go inside the number of square brackets are required = Nested array.
a[0]
'Delhi'
a[1]
'Mumbai'
a[2]
(4) ['Red', Array(3), 'Yellow', 'Green']
a[2][0]
'Red'
a[2][1]
(3) ['Audi', 'Bmw', 'Mercedes']
a[2][1]
(3) ['Audi', 'Bmw', 'Mercedes']
a[2][1][0]
'Audi'
a[2][1][2]
'Mercedes'
a[2][1][1]
'Bmw'


