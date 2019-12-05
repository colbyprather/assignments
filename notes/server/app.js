const express = require("express")

const uuid = require("uuid/v4")

const app = express()

app.use(express.json())

const PORT = 8000

const todos = []

app.get('/todo', (req, res) => {
    console.log(req.query)
    res.send(todos)
})

app.post('/todo', (req, res) => {
    todos.push({...req.body, _id: uuid()})
    res.send(todos)
})

app.listen(PORT, () => {
    console.log('app is running of port ' + PORT)
})