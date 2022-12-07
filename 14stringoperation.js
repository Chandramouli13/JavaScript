
var city = "amSTErDam"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9

// [] is not prefer in string operations 
// because [] is array.
city[0]
'a'
city[1]
'm' 

// city.charAt() or city.at() is mostly used
// ES6
// Does not work for -ve values
city.charAt(1)
'm'
city.charAt(-1)
''

// Index of -1,-2,-3.... works only on es6 using .at(-1)....
// works for - values as well
// ES6
city.at(1)
'm'
city.at(-1)
'm'
city.at(-2)
'a'

////////////////////////////////////////////////////////////////
//  JavaScript is Case sensitive like email  
// John@gmail.com  john@gmail.com both are not same John & john

var a = "John"
var b = "john"
// case sensitive
a == b
false

/////////////////////////////////////////////////////
// String  slicing // slice()

var city = "amSTErDam"
city.slice(1)    // takes from index(1)
'mSTErDam'
city.slice(3)    // takes from index(3)
'TErDam'
city.slice(2)    // takes from index(2)
'STErDam'
city.slice(2,5)     // range from index(2) to index(5) it won't consider index(5).
'STE'
city.slice(2,6)
'STEr'
city.slice(0,-1)    // -1 takes from last reverse right to left
'amSTErDa'
city.slice(2,-2)
'STErD'

///////////////////////////////////////////////////////
var city = "amSTErDam"
// we want this to like this Amsterdam
var city = "Amsterdam"

city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.at(0).toUpperCase() + city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRIs"
undefined
city.at(0).toUpperCase() + city.slice(1).toLowerCase()
'Paris'

////////////////////////////////////////////////////////////

// trim()  - is used to remove empty or extra space

var uname = " Nikita "

uname.length
8
uname.trim()  // trim() remove the spaces
'Nikita'
uname.trim().length
6

///////////////////////////////////////////////////////////

// replace() - wherever possible it replaces the first existence

var a = "i am learning JavaScript"
// JavaScript to be replaced with Js
a.replace('JavaScript','Js')
'i am learning Js'

var a = "JavaScript i am learning JavaScript"
// it replace only the first existing word
a.replace('JavaScript','Js')
'Js i am learning JavaScript'

//  if we want to replace all then, /word/g - g is global
a.replace(/JavaScript/g,'Js')
'Js i am learning Js'
// or, replaceAll('name','replaceName')
a.replaceAll('JavaScript','Js')
'Js i am learning Js'

///////////////////////////////////////////////////////////////

// split()

var url = "https://github.com/Chandramouli13/repositories"

url.split('/')
(5) ['https:', '', 'github.com', 'Chandramouli13', 'repositories']
url.length
46
url[url.length-1]
's'
let c = url.split('/')  // add function c to url 
undefined
c.length
5
c[c.length-1]
'repositories'

var a =['https:', '', 'github.com', 'Chandramouli13', 'repositories']
a.length
5
a[a.length-1]
'repositories'

////////////////////////////////////////////////////////////////////////

var a = "JavaScript i am learning JavaScript"
undefined
a.split(' ')   // able to spilt 
(5) ['JavaScript', 'i', 'am', 'learning', 'JavaScript']
let d = a.split(' ')
undefined
d.toString()   // able to make it string // toString - converts array to string
'JavaScript,i,am,learning,JavaScript'
d.toString().replaceAll(',',' ')  // able to bring back normal again
'JavaScript i am learning JavaScript'