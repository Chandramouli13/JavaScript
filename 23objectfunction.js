
// calc is an object
// sum is a property and this property have function
// function assigned to the variable is called "method"
// sum property of function is assigned to the variable calc. = method 

let calc = {
    sum : function(a,b){return a + b},
    sub : (a,b) => {return a - b}
}
// output
calc.sum (6,8)
14
calc.sub (6,8)
-2

/////////////////////
// This is called Constructor notation of the object

function language(name,country) {
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}
// we are creating object from this function Hindi
var Hindi = new language('Hindi', 'India')
// output
Hindi
>> language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
>> 'Say Hi to Hindi'

var English = new language('English', 'USA')
// output
English
>> language {name: 'English', country: 'USA', greet: ƒ}
English.greet()
>> 'Say Hi to English'

var French = new language('French', 'France')
// output
French
>> language {name: 'French', country: 'France', greet: ƒ}
French.greet()
>> 'Say Hi to French'


////////////////////////////////

var english = new language('english','USA')
function language(name,country) {
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}
// output
english.greet()
'Say Hi to english'