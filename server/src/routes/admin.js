const Router = require('express')
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken");
const hash = require("../utils/password");
const authMiddleware = require('../middlewaree/auth')
const User = require("../database/models/User");
const {secret} = require("../config")
const Exercise = require("../database/models/Exercise");
const fs = require("fs");

const router = new Router()

router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        console.log(e)
    }
});

router.delete('/user/:id', ///admin/user/
    async (req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) throw new Error('User not found');
            res.status(203).send({msg: 'User deleted✔️', user: deletedUser});
        } catch (error) {
            console.log(error);
            res.status(500).send({error: error.message});
        }
    });

router.delete('/ex/:id',
    async (req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            const deletedExercise = await Exercise.findByIdAndDelete(id);
            if (!deletedExercise) throw new Error('Exercise not found');
            const deletedExercisePath = `./public${deletedExercise.picture}`;
            fs.unlink(deletedExercisePath, (err) => {
                if (err) {
                    throw err
                }
            })
            res.status(203).send({msg: 'Exercise deleted✔️', exercise: deletedExercise});
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    });

module.exports = router;