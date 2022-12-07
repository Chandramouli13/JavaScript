var a = {}  // object
var b = []  // array

var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"

var movieName1 = "Romeo Juliet"
var movieRating1 = 4.9
var movieType1 = "Romantic"

// we can change the value of the object using Dot notation
// If we want to change 30 variables 
// instead of giving new variables use - Dot notation
var movie = {
    name: 'Avengers',
    rating: 4.5,
    type: 'Action',
}

typeof(movie)
'object'

// Dot notation - access the value of the object
movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'

// change the value of the object
movie.rating = 4.3
4.3
movie
{name: 'Avengers', rating: 4.3, type: 'Action'}

// added a new property
movie.lang = "English"
'English'
movie
{name: 'Avengers', rating: 4.3, type: 'Action', lang: 'English'}

// delete the property
delete movie.rating
true
movie
{name: 'Avengers', type: 'Action', lang: 'English'}

// we can add,delete,change/update the property
// This is called Dot notation.


// Similarly same to the square brackets

movie['name']
'Avengers'
movie['lang']
'English'
movie['type']
'Action'

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// for in loop

var movie = {
    name: 'Avengers',
    rating: 4.5,
    type: 'Action',
}

for(key in movie){
    console.log(key)
}
// output 
// we get all the keys
>>name
  rating
  type
// 

// if we want the values of key then,
for(key in movie){
    console.log(movie[key])
}
// output
// we get all the values of key
>>Avengers
  4.5
  Action
// 
