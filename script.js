'use strict';

const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'stu', 'sun'];
const obj = {
  name: 'jamshid',
  age: 22,
};
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2]]: {
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
////////////////////// coding challenge 2 /////////////
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

// x1
for (const [ind, val] of game.scored.entries()) {
  console.log(`Goal ${ind + 1}: ${val}`);
}
// x2
const newArr = Object.values(game.odds);
let summ = 0;
for (const sum of newArr) {
  summ += sum;
}
const avaregeOdd = summ / newArr.length;
console.log(avaregeOdd);
// x3
for (const [key, value] of Object.entries(game.odds)) {
  for (const [ind, val] of Object.entries(game)) {
    if (key === ind) {
      console.log(`Odd of victory ${val}:${value}`);
    } else if (key == 'x') {
      console.log(`Odd of draw:${value}`);
      break;
    }
  }
}
// bonus
let sum=0
let scores={}
for(const key of game.scored){
  for(const key1 of game.scored){
    if(key==key1){
      sum++
    }
  }
  scores[key]=sum
  sum=0
}
console.log(scores)
///////////////////// optional chaining /////////
// console.log(restaurant.openingHours?.fri?.open); // yo'q bo'lsa o'sha variable shu joyda to'xtadi xato bermaydi consolega
// const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'stu', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'colesed';
//   console.log(`We are open this days ${day} at ${open}`);
// }
// // methods
// console.log(restaurant.order?.(2, 3) ?? 'This method has not fined !');
// console.log(restaurant.orders?.(2, 3) ?? 'This method has not fined !');

// // arrays
// const arr = [{ name: 'jamshid' }, ['shamshod']];
// console.log(arr[0]?.name ?? 'it is empty');
// console.log(arr[1]?.[0] ?? 'it is empty');
// console.log(arr[0].name ? arr[0].name : 'it is empty');

//////////////////////////// for of object ///////////////////
// property key
// const a=Object.keys(openingHours)
// console.log(a)
// for(const day of a){ // (const day of Object.keys(openingHours))
//   console.log(day)
// }
// // property value
// const b=Object.values(openingHours)
// console.log(b)
// for(const day of b){
//   console.log(day)
// }
// for(const day of Object.values(openingHours)){
//   console.log(day)
// }
// // entries
// console.log(Object.entries(obj))
// for(const [key,value] of Object.entries(obj)){
//   console.log(key,value)
// }
// ////////////////////////// for of looping ////////////////////
// const menu=[...restaurant.starterMenu,...restaurant.mainMenu]
// for(const [key,value] of menu.entries()){
//   console.log(key+1,value)
// }
// console.log([...menu.entries()])
//////////////////////// destructuring arrays ////////////////////////
// const cars={
//   chevrolet:['nexia','lacceti','cobalt'],
//   categorie:['chevrolet','kia','hyundai']
// }

// const arr=[1,3,4,5]
// const [a,b,c,d]=arr
// console.log(a,b,c,d)

// const [first,,second,third]=cars.chevrolet
// console.log(first,second,third)

// const arr1=[3,6,7,[4,5,6]]
// const [x,,,y]=arr1
// const [s,,,[k,v]]=arr1
// console.log(x,y)
// console.log(s,k,v)
// // default value
// const [p=0,q=0,r=0]=[4,5]
// console.log(p,q,r)

///////////////////////// destructuring objects //////////////////////
// const cars={
//   name:'ferrari',
//   chevrolet:['nexia','lacceti','cobalt'],
//   categories:['chevrolet','kia','hyundai'],
//   friday:{
//     open:9,
//     close:18
//   }
// }

// const {chevrolet,categories}=cars
// console.log(chevrolet,categories)
// const {chevrolet:uzbek,categories:korean}=cars
// console.log(uzbek,korean)

// const {friday:{open:o,close:c}}=cars
// console.log(o,c)

//////////////////////// spread operator //////////////////////
// array
// const arr=[1,2,3,4]
// const arr1=['a','d','e']
// // o'ng tomonda yozilsa sochadi
// const newArr=[...arr,...arr1]
// console.log(newArr)
// const name='jamshid'
// console.log(...name)

// const olma=function(a,b,c,d,e,f){
//   console.log(`qalesan ${a}`,b,c,d,e,f)
// }
// olma(...name)
// olma(...arr1)
// // yig'ish arraylarda
// // chap tomonga yozilsa yig'uvchi bo'ladi
// const [a,b,...c]=[...arr,...arr1]
// console.log(a,b,c)

// // object
// const obj1={
//   name:'jamshid',
//   age:22,
//   job:'programmer'
// }
// const obj2={
//   car:"nexia",
//   year:2020
// }

// const newObj={...obj1,...obj2}
// console.log(newObj)
// const newObj1={...obj1}
// console.log(newObj1)
// newObj1.name='shamshod'
// console.log(obj1)
// console.log(newObj1)

// // yig'uvchi obectlarda
// const {job,...newobj}={...obj1,...obj2}
// console.log(job,newobj)

// // function larda
// const add=function(...olma){
//   console.log(olma)

// }
// add(obj2)
// add(2,2,3,4,4)

/////////////////////////// short circuiting ///////////////////
// OR
// console.log('jamshid' || 4); // birinchi kelgan true ni oladi va to'xtaydi
// console.log(`${null ? null : 0}`);
// console.log(null || undefined); // true ni izlaydi topilmasa oxirgi false qiymatni oladi
// console.log(undefined || 0);
// console.log(null || 3);
// console.log(3 || 4);

// console.log(undefined || null || 0 || 6 || 'jam' || 3); // birinchi kelgan true ni oladi va to'xtaydi
// console.log(undefined || null || 0 || false); // true ni izlaydi topilmasa oxirgi false qiymatni oladi

// // AND

// console.log(2 && 7) // falseni izlaydi topolmasa oxirgi qiymatni chiqradi
// console.log(0 && null) // falseni izlaydi birinchi kelgani qaytaradi va to'xtaydi
// console.log(undefined && 7)
// console.log(2 && true && 'jmashid' && null)

// //////////////////////////// nullish operators /////////////////////////
// // nullish operatorlariga : undefined va null kiradi (0 va " ") ni true deb oladi
// // ?? bu nullish operatori || or ga o'xshaydi lekin 0 va " " ni true deb oladi
// console.log(0 ?? 3)
// console.log(undefined ?? 4)
// console.log(false ?? 8)
// console.log(null ?? false)

////////////////// coding challenge 1 ////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // x1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // x2
// const [gk, ...fieldPlayers] = [...players1];
// console.log(gk, fieldPlayers);
// // x3
// const [...allPlayers] = [...players1, ...players2];
// console.log(allPlayers);
// // x4
// const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // x5
// const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1, draw, team2);
// // x6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);
// // x7
// // console.log(
// //   team1 > team2
// //     ? "Ikkinchi jamoa g'alaba qozoning ehtimoli yuqori"
// //     : "Birinchi jamoa g'alaba qozoning ehtimoli yuqori"
// // );
// team1 > team2 && console.log("Ikkinchi jamoa g'alaba qozoning ehtimoli yuqori");
// team1 < team2 && console.log("Birinchi jamoa g'alaba qozoning ehtimoli yuqori");
