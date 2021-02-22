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
*/

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
    friends: [`Michael`, `Peter`, `Steven`]
};


