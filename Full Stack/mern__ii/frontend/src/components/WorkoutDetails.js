import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { formatDistanceToNow } from 'date-fns';

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch('/api/workout/' + workout._id, {
            method: 'DELETE',
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    };

    return (
        <div className="workoutDetails">
            <h4>{workout.title}</h4>
            <p>Load (kg): {workout.load}</p>
            <p>Reps: {workout.reps}</p>
            {/* Assuming 'createdAt' is the correct field name */}
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default WorkoutDetails;
