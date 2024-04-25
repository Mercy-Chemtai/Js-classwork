class Person{
    constructors(name,age){
        this.name = name;
        this.age = age;
        
    }
 greet(){
    console.log(`Hello, my name is${this.name} and I am ${this.age} years old`);
    }
};
const jane = new Person (`jane`,30)
console.log({jane});
jane.greet();
console.log('prototype',Person.greet)

Person.prototype.nationality = 'kenyan';
console.log('nationality',jane.nationality)

class Student extends Person{
    constructor (name,age){
        super(name,age);
        this.school(){
            console.log(`I am student`)
        }
    }
};

const amanda= new Student('Amanda',19);

console.log({Person});
console.log('nationality',amanda.nationality);
amanda.greet();




// Requirements: 
// 1) Create a Car class or function constructor that has the following properties:
//  a. make (string): The make of the car, e.g., "Toyota". 
// b. model (string): The model of the car, e.g., "Camry". 
// c. year (number): The year the car was manufactured, e.g., 2020. 
// d. isAvailable (boolean): Indicates if the car is currently available for rent. 
// The Car class or function constructor should also have a method called toggleAvailability that 
// changes the isAvailable property to its opposite value (true to false, false to true) 

class Car{
   constructors(make,model,year,isAvailable){
    this.make = make
    this.model = model
    this.year = year
   }
isAvailable(){
    console.log(``)
}
};

const Car = function (toyota,Camry,2020){
    const b = object.create(isAvailable);
    return object.assign(b,{make,model,year});
};
const car toggleAvailability = {
    toggle(){

    }
}


    const Book = function (title, author, length, status) {
    const b = Object.create(bookProto);
    return Object.assign(b, { title, author, length, status });
  };
  const bookProto = {
    toggleStatus() {
      this.status = !this.status;
    }
  };
