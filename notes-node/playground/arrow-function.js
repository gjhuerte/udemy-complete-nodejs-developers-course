var square = (x) => {
    var result = x * x;
    return result;
};

// var square = (x) => x * x;
// var square = x => x * x;

var user = {
    name: 'Gabriel',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
};

user.sayHi();   
user.sayHiAlt();
user.sayHiAlt(1, 2, 3);
