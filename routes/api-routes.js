const router = require("express").Router();
var Workout = require("../models/workout");
const { Router } = require("express");

router.get("/api/workouts", function (req, res) {
  Workout.find({})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  Workout.find({})
    .limit(7)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.put("/api/workouts/:id", function (req, res) {
  var workoutId = req.params.id;
  Workout.updateOne(
    { _id: workoutId },
    {
      exercises: {
        $push: req.body,
      },
    }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

module.exports = router;
