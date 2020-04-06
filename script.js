
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


// Primitive vs Objects

// Primitive
var a = 23;
var b = a;
a = 46;
console.log(a, b);


// Objects
//  Objects properties points to same location 
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



// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullages = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullages);
console.log(rates);




// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please expain what UX design is?');
        }
    }
    else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + ' ?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do ? ');
        }
    }
} 

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var randomQuestion = interviewQuestion('developer');

teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

randomQuestion('Jatin');
*/


// IIFE => Immediately invoked function expression

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);     // is private and hidden

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);