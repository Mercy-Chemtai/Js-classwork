 function add (num1 ,num2){
    const sum = num1 + num2;
    console.log({console:sum});
    return {'return':sum};
 }
 console.log(add(2,3));
 add(4,5);

 //Function Expression
 const subtraction = fuction (num1, num2){
    console.log(num1-num2);
 }
 subtraction(20,10)

 //Arrow Function
 const multiply = (num1, num2)=> console.log(num1*num2)
 multiply(5,6)

 //IIFEs

 (function (){
    console.log('Hello');
 })();

 //Hoisting - calling it before declaring it 
 // const can not 

 console.log({greet})
 
 var greet = 'Hello there';
 console.log({greet2:greet})


