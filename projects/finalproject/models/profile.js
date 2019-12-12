const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    height: String,
    weight: Number,
    hair: String,
    eye: String,
    pants: String,
    shirt: String,
    neck: String,
    sleeve: String,
    suit: String,
    waist: String,
    inseam: String,
    shoe: String,
    birthday: String,
    gender: String,
    phone: Number,
    email: String,
    ethnicity: String,
    carYear: String,
    carMake: String,
    carModel: String,
    skills: String,
})

module.exports = mongoose.model("profile", profileSchema)