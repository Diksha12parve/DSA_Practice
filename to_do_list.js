const textArea = document.querySelector(".textarea");
console.log(textArea.value);

const button = document.querySelector(".buttoninput");

const todoList = document.querySelector(".todoList");

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
    console.log("button.clicked");

    const toDoDiv = document.createElement("div");
    const  item = document.createElement("p");
     
    item.innerHTML = textArea.value;

    toDoDiv.appendChild(item);
    todoList.appendChild(toDoDiv);

    console.log(toDoDiv);

}