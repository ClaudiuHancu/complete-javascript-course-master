
/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log(`Jonas`);
console.log(`23`);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = `jonas`
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let jawascriptIsFun = true;
console.log(jawascriptIsFun);

//console.log(typeof true);
console.log(typeof jawascriptIsFun);
//console.log(typeof 23);
//console.log(typeof `Jonas`);

jawascriptIsFun = `YES`;
console.log(typeof jawascriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = `programmer`;
job = `teacher`;

lastName = `Schmedtmann`
console.log(lastName);

//Math operarators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 este 2 la puterea 3 , 2*2*2

const firstName = 'Jonas';
const lastName = 'Scmedtmann';
console.log(firstName + ` ` + lastName);

//Asisignment operators
let x = 10 + 5;//x=15
x += 10; //x=x+10 =25
x *= 4;//x=x*4=100
x++;//x=x+1
x--;//x=x-1
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); //> ,<, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;//x=y=10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

Mark and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76m tall.
GOOD LUCK �


const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = `Jonas`;
const job = `teacher`;
const birthYear = `1991`;
const year = 2037

const jonas = "I'm " + firstName + `,a ` + (year - birthYear) + ` years old ` + job + `!`;
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);
console.log(`Just a regular string...!`);

console.log(`Strings with\n\
multiple\n\
lines`);

console.log(`Strings
multiple
lines`);


const age = 15;
const isOldEnought = age >= 18;

if (isOldEnought) {
    console.log(`Sarah can start driving license ✔`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



//Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �

The Complete JavaScript Course 6
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`);
}


//type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number(`Jonas`));
console.log(NaN);
console.log(typeof (NaN));

console.log(String(23), 23);

//type coercion
console.log(`I'm ` + 23 + ` years old`);
console.log(`I'm ` + String(23) + ` years old`);

console.log(`23` + `10` + 3);
console.log(`23` - `10` - 3);
console.log(`23` / `2`)
console.log(`23` > `18`);

let n = `1` + 1; //`11
n = n - 1;
console.log(n);


// 5 falsy values: 0, `` , undefined, null , NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 100;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You sould get a job`);
}

let height = 123;
if (height) {
    console.log(`YAY! Height is defined`)
} else {
    console.log(`Height is UNDEFINED`)
}

const age = `18`;
if (age === 18) console.log(`You just become a adult :D
    (strict) `);
if (age == 18) console.log(`You just become a adult :D
        (loose) `);

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
    console.log(`Cool! 23 is a amazing number!`)
} else if (favorite === 7) {
    console.log(`7 is also a coool Number`)
} else if (favorite === 3) {
    console.log(`3 is a cool number`)
} else {
    console.log(`Number is not3, 23 or 7`)
}

if (favorite !== 23) console.log(`Why is not 23`);
*/
