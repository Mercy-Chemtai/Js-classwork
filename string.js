let a='Hello';
let b = "World";
 let c =`Hello world`;

console.log('length', a .length);
console.log('index',a[3]);
console.log('position' ,a.indexOf('o'));
a[2]=`f`;
console.log({a});

//concatination
let d =a +' ' + b;
console.log({d});
let e = `${a} ${b}, I like coding`;
console.log({e});