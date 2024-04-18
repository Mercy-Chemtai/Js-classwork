const cup = {
    color:'red',
    size:'small',
    shape:'cylindrical',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    design:['floral','polka','checked'],
    drink:function(){
    console.log('use me to drink tea');
    console.log(`My main use is to drink ${this.functionality.drinkType}`); //whis is an object in js  we 
    } 


};

console.log('size',cup.size); //
console.log({design:cup.design[0]});
console.log('shape',cup['shape']);//
console.log('drinkType',cup.functionality.drinkType);
cup.drink();


cup.color;
console.log({cup});

const values = Object.values(cup);
console.log({values});

const keys = Object.keys(cup);
console.log({keys})

Object.keys(cup).forEach(item =>{
    console.log({keys:item,value:cup[item]});
})








// 1.  // //Given an array of objects, each object representing a person with a name and age property, 
// //write a function that returns a new array containing the names of all people who are 18
//  //years old or older. 
 const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    {name: 'Charlie', age: 14 },
     { name: 'Max', age: 19 },
  ];
 function peoples(age){
    return age.filter(i => i.age >= 18).map(i=>i.name)
 }
 age = 18
 console.log(peoples(age))

  
  
//  2. //Write a function that takes an array of objects, where each object represents a product with a name,
//   // price, and category property. The function should return an object that groups the products by their
//   // categories, with the category names as keys and the arrays of products as values. 
  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  function Category(products){
    return products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {});
};
console.log(Category(products))
  
  


// 3. // Given an array of objects, where each object represents a student with a name and an array of scores,
//  // write a function that returns a new array containing the names of all students whose average score is
//  // greater than or equal to 85. 
 const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  function goodperfomance(students){
    return students.filter(student => {
        const averageScore = student.scores.reduce ((sum,score) => sum + score,) / student.scores.length;
        return averageScore >= 85;
    }).map(student => student.name);
};
  
  console.log(goodperfomance(students))


  // 4. //Given an object representing a car, with properties for the make, model, year, and a method to display
  // the car's information, write a function that takes the car object and adds a new method to the object
  // called age. The age method should return the current age of the car based on the current year and the
   //car's year property. 
   const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };

  car.age = function Oldyear(car){
    let currentYear = Date().getFullYear();
    return currentYear - this.car
  }
  const currentAge = Oldyear(car)
  console.log(currentAge)

// OR

  function carNewAge(car){
    car["age"]=(2024-car.year)
    console.log(car)
  }
carNewAge(car)


 

  
  
  

