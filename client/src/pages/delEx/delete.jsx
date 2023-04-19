import React, { useState, useEffect } from 'react';
import client from '../../api';
import { ExerciseList } from '../../components/ExerciseList';
import { UserList } from '../../components/UserList';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useNavigate} from "react-router-dom";
import appRoutes from "../../appRoutes";

export const Delete = () => {

    const [exercises, setExercises] = useState([]);
    const [users, setUsers] = useState([]);
    const [exerciseSearch, setExerciseSearch] = useState('');
    const [userSearch, setUserSearch] = useState('');

    const getExercises = async () => {
        await client.get("exercises").then((response) => { setExercises(response.data); console.log(response.data)}).catch((error) => { alert("Err") })
    }

    const navigate = useNavigate()
    const onButtonClick = () =>{
        navigate(appRoutes.admin.addEx.path)
    }

    useEffect(() => {
        getExercises()
    }, []);

    const getUsers = async () => {
        await client.get("admin/users").then((response) => { setUsers(response.data)}).catch((error) => { alert("Err") })
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-white pt-32">
                <div className="flex flex-row w-screen justify-around">
                <div className="flex flex-col border-1 border-black rounded-md bg-white bg-opacity-30 shadow-md shadow-gray-700 w-[800px] ">
                    <h1 className="text-3xl text-white bg-black py-2 px-4 font-bold bg-opacity-90">Delete Exercise</h1>
                    <input type="text" placeholder="Search products by name" value={exerciseSearch} onChange={(e) => setExerciseSearch(e.target.value)} />
                    {exercises ? <ExerciseList exercises={exercises.filter((exercise) =>
                        exercise.exname.toLowerCase().includes(exerciseSearch)
                    )} /> : null}
                </div>
                <div className="flex flex-col border-1 border-black rounded-md bg-white bg-opacity-30 shadow-md shadow-gray-700 w-[800px]">
                    <h1 className="text-3xl text-white bg-black py-2 px-4 font-bold bg-opacity-90">Delete User</h1>
                    <input type="text" placeholder="Search users by email" value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
                    {users ? <UserList users={users.filter((user) =>
                        user.email.includes(userSearch)
                    )} /> : null}
                </div>
                </div>
                <div className="flex flex-col items-center pt-10">
                <p className="md:text-2xl sm:text-xl text-gray-800">Перейти до:</p>
                <button onClick={() =>{onButtonClick()}} className="bg-black w-[350px] h-[100px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF6347] opacity-90">Додання</button>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Delete