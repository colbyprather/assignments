const express = require('express')
const profileRouter = express.Router()
const uuid = require('uuid/v4')
const Profile = require('../models/profile')


profileRouter.get('/', (req, res) => {
    Profile.find((err, profile) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(profile)
    })
})

profileRouter.post('/', (req, res) => {
    const newProfile = new Profile(req.body)
    newProfile.save((err, profile) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(profile)
    })
})

profileRouter.get('/:_id', (req, res) => {
    const foundProfile = Profile.findById(req.params._id, (err, profile) => {
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(profile)
    })
})

profileRouter.delete('/:_id', (req, res) => {
    Profile.findOneAndRemove({_id: req.params._id}, (err, profile) => {
        if(err){
            res.status(500).send(err)
        }
        const response = {
            message: "Profile successfully deleted",
            id: profile._id
        }
        return res.status(200).send(response)
    })
})

profileRouter.put("/:_id", (req, res) => {
    Profile.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedProfile) => {
            if(err){
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedProfile)
        }
    )
})

module.exports = profileRouter