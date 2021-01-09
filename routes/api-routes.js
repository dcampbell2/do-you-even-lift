const router = require("express").Router();

const Workout = require("../models/workout")

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body).then((newWorkout)=>{
        res.json(newWorkout)
    }).catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})

router.put("/api/workouts/:id", (req, res)=>{
    workoutId = req.params.id;

    console.log(workoutId)

    Workout.findByIdAndUpdate(
        {_id: workoutId},
        {$push: {exercises: req.body}},
    ).then((updateWorkout) => {
        res.json(updateWorkout)
    })

})

module.exports = router