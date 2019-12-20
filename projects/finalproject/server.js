const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", expressJwt({secret: process.env.SECRET}));

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/profiledb', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=> {
        console.log('connected to mongodb')
    })
    .catch(err => {
        console.log(err)
    })

app.use("/profile", require('./routes/profileRouter'));
app.use("/api/profile", require('./routes/protectedRouter'));
app.use("/auth", require("./routes/auth"));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`FocuseTalent server is running on port ${PORT}`)
})