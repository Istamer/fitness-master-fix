import React from 'react';

export const ExerciseCard = ({exercise}) => {

    return (
        <div className="pl-96 pb-5 pt-5">
        <div className="p-9 bg-white pl-48 pb-10 border border-gray-200 rounded-2xl w-[1300px]">
            <img src={'http://localhost:5000/' + exercise.pictures} width="auto" height="200px"
                 className="pt-10 pb-5"></img>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">{exercise.exname}</h2>
            <h4 className="">{exercise.category}</h4>
            <p className="w-[900px] font-normal text-gray-900">{exercise.description}</p>
        </div>
        </div>
    );
}