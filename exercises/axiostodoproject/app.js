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
    axios.post("https://api.vschool.io/Colby/todo/", newTodo).then(response => {
        makeTodo(response.data)
    })
})

axios.get("https://api.vschool.io/Colby/todo").then((response) => {
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
    const button = document.createElement("button")

    h1.textContent = todo.title
    p.textContent = todo.description
    h3.textContent = todo.price
    img.src = todo.imgUrl
    button.textContent = "Delete"
    button.type = "submit"

    container.appendChild(input)
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(h3)
    container.appendChild(img)
    container.appendChild(button)
    container.addEventListener("change", function(e) {
        e.preventDefault()
        if(input.checked === true){
            axios.put(`https://api.vschool.io/Colby/todo/${todo._id}`,{completed: true}).then(response => {
                response.data
                h1.style.textDecoration = "line-through"
            })
        } else if(input.checked === false){
            axios.put(`https://api.vschool.io/Colby/todo/${todo._id}`,{completed: false}).then(response => {
                response.data
                h1.style.textDecoration = "none"
            })
        }
    })
    button.addEventListener("click", function(){
        axios.delete(`https://api.vschool.io/Colby/todo/${todo._id}`).then(response => {
            response.data
            container.remove()
        })
    })
    list.appendChild(container)
} 

