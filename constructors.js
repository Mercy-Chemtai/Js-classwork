function Person(name,age){
    this.name = name;
    this.age = age;
    
    this.greet= function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age}years old `);
    }

};
console.log({adam});
adam.greet();
const eve= new personalbar('eve')
const adam=new Person('Adam',30);

console.log(adam)