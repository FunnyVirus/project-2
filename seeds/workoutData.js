const { Workouts } = require('../models');

const workoutData = [
  {
    id: '',
    workout: 'dumbbell curl',
    sets: '3',
    reps: '12',
    weight: '25 lbs',
    personal_record: '25 lbs',
    improvements: 'alternate arms',
    datestamp: '2021-01-22'
  },
  {
    id: '',
    workout: 'back squat',
    sets: '3',
    reps: '6',
    weight: '155 lbs',
    personal_record: '175 lbs',
    improvements: 'squat lower to complete form',
    datestamp: '2021-05-13'
  },
  {
    id: '',
    workout: 'dumbbell overhead press',
    sets: '3',
    reps: '10',
    weight: '30 lbs',
    personal_record: '30 lbs',
    improvements: 'go heavier weight next time',
    datestamp: '2021-09-03'
  },
  {
    id: '',
    workout: 'deadlift',
    sets: '3',
    reps: '8',
    weight: '135 lbs',
    personal_record: '155 lbs',
    improvements: 'practice form more!',
    datestamp: '2021-11-03'
  },
];

const seedWorkout = () => Workouts.bulkCreate(workoutData);
seedWorkout();
module.exports = seedWorkout;