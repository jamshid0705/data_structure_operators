'use strict';

///////////// destructuring arrays //////////////
const cars={
  chevrolet:['nexia','lacceti','cobalt'],
  categories:['chevrolet','kia','hyundai']
}

const arr=[1,3,4,5]
const [a,b,c,d]=arr
console.log(a,b,c,d)

const [first,,second,third]=cars.chevrolet
console.log(first,second,third)