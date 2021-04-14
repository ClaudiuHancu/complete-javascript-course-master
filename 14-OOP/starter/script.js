'use strict';
/*
const Person = function (firstName, bithYear) {
  //   Instance Propreties
  this.firstName = firstName;
  this.bithYear = bithYear;

  //never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.bithYear);
  //   };
};

const jonas = new Person(`Jonas`, 1991);

// console.log(jonas.bithYear);
//1. New {} is created
//2. function is called, this= {}
//3. {}linked to prototype
//4. function automacaly return {}

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
console.log(matilda, jack);

const jay = `Jay`;
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
Person.key = function () {
  console.log(`Hey there 🙋‍♂️🙋‍♂️🙋🏿‍♂️🙋‍♀️! `);
  console.log(this);
};
Person.key();

//Prototype

Person.prototype.calcAge = function () {
  console.log(2037 - this.bithYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = `Homo Sapiens`;
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty(`firstName`));
console.log(jonas.hasOwnProperty(`species`));
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 5, 4, 9, 7, 11, 3, 8, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelearate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car(`BMW`, 120);
const mercedes = new Car(`Mercedes`, 95);
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.accelearate();
bmw.accelearate();
bmw.accelearate();
mercedes.accelearate();
mercedes.accelearate();
mercedes.accelearate();
mercedes.accelearate();

//Class expresion
// const PersonCl = class {};

//Class declaration

class PersonCl {
  constructor(fullName, bithYear) {
    this.fullName = fullName;
    this.bithYear = bithYear;
  }
  calcAge() {
    console.log(2037 - this.bithYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.bithYear;
  }
  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log(`Hey there 🙋‍♂️🙋‍♂️🙋🏿‍♂️🙋‍♀️! `);
    console.log(this);
  }
}
const jessica = new PersonCl(`Jesica Davis`, 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();
PersonCl.hey();

//1.Classes are not hoisted
//2. Class are first-class citizen
//3. Classes are executed in scrict mode
const walter = new PersonCl(`Walter Smith`, 1965);
console.log(walter.fullName);
const account = {
  owner: `Jonas`,
  mouvements: [200, 530, 120, 300],
  get latest() {
    return this.mouvements.slice(-1).pop();
  },

  set latest(mov) {
    this.mouvements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

console.log(account.mouvements);
console.log(Array.from(document.querySelectorAll(`h1`)));


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

steven.name = `Steven`;
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1979);
sarah.calcAge();


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


const Person = function (firstName, bithYear) {
  this.firstName = firstName;
  this.bithYear = bithYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.bithYear);
};

const Student = function (firstName, bithYear, course) {
  Person.call(this, firstName, bithYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); //Linking Prototypes

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student(`Mike`, 2020, `Computer Science`);
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      } `
    );
  }
}

const martha = new StudentCl(`Martha Jones`, 2012, `Computer Science`);
console.log(martha);
martha.introduce();
martha.calcAge();
StudentCl.hey();


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init(`Jay`, 2010, `Computer Science`);
jay.introduce();
jay.calcAge();


//1) Public fields
//2) Private Fields
//3) Public Methods
//4) Private Methods
// (thereis also the static version)
class Account {
  //Public fields
  locale = navigator.language;

  //2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  //3) Public Methods

  //PUBLIC INTERFACE
  getMouvents() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approuveLoan(val)) {
      this.deposit(val);
      console.log(`Loan ${val} approved`);
      return this;
    }
  }
  static helper() {
    console.log(`Help!`);
  }
  //4) Private Methods
  // #approuveLoan(val) {
  _approuveLoan(val) {
    return true;
  }
}
const acc1 = new Account(`Jonas`, `EUR`, 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(150);

console.log(acc1.pin);
acc1.requestLoan(12);
console.log(acc1);
// console.log(acc1.#pin);
console.log(acc1.getMouvents());
// console.log(acc1.pin);
console.log(acc1._approuveLoan(100));
Account.helper();

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMouvents());

const balanta = acc1
  .getMouvents()
  .reduce((acc, curentValue) => acc + curentValue);

console.log(balanta);
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
