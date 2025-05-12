// 1. let & const
let username = "crew";
const age = 24;
console.log("username:", username);
console.log("age:", age);

//2. Arrow Funcations
const greet = username =>  `hello, ${username}`;
console.log(greet("code crew"));

//3. Templete Literals 
const message = `User ${username} is ${age} years old.`;
console.log(message);

//4. Distructing
const user = {name : "Alice", email: "alice@example.com"};
const {name, email} = user;
console.log("Name:", name);
console.log("Email:", email);

//5. Spread & Rest 
const num1 = [1, 2, 3];
const num2 = [4, 5];
const combined = [...num1, ...num2];
console.log("conbined Array:", combined);

function sum(...args) {
    return args.reduce((total, n) => total + n, 0);
}
console.log("sum of all numbers:", sum(1, 2, 3, 4, 5));

//6. Default Parameters 
function sayHi(name = "Guest"){
   return `Hi, ${name}`;
}
console.log(sayHi());
console.log(sayHi("Bob"));

//7. for..of and for...in
const colors = ["red", "green", "blue"];
for(let color of colors){
    console.log("Color:", color);
}

const person = { frist : "code", last: "crew" };
for( let key in person){
    console.log(`${key}: ${person[key]}`);
}
//8. Map filter, reduce
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(n => n * n);        
const evens = numbers.filter(n => n % 2 === 0);        
const total = numbers.reduce((sum, n) => sum + n, 0);        

console.log(squared, evens, total);