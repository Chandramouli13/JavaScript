
// ES5
// from 23objectfunction.js
// function language(name,country) {
//     this.name = name;
//     this.country = country;
//     this.greet = () => {return `Say Hi to ${name}`}
// }
// // we are creating object from this function Hindi
// var Hindi = new language('Hindi', 'India')


// ES6

// constructor - where all the declaration happens
// A constructor is first thing they get called inside the class.

class language {
    // all the declaration
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    greet = () => {return `Say Hi to ${this.name}`}
}

var French = new language('French', 'France')

// output
French
>> language{name: 'French', country: 'France', greet: ƒ}
French.greet()
>> 'Say Hi to French'
