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

////////////////////// coding chellenge 4 ////////////////////
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const newText = text.toLowerCase();
//   const newArr = newText.split('\n');
//   for (const [m, v] of newArr.entries()) {
//     let n = v.trim();
//     let a = n.slice(n.indexOf('_') + 1);
//     let b = n.slice(0, n.indexOf('_'));
//     console.log(
//       (b + a.replace(a[0], a[0].toUpperCase())).padEnd(20, ' ') +
//         '✅'.repeat(m + 1)
//     );
//   }
// });

////////////////////// string practise //////////////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const newText = flights.split('+');
const shortText = from => from.slice(0, 3).toUpperCase();
let a = [];
for (const val of newText) {
  const [type, from, to, hour] = val.split(';');
  const newtext1 = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${shortText(from)} to ${shortText(to)} (${hour.replace(':', 'h')})`;

  a.push(newtext1.length);
  console.log(newtext1.padStart(Math.max(...a), ' '));
}

////////////////////// working with string ///////////////////
// const information = 'His name is JAMSHID!';
// const password = 'jam$0705';
// console.log(information[0]);
// console.log(information[9]);
// console.log(information[2]);
// console.log([...information]);
// console.log(password[7]);

// // slice method
// console.log(information.slice(3 + 1));
// console.log(information.slice(2, 9));
// console.log(information.slice(-4));
// console.log(information.slice(information.length - 4));
// console.log(information.indexOf('i'));
// console.log(information.lastIndexOf('i'));
// // exercise
// const text = 'shamsdgsacchjamnjcuiujabijambbibijamjam';
// let summ = 0;
// for (let i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 1) === 'j') {
//     // console.log('1',text.slice(i, i + 1));
//     if (text.slice(i + 1, i + 2) === 'a') {
//       // console.log('2', text.slice(i+1, i + 2));
//       if (text.slice(i + 2, i + 3) === 'm') {
//         // console.log('3', text.slice(i+2, i + 3));
//         summ++;
//       }
//     }
//   }
// }
// console.log(summ);
// console.log('----------------------------------------------------------------');
// // toLowerCase and toUpperCase
// const myName = 'jAmSHid xATAMOv';
// const a = 'jAMshiD';
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// const newA = a.toLowerCase()[0].toUpperCase() + a.toLowerCase().slice(1);
// console.log(newA);

// // trim - Bo'sh yoki ortiqcha joylarni olib tashlaydi stringdan
// const email = 'jamshid@gmail.com';
// const email1 = '  JAmshiD@Gmail.CoM  \n';
// const newEmail1 = email1.toLowerCase().trim();
// console.log(email === newEmail1);
// console.log(email1);
// // replace method
// let cost = '234,45#';
// console.log(cost.replace('#', '$').replace(',', '.'));
// console.log(cost);
// const text1 = 'Hello Jamshid. How are you? His name is really Jamshid';
// console.log(text1.replace('Jamshid', 'Shamshod')); // bu yerda faqat birinchi topganini o'zgartiryabdi
// console.log(text1.replace(/Jamshid/g, 'Shamshod')); // bu hammasini o'zgartiradi
// // includes boolean
// const inc = 'Hello everyone !';
// console.log(inc.includes('ever'));
// console.log(inc.includes('llo'));
// console.log(inc.includes('ellr'));
// console.log(inc.startsWith('He'));
// console.log(inc.endsWith(' !'));
// ///
// const arr = ['a', 'b', 'c'].slice(1);
// console.log(arr);
// // split method array qilib beradi string ni
// console.log('It is very comfortable !'.split(' '));
// console.log('a,b,c,d,v,j,k,l,t,y'.split(','));
// // join method stringni array qilib beradi
// console.log(['It', 'is', 'fantastic', '!'].join(' '));
// console.log(['a', 'b', 'c', 'd', 'e', 'f', 'h'].join(', '));

// const capitalizeName = function (name) {
//   const newName = name.split(' ');
//   const newNameUpp = [];
//   for (const n of newName) {
//     // newNameUpp.push(n[0].toUpperCase()+n.slice('1'))
//     newNameUpp.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(newNameUpp.join(' '));
// };
// capitalizeName('jamshid is programmer !');
// capitalizeName('jamshid xatamov');

// // padStart and padEnd mathods
// const b = 'jamshid';
// const b1 = 'xatamov jamshid';
// console.log(b.padStart(34, '*'));
// console.log(b1.padEnd(40, '*'));

// const creditCard = function (name) {
//   const newName = String(name);
//   const card = newName.slice(-4);
//   return card.padStart(newName.length, '*');
// };
// console.log(creditCard(2637564356450));
// console.log(creditCard(24646121864945843));
// console.log(creditCard('21435647078576856'));

// // repeat
// console.log('Salom'.repeat(3));

// const planes = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planes(4)
// console.log('!'.toUpperCase())
////////////////////// coding challenge 3 //////////////////
// const gameEvents = new Map([
//   [17, '⚽️ GOAL']
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // x1
// const events=new Set(gameEvents.values())
// console.log(events)
// // x2
// gameEvents.delete(64)
// console.log(gameEvents)
// // x3
// console.log('An event happened, on average, every 9 minutes');
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// // x4
// for(const [key,value] of gameEvents){
//   console.log(
//     key <= 45 ? `[FIRST HALF] ${key}:${value}` : `[SECOND HALF] ${key}:${value}`
//   );
// }

////////////////////// sets ///////////////////////////
// const orderSet = new Set([
//   'olma',
//   'nok',
//   'shaftoli',
//   'shaftoli',
//   'olma',
//   'nok',
// ]);
// for (const a of orderSet) {
//   console.log(a);
// }
// console.log(orderSet.size);
// console.log(new Set().add('nok').add('gilos'));
// console.log(orderSet.has('nok'));
// console.log(orderSet.has('gilos'));
// console.log(orderSet.delete('nok'));
// orderSet.clear();
// console.log(orderSet);

// console.log(new Set('xatamov jamshid'));
// // examples
// const fruits = ['apple', 'pear', 'pear', 'cherry', 'apple'];
// const setFruits = new Set(fruits);
// console.log(setFruits);
// console.log([...setFruits]);

////////////////////////// map ///////////////////////////
// console.log('---------------Map----------------');
// const rest = new Map().set('name', 'cars');
// rest
//   .set('categories', ['chevrolet', 'BWW', 'Mercedec'])
//   .set('open', 9)
//   .set('close', 18)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :(');
// console.log(rest);
// console.log(rest.get('open'));
// console.log(rest.get('categories'));

// console.log(rest.size);
// console.log(rest.has(true));
// console.log(rest.delete('close'));

// const add = [2, 3];
// rest.set(add, 'olma');
// console.log(rest);
// console.log(rest.get(add));

// // map ineration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'C++'],
//   [3, 'Java'],
//   [4, 'JavaScript'],
//   [5, 'Ptyhon'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);
// console.log(question)
// console.log(Object.entries(openingHours))
// // console.log(weekdays.entries())
// // for(const a of weekdays.entries()){
// //   console.log(a)
// // }

// const hoursMap=new Map(Object.entries(openingHours))
// console.log(hoursMap)

// for(const [key,value] of question){
//   if(typeof key ==='number'){
//     console.log(`Answer ${key}:${value}`)
//   }
// }

// const answer=3
// const answer2=question.get(answer===question.get('correct'))
// console.log(answer2)

// // convert map to array
// console.log(question)
// console.log([...question])

////////////////////// coding challenge 2 /////////////
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
// for (const [ind, val] of game.scored.entries()) {
//   console.log(`Goal ${ind + 1}: ${val}`);
// }
// // x2
// const newArr = Object.values(game.odds);
// let summ = 0;
// for (const sum of newArr) {
//   summ += sum;
// }
// const avaregeOdd = summ / newArr.length;
// console.log(avaregeOdd);
// // x3
// for (const [key, value] of Object.entries(game.odds)) {
//   for (const [ind, val] of Object.entries(game)) {
//     if (key === ind) {
//       console.log(`Odd of victory ${val}:${value}`);
//     } else if (key == 'x') {
//       console.log(`Odd of draw:${value}`);
//       break;
//     }
//   }
// }
// // bonus
// let sum=0
// let scores={}
// for(const key of game.scored){
//   for(const key1 of game.scored){
//     if(key==key1){
//       sum++
//     }
//   }
//   scores[key]=sum
//   sum=0
// }
// console.log(scores)
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
