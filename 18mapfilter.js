
map > use to iterate over the array of element
    > it always return the same length of output as input array
    > it is use to apply the logics(add,sub,mul,div)


// it always return the same length of Array //    
// mul //
var a = [4,5,2,44,36,7,65,25,]
// a.map() = function
// a.map(() => {}) = callback function
a.map((data) => {return data*2})
// output
// Array is multiple of 2
[8, 10, 4, 88, 72, 14, 130, 50]

// div //
var a = [4,5,2,44,36,7,65,25,]
a.map((data) => {return data/2})
// output
// Array is divide by 2
[2, 2.5, 1, 22, 18, 3.5, 32.5, 12.5]

// add //
var a = [2,5,8,12,33,47,85,68,23]
a.map((data) => {return data+10})
// output
// Array is added with 10
[12, 15, 18, 22, 43, 57, 95, 78, 33]

// sub //
var a = [2,5,8,12,33,47,85,68,23]
a.map((data) => {return data-2})
// output
// Array is subtracted with 2
[0, 3, 6, 10, 31, 45, 83, 66, 21]

///// Example ///////
// map always return the same length of Array // 
var a = [2,5,8,12,33,47,85,68,23]
a.map((data) => {return data>20})
// map always return the same length of Array // 
// so, output is boolean
[false, false, false, false, true, true, true, true, true]


///////////////////////////////////////////////////////
// All the data will be stored in the <p></p> tag
var a = [4,5,6,3,2]
a.map((data) => {return `<p>${data*2}</p>` })
// output
['<p>8</p>', '<p>10</p>', '<p>12</p>', '<p>6</p>', '<p>4</p>']


//////////////////////////////////////////////////////////////////
// callback function
// when we write function inside the function then it is - callback function.
// basically we call them as - no name function
a.map()   // function
a.map(() => {})  // callback function




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

filter  > use to filter out the data
        > it may or may not return the same length of output as input array
        > filter only return those data for which output/condition is true.

// 

// filter only return those data for which output/condition is true.
var a = [4,5,2,44,36,7,65,25,55,78,99,112]
a.filter((data) => {return data>30})
// output
// return numbers above 30
[44, 36, 65, 55, 78, 99, 112]


///////////// Important question ////////////////////

var a = [-1,0,1,2,3]
a.map((data) => {return data*2})
// output
[-2, 0, 2, 4, 6]

// logic for filter
var a = [-1,0,1,2,3]
a.filter((data) => {return data*2})
// output
// logic is: 
// -1*2 = -2 (true) it returns - it multiples
// 0*2 = 0 (false) it won't return - 0 is not multiple
// 1*2 = 2 (true) it returns
// 3*2 = 3 (true) it returns
[-1, 1, 2, 3]
        