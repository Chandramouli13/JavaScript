
Loop
// Iterate over the array as well as print the series

for
// while and do while not use much
while    
do while
for Of   > cannot be used to print the series // Use only dealing with array.
for each > mainly used for taking the array  // Use only dealing with function.
for in   > discuss in objects

/////////////////////////////////////////////////////////////////////////
// for
for(variable;condition;increment)

// Example
for(i=0;i<5;i++){
    console.log(i)
}
// basically it prints the series of 5.
// output
>> 0
   1 
   2
   3
   4 
// 

for(i=0;i<10;i++){
    console.log(i)
}
>>0
  1
  2
  3
  4
  5
  6
  7
  8
  9
// 

// for Loop to array iteration
var a = ['Delhi','Mumbai','Hyderabad','Chennai','Pune','Kochi']
for(i=0;i<a.length;i++){
    console.log(a[i])
}
// output
>>Delhi
  Mumbai
  Hyderabad
  Chennai
  Pune
  Kochi
// 

// for loop to Nested Array 
var city = ['Delhi', 'Mumbai',['Red','Yellow','Green'], 'Hyderabad', 'Chennai']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city.length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}
// output
>>Delhi
 Mumbai
 Red
 Yellow
 Green
 Hyderabad
 Chennai
// 

///////////////////////////////////////////////////////////////////////////////
// while - first we specify the condition then check and print

var i = 0;
while(i<5){              // check condition and 
    console.log(i);      // print
    i++
}
// output
>>0
 1
 2
 3
 4
// 

// first it check the condition
// so, it prints nothing
var i = 10;
while(i<5){
    console.log(i);
    i++
}
// output
>> undefined


///////////////////////////////////////////////////////////////////////////////
// do while - first print and check the condition

var i = 0;
do{
    console.log(i);  //print and
    i++
}
while(i<5)         // check the condition
// output
>>0
 1
 2
 3
 4
//

// first  print i and check the condition
// so, it prints 10
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)
// output
>> 10

///////////////////////////////////////////////////////////////////////////////////
// for of 

// mycity is variable and city is array name
var city = ['Delhi','Mumbai','Hyderabad','Chennai','Pune','Kochi']
for(mycity of city){
    console.log(mycity)
}
// output
>>Delhi
  Mumbai
  Hyderabad
  Chennai
  Pune
  Kochi
//

///////////////////////////////////////////////////////////////////////////////////
// for each - whenever we want to pass value of array in the function

let add = 0;
let numbers = [10,34,56,23];

numbers.forEach(myFunction)

function myFunction(data){
    add += data
}
// output
add
123




