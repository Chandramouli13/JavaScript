
// we have extends keyword in es6.

class geo {
    // all the declaration
    constructor(name, country){
        this.lat = 43.22;
        this.lon = 32.98;
    }
    
}


class language extends geo{
    // all the declaration
    constructor(name, country){
        super()      //////  important to add super()
        this.name = name;
        this.country = country;
    }
    greet = () => {return `Say Hi to ${this.name}`}
}

var French = new language ('French', 'France')

// output
French
>> language{lat: 43.22, lon: 32.98, name: 'French', country: 'France', greet: ƒ}
