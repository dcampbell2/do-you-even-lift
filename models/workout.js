const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please choose a Workout."
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter a Name."
        },
        distance: {
            type: Number,
        },
        duration: {
            type: Number,
            required: "Please enter a time length."
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },   

    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;