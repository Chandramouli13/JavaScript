
// ES5

Inheritance
// The property is not mine but i'm able to accessing the value from the other element - "Inheritance"
// basically refer as getting the property from the parent class.
// Example: Being a child of a parent, child directly have access to his parent car.
//  but it is not child car. child can use his parent car.


// we have prototype keyword in es5.

function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name,country){
    this.name = name;
    this.age = 10;
    this.country = country;
}

// output

var Anand = new human ('Anand','Venice')
undefined
Anand
human{name: 'Anand', city: 'Venice'}

// prototype is a keyword to access the properties
human.prototype = new robot ('Anand','France')
robot{name: 'Anand', age: 10, country: 'France'}

var Anand = new human ('Anand','Paris')
undefined
Anand
human{name: 'Anand', city: 'Paris'}

Anand.country
'France'
Anand.age
10
