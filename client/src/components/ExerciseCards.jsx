import React from 'react';
import { ExerciseCard } from './ExerciseCard';

export const ExerciseCards = ({exercises}) => {

    return (
        <div>
            {exercises.map(exercise => (
                <ExerciseCard key={exercise._id} exercise={exercise} />
            ))}
        </div>
    );
}