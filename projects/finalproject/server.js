const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8000

app.use(express.json())

app.use("/profileItems", require('./routes/profileRouter'))

mongoose.connect('mongodb://localhost:27017/profiledb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to the DB`))
.catch(() => console.log(err))

app.listen(PORT, () => {
    console.log(`FocuseTalent server is running on port ${PORT}`)
})