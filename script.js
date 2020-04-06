
// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    jobs: 'developer'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'developer');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);




// Object.create method

var personProto = {
    calculateAge: function() {
        console.lgo(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'developer';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'developer'}
});
*/

// Primitive vs Objects

// Primitive
var a = 23;
var b = a;
a = 46;
console.log(a, b);


// Objects
/* Objects properties points to same location */
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;    // cerated a reference to same location
obj1.age = 30;
console.log(obj1.age, obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;     // doesnot change age
    b.city = 'Sans Francisco'       // changes city in obj
}

change(age, obj);

console.log(age);
console.log(obj.city);  