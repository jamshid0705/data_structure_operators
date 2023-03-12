'use strict';

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
const arr=[1,2,3,4]
const arr1=['a','d','e']
const newArr=[...arr,...arr1]
console.log(newArr)
const name='jamshid'
console.log(...name)

const olma=function(a,b,c,d,e,f){
  console.log(`qalesan ${a}`,b,c,d,e,f)
}
olma(...name)
olma(...arr1)
// object

const obj1={
  name:'jamshid',
  age:22,
  job:'programmer'
}
const obj2={
  car:"nexia",
  year:2020
}

const newObj={...obj1,...obj2}
console.log(newObj)
const newObj1={...obj1}
console.log(newObj1)
newObj1.name='shamshod'
console.log(obj1)
console.log(newObj1)