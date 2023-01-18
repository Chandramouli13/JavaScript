
// we have two scopes - Global Scope and Local Scope
// If we want the output takes from inside the scope (local) then we need to refer as (this) keyword to the object.
// (this) keyword refers in the same scope

// Global 
let firstName = "Michael"
let lastName = "Jackson"

// local - {} curly brackets create the scope
let sayHi = {
    firstName: 'Peter',
    lastName: 'Parker',
    greet:function(){
        return `Say Hi to ${firstName} ${lastName}`;
    }
}

console.log(sayHi.greet())

// output
>> Say Hi to Michael Jackson
// If the code is like this by default it takes from the global scope
// The output takes from the input of global scope


/////////////// this ///////////////
// Global 
let firstName = "Michael"
let lastName = "Jackson"

// local - {} curly brackets create the scope
// sayHi is the object 
let sayHi = {
    firstName: 'Peter',
    lastName: 'Parker',
    greet:function(){
        return `Say Hi to ${this.firstName} ${this.lastName}`;
    }
}

console.log(sayHi.greet())

// output
>> Say Hi to Peter Parker
// The output takes from the input of local scope

