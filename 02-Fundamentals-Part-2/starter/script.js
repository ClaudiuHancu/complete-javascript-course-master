`use strict`;

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log(`I can drrive :D`);
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = `Audio`;
// const private = 534;


function logger() {
    console.log(`My name is Jonas`)
}
// calling / running/ invoking function
logger();
logger();
logger();

function fruitProcesor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
    return juice;
}
const appleJuice = fruitProcesor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcesor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`);

//fuction declaration

function calcAge1(birtYear) {
    return 2037 - birtYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function calcAge1(birtYear) {
    return 2037 - birtYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



//Arrow function
const calcAge3 = birtYear => 2037 - birtYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birtYear, firstName) => {
    const age = 2037 - birtYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1980, `Bob`));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcesor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges. `;
    return juice;
}
console.log(fruitProcesor(2, 3));

const calcAge = function (birtYear) {
    return 2037 - birtYear;
}

const yearsUntilRetirement = function (birtYear, firstName) {
    const age = calcAge(birtYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} is alredy retired  🎉`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike`));



const calcAvearge = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAvearge(44, 23, 71);
const scoreKoalas = calcAvearge(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const ceckWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆(${avgDolphins} vs.${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆(${avgKoalas} vs.${avgDolphins})`);
    } else {
        console.log(`No team win the game....`)
    }
}
ceckWinner(scoreDolphins, scoreKoalas);
ceckWinner(576, 111);

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const yearsu = new Array(1991, 1984, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`
console.log(friends);

const firstName = `Jonas`;
const jonas = [firstName, `Schmetmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge = function (birtYear) {
    return 2037 - birtYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = [`Michael`, `Steven`, `Peter`];

//Add elements
const newLenght = friends.push(`Jay`);
console.log(friends);
console.log(newLenght);

friends.unshift(`John`);
console.log(friends);

//Remove elements
friends.pop();   // last
const popped = friends.pop();
console.log(popped)
console.log(friends);

friends.shift() //first
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steve`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Peter`)) {
    console.log(`You have a friend called Peter`);
} else {
    console.log(`Peter is not your friend`)
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips);
console.log(totals);


const jonasArray = [
    `Jonas`,
    `Schemedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];


const jonas = {
    firstName: `Jonas`,
    lastName: `Schemedtmann`,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas[`lastName`])

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

const interestedIn = prompt(`What do you want to know about Jonas?Choose between firstName,lastName, age,job and friends`);
console.log(interestedIn);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName,lastName, age,job and friends`);
}
jonas.location = `Portugal`;

console.log(`${jonas.firstName}  has ${jonas.friends.length}  friends and his best friend is called ${jonas.friends[0]}`);


const jonas = {
    firstName: `Jonas`,
    lastName: `Schemedtmann`,
    birtYear: 1991,
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriverLicence: true,

    // calcAge: function (birtYear) {
    //     return 2037 - birtYear;
    // }

    //     calcAge: function () {
    //         // console.log(this)
    //         return 2037 - this.birtYear;
    //     }
    // };

    calcAge: function () {
        this.age = 2037 - this.birtYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicence ? `a` : `no`} driver's licence `
    }
};

// jonas.calcAge(1991);


console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// console.log(jonas[`calcAge`](1991));

// `Jonas is a 46-years old teacher, and he has a driver licence`

console.log(`${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he has ${jonas.hasDriverLicence ? `a` : `no`} driver's licence`)

console.log(jonas.getSummary());


const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
const john = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`);
} else {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`);
}


// console.log(`LIfting weights repetition 1 🏋️‍♂️`);
// console.log(`LIfting weights repetition 2 🏋️‍♂️`);
// console.log(`LIfting weights repetition 3 🏋️‍♂️`);
// console.log(`LIfting weights repetition 4 🏋️‍♂️`);
// console.log(`LIfting weights repetition 5 🏋️‍♂️`);
// console.log(`LIfting weights repetition 6 🏋️‍♂️`);
// console.log(`LIfting weights repetition 7 🏋️‍♂️`);
// console.log(`LIfting weights repetition 8 🏋️‍♂️`);
// console.log(`LIfting weights repetition 9 🏋️‍♂️`);
// console.log(`LIfting weights repetition 10 🏋️‍♂️`);


//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`LIfting weights repetition ${rep} 🏋️‍♂️`);
}



const jonas = [
    `Jonas`,
    `Schemedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log(`-------------ONLY STRINGS---------`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== `string`) continue;


    console.log(jonas[i], typeof jonas[i]);
}

console.log(`-------------BREAK WITH NUMBER---------`)
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === `number`) break;


    console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
    `Jonas`,
    `Schemedtmann`,
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`],
    true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`LIfting weights repetition ${rep} 🏋️‍♂️`);
// }


let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE:LIfting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end....`);
}
*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));