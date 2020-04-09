
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


(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);     // is private and hidden

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


// Closures => An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
                console.log(name + ', can you please expain what UX design is?');
        }
        else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + ' ?');
        } else {
                console.log('Hello ' + name + ', what do you do ? ');
            }
        }
}

interviewQuestion('teacher')('Jatin');


// Bind, Call and apply methods

var john = {
    name: 'John',
    age: 26,
    job: 'developer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m '+ this.name + ' and I\'m a' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }

};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// call method => allows us to set 'this' variable here in first argument and let us use john method on emily with other two args

john.presentation.call(emily, 'friendly', 'afternoon');

// apply method => similar to call method only difference is that takes 2 args ie one that sets this and other is array of args to pass

// john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind method => similar to call but instead makes a copy of function to use it somewhere

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');  

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');




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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);  
console.log(fullJapan);



// Coding Challenge 7


(function () {

    var Question = function (question, options, correct) {
        this.question = question;
        this.options = options;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        this.options.forEach((option, i) => {
            console.log(i + ': ' + option);
        });
    }

    Question.prototype.checkAnswer = function (ans) {
        if (this.correct === ans) {
            console.log('Correct answer!');
        } else console.log('Wrong Answer!');
    }

    var q1 = new Question('2 + 2', ['2', '4', '6'], 1);
    var q2 = new Question('2 - 2', ['2', '4', '0'], 2);
    var q3 = new Question('2 * 2', ['4', '2', '0'], 0);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * 3);

    questions[n].displayQuestion();

    var ans = parseInt(prompt('Enter answer: '));

    questions[n].checkAnswer(ans);
})();
*/


(function () {

    var Question = function (question, options, correct) {
        this.question = question;
        this.options = options;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        this.options.forEach((option, i) => {
            console.log(i + ': ' + option);
        });
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        if (this.correct === ans) {
            console.log('Correct answer!');
            sc = callback(true);

        } else {
            console.log('Wrong Answer!');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score: ' + score);
        console.log('-----------------------------------');
    }

    var q1 = new Question('2 + 2', ['2', '4', '6'], 1);
    var q2 = new Question('2 - 2', ['2', '4', '0'], 2);
    var q3 = new Question('2 * 2', ['4', '2', '0'], 0);

    function score() {
        var sc = 0;

        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var questions = [q1, q2, q3];

        var n = Math.floor(Math.random() * 3);
    
        questions[n].displayQuestion();
    
        var ans = prompt('Enter answer: ');
        
        if (ans !== 'exit') {
            questions[n].checkAnswer(parseInt(ans), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();