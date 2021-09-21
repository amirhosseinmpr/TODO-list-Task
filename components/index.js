// order Task and push when enter keyworld
let input = document.getElementById("countainer_input");
input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    let task = document.createElement("li");
    let inputt = document.getElementById("countainer_input").value;
    let addtask = document.createTextNode(inputt);

    task.appendChild(addtask);
    if (inputt === "") {
      alert("Please enter your Task ");
    } else {
      document.getElementById("List").appendChild(task);
    }
    document.getElementById("countainer_input").value = "";
  }
});

let list = document.getElementById("List");

//  finish Task when clicking
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
      event.target.style.color = "#000000";
    } else {
      event.target.style.textDecoration = "line-through";

      event.target.style.color = "#363232";
    }
  }
});

//  Delet Task when clicking
list.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
