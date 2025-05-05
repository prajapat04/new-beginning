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
 fruits.forEach(function(fruit, index){
  console.log(`${index + 1}.${fruit}`);
  const li = document.createElement("li");
  li.innerText = fruit;
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