import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm=()=>{
   const {dispatch}=useWorkoutsContext();
    const [title,setTitle]=useState('');
    const [load,setLoad]=useState('');
    const [reps,setReps]=useState('');
    const [error,setError]=useState(null);
    const [emptyFields,setEmtpyFields]=useState([])

    const handleSubmit=async (e)=>{

        e.preventDefault()
        const workout={title, load,reps }
        const response=await fetch('/api/workout',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'Application/json'
            }
        })
        const json=await response.json()
         console.log(json.error);
        if(!response.ok){

            setError(json.error);
            setEmtpyFields(json.emptyFields);
            console.log(emptyFields);
        }
        if(response.ok){

            setTitle('');
            setLoad('');
            setReps('');
            setEmtpyFields([])
            setError(null)
            console.log('New workout is add ',json);
            dispatch({type:'CREATE_WORKOUT',payload:json});
        }   
    }

    return (
        <form className="createWorkout" onSubmit={handleSubmit}>
            <h3>Add a New Workout </h3>

            <label>Excersize Title </label>
            <input
                type="text"
                 onChange={(e)=>setTitle(e.target.value)}
                 value={title}
                 className={emptyFields.includes('title') ? 'error':''}
            />
            <label>Load kg</label>
            <input
                type="number"
                 onChange={(e)=>setLoad(e.target.value)}
                 value={load}
                 className={emptyFields.includes('load') ? 'error':''}

            />
            <label>Reps  </label>
            <input
                type="number"
                 onChange={(e)=>setReps(e.target.value)}
                 value={reps}
                 className={emptyFields.includes('reps') ? 'error':''}
 
            />
            <button type='submit'>Add Workout</button>
            {error &&  <div className='error'>{error}</div>}
        </form>
    )
}
export default WorkoutForm