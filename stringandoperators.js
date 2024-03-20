let a = 'extravaganza'
let removechar = a.substring(8,0);
console.log({removechar})

const food ="The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});




const story= "The quick brown fox jumps over the lazy dog";
 console.log((story.match(/The/g)).length)
console.log((story.match(/brown/g)).length)



const str1 = "The pupils are reading in the library";
 const substr1 = 'are';
  console.log(str1.includes(substr1));



  const str2 = "The child was sitting on the table before it fell";
  const substr2 = 'sitting' ;
  console.log(str2.includes(substr2));

  let b ="wonderful";
  console.log(b.toUpperCase("wonderful"))

  let c = "Amazing";
  console.log(c.toLowerCase("Amazing"));

