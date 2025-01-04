const express=require('express')
const router =express.Router();
const {createWorkout,getWorkouts,getWorkoutsingle,deleteWorkout,updateWorkout}=require('../controllers/workoutControllers');



//get all the workout 
router.get('/',getWorkouts);


//get single workout 
router.get('/:id',getWorkoutsingle)

router.post('/',createWorkout);


router.delete('/:id',deleteWorkout);

router.patch('/:id',updateWorkout);


module.exports =router;