
function addToTodoList() {

    const enteredItem = prompt("Enter something that you want to add.")
    const enteredTime = prompt("at what time?")

    const liTag = document.createElement("li")
    const liText = document.createTextNode(enteredItem + " at " + enteredTime)
    
    liTag.appendChild(liText)
    
    document.getElementById("todo_list").appendChild(liTag)
}

