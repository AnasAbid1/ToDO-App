// alert("HELLO WORLD")



                // ----TODO APP-----
var li = document.getElementById("list")

function  addtodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")


    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class","animate__backInDown")


    
    list.appendChild(li)
    li.appendChild(liText)
    todo_item.value = ""
    
    var delBtn = document.createElement("button")
    var delTxt = document.createTextNode("Delete")
    
    delBtn.appendChild(delTxt)

    li.appendChild(delBtn)
    
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    

    var editBtn = document.createElement("button")
    var editTxt = document.createTextNode("Edit")
    
    editBtn.appendChild(editTxt)

    li.appendChild(editBtn)
    
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")
    
    console.log(li)
}
function deleteItem(e){
    // console.log(e)
    e.parentNode.remove()
}
function editItem(i){
    
    var liText = i.parentNode.firstChild.nodeValue
    var editList = prompt("Edit Your List", liText);

    i.parentNode.firstChild.nodeValue = editList
}

function delList(){
    li.innerHTML = ""
}