const router = require("express").Router();

const Workout = require("../models/workout")

router.post("/api/workouts", (req, res) => {
    Workout.create({}).then((newWorkout)=>{
        res.json(newWorkout)
    }).catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})

module.exports = router