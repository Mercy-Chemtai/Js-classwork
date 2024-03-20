let fruits = ["Mango","Apple","Banana","Orange"];

let array = new Array(20,30,6,7)

console.log({fruits});
console.log({array});

fruits[1]=3;
console.log({fruits});
console.log(`length`,fruits.length);
console.log(fruits[20]);//undefined


//Array methods
let addlist = fruits.push(`pineapple`);
console.log([fruits]);
let addFirst = fruits.unshift(`pawpaw`);
console.log({fruits});
let removelast = fruits.pop();
console.log({fruits});
let removeFirst = fruits.shift();
console.log({fruits});


let items = [20,30,40,50,60];

//it is used for addition or any other inside an array
let add = items.reduce((acc,curr)=> acc + curr)
console.log({add});

//it  returns an array
let multiply = items.map(item => item*2);
console.log({multiply});

let addition = items.map(item => item);
console.log({add});
let addEach=[]
let total = 0
  items.forEach(item=>{
    const add = item + 2;
    console.log({add})
    addEach.push(add);
    console.log({addEach});
    total*=item
    
});
console.log({addEach});
console.log({total});

let multiplyAll= 1;
items.map(item =>{
    multiplyAll*=item;
    return item
})
console.log({multiplyAll})

//destructure  rest is for the other value that has no
let [num1,num2,num3,...rest]=items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});


