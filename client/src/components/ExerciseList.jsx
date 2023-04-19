import React from 'react';

import { ExerciseCardList } from './ExerciseCardList';

export const ExerciseList = ({exercises}) => {

    return (
        <div>
            {exercises.map(exercise => (
                <ExerciseCardList key={exercise._id} exercise={exercise} />
            ))}
        </div>
    );
}