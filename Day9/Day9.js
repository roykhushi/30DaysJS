//task1
const h1 = document.getElementById("text-change");
h1.style.color = "blue";
//task2
const bgChange = document.querySelector(".task-2");
bgChange.style.backgroundColor = "orange";
//task3
function addElement() {
  
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Task3 : Appending a div on click of the button");

  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
//task4
function liElement() {
    const ul = document.getElementById("ul-task");
    const newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode("Text-4"));
    ul.appendChild(newLi);
}
//task5
function deleteElement(){
    const element = document.getElementById("delete");
    element.remove();
}
//task6
function deleteLastChild(){
    const l = document.getElementById("list");
    l.removeChild(l.lastElementChild);
}
//task7
function changeText(){
    const ct = document.getElementById("task-7");
    ct.innerText = "Changed the text";
}
//task8
function changeBorder(){
    const cb = document.getElementById("task-8");
    cb.style.borderColor = "red";
}