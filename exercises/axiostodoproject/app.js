// const axios = require("axios")
const list = document.getElementById("list")
 
// const add = document.addList
document.add.addEventListener("submit", (e) =>{
    e.preventDefault()
    const newTodo = {
        

        title: e.target.title.value,
        description: e.target.description.value,
        price: e.target.price.value,
        imgUrl: e.target.image.value
    }
    makeTodo(newTodo)
})

axios.get("https://api.vschool.io/Colby/todo", newTodo).then((response) => {
    const todos = response.data
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})

function makeTodo(todo){
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    const p = document.createElement("p")
    const h3 = document.createElement("h3")
    const img = document.createElement("img")

    h1.textContent = todo.title
    p.textContent = todo.description
    h3.textContent = todo.price
    img.src = todo.imgUrl

    container.appendChild(input)
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(h3)
    container.appendChild(img)
    list.appendChild(container)
} 

