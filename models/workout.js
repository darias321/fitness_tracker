var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var workoutSchema = new Schema({
  day: { type: Date, required: true, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },

      duration: {
        type: Number,
        required: true,
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      duration: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
});
const WorkoutModel = mongoose.model("WorkoutModel", workoutSchema);

module.exports = WorkoutModel;
