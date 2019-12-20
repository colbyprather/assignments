const express = require('express')
const profileRouter = express.Router()
const Profile = require('../models/profile')

profileRouter.get("/", (req, res) => {
    Profile.find((err, profile) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(profile);
    });
});

profileRouter.get("/:profileId", (req, res) => {
    Profile.findOne({ _id: req.params.profileId}, (err, profile) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!profile) {
            res.status(404)
            return next(new Error("No profile item found."));
        }
        return res.send(profile);
    });
});

module.exports = profileRouter