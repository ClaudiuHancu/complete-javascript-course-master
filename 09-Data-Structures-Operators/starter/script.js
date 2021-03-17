'use strict';
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


const question = new Map([
  [`question`, `What is the best programming language in the world?`],
  [1, `C`],
  [2, `Java`],
  [1, `JavaScript`],
  [`correct`, 3],
  [true, `Correct 🎉`],
  [false, `Try again`],
]);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


const rest = new Map();
rest.set(`name`, `Clasico Italiano`);
rest.set(1, `Firenze, Italy`);
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has(`categories`));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector(`h1`), `Heading`);
console.log(rest);
console.log(rest.size);
// rest.clear();
console.log(rest.get(arr));

////
const orderSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Rissoto`,
  `Pasta`,
  `Pizza`,
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has(`Pizza`));
console.log(orderSet.has(`Bread`));
orderSet.add(`Garlic Bread`);
orderSet.add(`Garlic Bread`);
orderSet.delete(`Risotto`);
// orderSet.clear();
console.log(orderSet);
for (const order of orderSet) console.log(order);

//Example
const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
);
console.log(staffUnique.length);

/////

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const values = Object.values(openingHours);
console.log(values);

//
const entries = Object.entries(openingHours);
// console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at${open} and close at ${close}`);
}


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day},we open at ${open}`);
}
//Metods
console.log(restaurant.order?.(0, 1)) ?? `Method does not exist`;
console.log(restaurant.orderRisotto?.(0, 1)) ?? `Method does not exist`;
//Array
const users = [{ name: `Jonas`, email: `hello@ho.com` }];
console.log(users[0].name ?? `User array empty`);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


console.log(guestCorrect);

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;

console.log(guest);
const guestCorrect = restaurant.numGuest ?? 10;

console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

console.log();

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;
console.log(guest2);


const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);
// console.log(restaurant.mainMenu[2]);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `peperoni`, `spinach`);
restaurant.orderPizza(`mushrooms`);


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = `Jonas`;
const letters = [...str, ``, `S.`];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt(`1Let's make pasta! Ingredient 1?`),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Object
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: `Giuseppe`,
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Sabrosso`;
console.log(restaurantCopy.name);
console.log(restaurant.name);

const R3 = { ...restaurant, ...newRestaurant };
console.log(R3);

//Join two arrays


restaurant.orderDelivery({
  time: `22:30`,
  address: `Florilor, 44`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: `Via del Sole,21`, starterIndex: 1 });

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; //schimbare variabile
console.log(main, secondary);

//Receive 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// const [key, playerName] = game.scored;
// console.log(key, playerName);

// for (const jucator of game.scored) console.log(jucator);
for (const [key, numeJucator] of game.scored.entries()) {
  console.log(`Goal ${key + 1} : ${numeJucator}`);
}
//////
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average = average / odds.length;
console.log(average);

/////
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// let gameNew = {
//   push: function push(element) {
//     [].push.call(this, element);
//   },
//   ...game,
// };
// gameNew.push({ Gnarby: 1, Hummels: 1, Lewandowski: 2 });
// const scorers = gameNew[0];
// console.log(scorers);
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
const averageEvent = 90 / gameEvents.size;
// console.log(averageEvent);
console.log(`An event happened, on  average, every ${averageEvent} minutes`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane([0]);
