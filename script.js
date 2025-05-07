console.log("JavaScript is working!");
// function greetUser() {
//     alert("Welcome to my site!");
//   }
//funcation on window load
//   window.onload = greetUser;

//change hadding in html tag
  function changeHeading() {
    document.getElementById("main-heading").innerText = "You clicked the button!";
  }
  
  function showName(){
    const name = document.getElementById("name-input").value;
    document.getElementById("greeting").innerHTML = `hello ${name}`;
  }

  window.onload = function() {
    

    const newPara = document.createElement("p");
    newPara.innerHTML = "This pragraph was added user js";
    newPara.style.color = "green";
    document.body.appendChild(newPara);
  };

  function toggleStyle() {
    const heading = document.getElementById("toggle-heading");
    heading.classList.toggle("highlight");
  }

  function removePra() {
    const prag = document.getElementById("remove-me");
    prag.remove();
    
  }
 document.getElementById("contact-form").addEventListener("submit",  function(e){
  e.preventDefault();

  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const response = document.getElementById("form-response");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 if (!emailPattern.test(email)) {
   response.innerText = "Please enter a valid email.";
   response.style.color = "red";
   return;
 } else {
   document.getElementById("contact-form").reset();
 
 };
  
  if(name === "" || email === ""){
    response.innerText = "Please fill in all fields.";
    response.style.color = "red";
  } else {
    response.innerText = `Thanks, ${name} we'll contact you at ${email}.`;
    response.style.color = "green";
  }
 });

 document.getElementById("username").addEventListener("keyup", function(e){
  document.getElementById("form-response").innerText = `Typing : ${e.target.value}`;
 });


 const fruits = ["apple", "banana", "cherry", "mango"];
 const fruitList = document.getElementById("fruitList");
 fruits.forEach((fruit, i) => {
  const li = document.createElement("li");
  li.innerText = `${i + 1}.${fruit}`;
 fruitList.appendChild(li);
});
 

 const user = {
  name : "jone",
  age : 34,
  email : "john@gamil.com"
 };
  const userInfo = document.getElementById("user-info");
 console.log(`Name ${user.name},  Email : ${user.email}`);
userInfo.innerText = `Name ${user.name},  Email : ${user.email}`;


const users = [
  {name : "Aman", age : 23},
  {name : "Neha", age : 24},
  {name : "Ravi", age : 26}
];

for(const user of users){
  let li = document.createElement("li");
  li.innerText = `${user.name} : ${user.age}`;
  document.getElementById("obj-list").appendChild(li);
}

const products = [
  {name : "Lg", price: 45000},
  {name : "Lenovo", price: 50000},
  {name : "Dell", price: 55000},
  {name : "Asus vivobook", price: 65000}
];
const productList = document.getElementById("product-list");

products.forEach(product => {
  const li = document.createElement("li");
  li.innerText = `Name ${product.name} - Price ${product.price}`;

  if(product.price > 20000){
    li.style.color = "green";
  } else {
    li.style.color = "red";
  }
  productList.appendChild(li);
});
function filterExpensive() {
  productList.innerHTML = "";
  const expencive = products.filter(p => p.price > 50000);
  if(expencive.length === 0){
    const li = document.createElement("li");
    li.innerText = "No product over 50000 found.";
    li.style.color = "gray";
    productList.appendChild(li);
    return;
  } 

  expencive.forEach(product => {
  const li = document.createElement("li");
  li.innerText = `${product.name} price : ${product.price}`;
  li.style.color = "blue";
  productList.appendChild(li);
});

}


function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

function convertToFahrenheit(celsius) {
  return ((celsius * 9 / 5) + 32).toFixed(2);
}

function convertTemp() {
  const temp = parseFloat(document.getElementById("temp-input").value);
  const type = document.getElementById("conversion-type").value;
  const output = document.getElementById("converted-output");

  if (isNaN(temp)) {
    output.innerText = "Please enter a valid number.";
    output.style.color = "red";
    return;
  }

  let result;
  if (type === "toCelsius") {
    result = convertToCelsius(temp);
    output.innerText = `${temp}°F is ${result}°C`;
  } else {
    result = convertToFahrenheit(temp);
    output.innerText = `${temp}°C is ${result}°F`;
  }

  output.style.color = "green";
}


function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const opration = document.getElementById("operation").value;
  const resultElement = document.getElementById("calc-result");

  if(isNaN(num1) || isNaN(num2)){
    resultElement.innerText = "Please enter valid numbers.";
    resultElement.style.color = "red";
    return;
  }
  
  let result;
  switch(opration){
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if(num2 === 0){
        resultElement.innerText = "Cannot divide by zero.";
        resultElement.style.color = "red";
        return;
      }
      result = num1 /num2;
      break;
  }
  resultElement.innerText = `Result : ${result}`;
  resultElement.style.color = "green";

}
document.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    calculate();
  }
  
})

function clearCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("calc-result").innerText = "let input new number to perform new opration.";
}

function handleSubmit(event){
  event.preventDefault();

   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email1").value.trim();
   const password = document.getElementById("password").value.trim();
   const conPassword = document.getElementById("con-password").value.trim();
   const message = document.getElementById("form-message");
 
    if(name.length < 3){
      message.innerText = "Name Must Be at least 3 Characters.";
      message.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      message.innerText = "Enter a valid email address.";
      message.style.color = "red";
      return;
    }


    if(password.length < 6) {
      message.innerText = "Password Must be at least 6 characters.";
      message.style.color = "red";
      return;
    } 
    if (!nonWhitespacePattern.test(name) || !nonWhitespacePattern.test(password)) {
      response.innerText = "Name and password cannot be empty or whitespace.";
      response.style.color = "red";
      return;
    }
    if(password !== conPassword){
      message.innerText = "your password are note same recheak";
      alert("please enter same as password on confirm password");
      return;
    }

    message.innerText = `welcome, ${name}! regisration successful.`;
    message.style.color = "red";

    document.getElementById("regitration-form").reset();
}

const tasks = [];
function addTask() {
  const input = document.getElementById("task-input");
  const task = input.value.trim();

  if(task === "") return;

  tasks.push(task);
  input.value = "";
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("task-list");
  list.innerText = "";
  
  tasks.forEach((task, index)=> {
    const li = document.createElement("li");
    li.innerText = task;


    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteTask(index);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  let string = JSON.stringify(tasks);
  localStorage.setItem("tasks", string);

  
}

function deleteTask(index){
  tasks.splice(index, 1);
  displayTasks();
}
