var uname = "Avengers"
var type = "Action"
var ind = "Hollywood"
var rating = 4.5

/// es5
var out = "An "+uname+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
// output
out
'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'

/// es6 we use `` (back ticks) inside that `${}` 
var out = `An ${uname} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
// output
out
'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'


// Examples
