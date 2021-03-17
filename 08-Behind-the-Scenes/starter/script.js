'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      const firstName = `Steven`;
      const str = `Oh,and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //   let output = string;
      output = `NEW OUTPUT!`;
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = `Jonas`;
calcAge(1991);
// console.log(age)
// printAge();

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


// var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const self = this;
    // const isMilenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMilenial();
    //   },
    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldEge = age;
age = 31;
console.log(age);
console.log(oldEge);

const me = {
  name: `Jonas`,
  age: 30,
};
const friend = me;
friend.age = 27;
console.log(`Friend:`, friend);
console.log(`Me:`, me);
*/

let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Befor emarriage:`, jessica);
console.log(`Afeter emarriage:`, marriedJessica);

const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;

jessicaCopy.family.push(`Eva`, `Xena`);
console.log(`Befor emarriage:`, jessica2);
console.log(`Afeter emarriage:`, jessicaCopy);
