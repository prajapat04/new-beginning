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
    greetUser();

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