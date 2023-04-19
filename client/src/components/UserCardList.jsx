import React from 'react';
import client from "../api";

export const UserCardList = ({ user }) => {

    const btnDel = () => {
        client.delete(`admin/user/${user._id}`).then(response => {
            alert(response.data.msg);
        }).catch(e => {
            console.log(e);
            alert("Item not removed")
        });
    }

    return (
        <div>
            <div>
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Password: {user.password}</h3>
            </div>
            <button onClick={btnDel} className="bg-[#FF7F50] w-[200px] rounded-md font-bold text-black ml-3 my-6 mx-auto py-3">Delete</button>
        </div>
    );
}