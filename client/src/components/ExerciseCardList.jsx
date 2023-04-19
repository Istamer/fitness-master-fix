import React from 'react';
import client from "../api";

export const ExerciseCardList = ({ exercise }) => {

    const btnDel = () => {
        client.delete(`admin/ex/${exercise._id}`).then(response => {
            alert(response.data.msg);
        }).catch(e => {
            console.log(e);
            alert("Item not removed")
        });
    }

    return (
        <div>
            <div>
                <h3>Name: {exercise.exname}</h3>
                <h3>Category: {exercise.category}</h3>
                <h3>Price: {exercise.description}</h3>
            </div>
            <button onClick={btnDel} className="bg-[#FF7F50] w-[200px] rounded-md font-bold text-black ml-3 my-6 mx-auto py-3">Delete</button>
        </div>
    );
}