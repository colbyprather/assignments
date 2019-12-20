const express = require('express')
const protectedRouter = express.Router()
const Profile = require('../models/profile')

protectedRouter.get("/", (req, res, next) => {
    Profile.find({ user: req.user._id }, (err, profile) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(profile);
    });
});

protectedRouter.post("/", (req, res, next) => {
    console.log('fired')
    const profile = new Profile(req.body);
    profile.user = req.user._id;
    profile.save(function (err, newProfile) {
        if (err) {
            res.status(500);
            return next (err);
        }
        return res.status(201).send(newProfile);
    });
});

protectedRouter.get("/:profileId", (req, res, next) => {
    Profile.findOne({ _id: req.params.profileId, user: req.user._id }, (err, profile) => {
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

protectedRouter.put("/:profileId", (req, res, next) => {
    Profile.findOneAndUpdate(
        { _id: req.params.profileId, user: req.user._id },
        req.body,
        { new: true },
        (err, profile) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(profile);
        }
    );
});

protectedRouter.delete("/:profileId", (req, res, next) => {
    Profile.findOneAndRemove({ _id: req.params.profileId, user: req.user._id }, (err, profile) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(profile);
    });
});

module.exports = protectedRouter