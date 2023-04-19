const { Router } = require('express');
const Exercise = require('../database/models/Exercise');
const router = Router();
const fs = require("fs");
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

    router.post('/',
    async (req, res) => {
        if (!req.files) {
            return res.status(403).send({ msg: "File error" });
        }
        const picture = req.files.picture;
        const { exname, category, description } = req.body;
        const filePath = `./public/exercise/${picture.name}`;
        await picture.mv(filePath, (e) => {
            console.log(e);
        });

        const ex = await Exercise.create({
            pictures: filePath.slice(8),
            exname: exname,
            category: category,
            description: description,
        })

        res.status(200).send(ex);
    });

    router.get("/:category",
    async (req, res) => {
        const category = req.params.category;
        const exercises = await Exercise.aggregate([{ $match: { category } }, { $sample: { size: 10 } }, { $limit: 10 }]);
        console.log(exercises)
        res.status(200).send(exercises)
    }),

    router.get("/",
        async (req, res) => {
            const exercises = await Exercise.find({});
            res.status(200).send(exercises)
        });

    router.delete('/:id',
        async (req, res) => {
            try {
                const id = req.params.id
                const deletedExercise = await Exercise.findByIdAndDelete(id);
                if (!deletedExercise) throw new Error('Exercise not found');
                const deletedExercisePath = `./public${deletedExercise.picture}`;
                fs.unlink(deletedExercisePath, (err) => {
                    if (err) {
                        throw err
                    }
                })
                res.status(203).send({ msg: 'Exercise deleted✔️', exercise: deletedExercise });
            } catch (error) {
                res.status(500).send({ error: error.message });
            }
        });
module.exports = router