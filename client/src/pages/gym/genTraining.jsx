import React, {useState, useEffect} from 'react';
import Navbar from "../../components/Navbar";
import Timer from "../../components/Timer";
import {ExerciseCards} from "../../components/ExerciseCards";
import client from '../../api';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from '../../store/userSlice';
import {useNavigate } from "react-router-dom";
import appRoutes from '../../appRoutes';

const GenTraining = ({}) => {

    const [date, setDate] = useState(new Date());
    const [workoutArray, setWorkoutArray] = useState([]);
    const [exercises, setExercises] = useState([]);
    const user = useSelector(state => state.appUser.user)
    const navigator = useNavigate();

    const {category} = useParams();
    console.log(category)

    const getExercises = async () => {
        await client.get(`exercises/${category}`).then((response) => { console.log(response.data); setExercises(response.data) }).catch((error) => { alert("Err") })
    }
    useEffect(() => {
        getExercises()
        }, []);

    const dispatch = useDispatch();

    const addToWorkoutArray = async (userId, dateToMark) => {
        console.log(dateToMark, userId)
        await client.post(`/auth/users/${userId}/workout`, {workout: dateToMark})
            .then(response => {
                console.log('User updated:', response.data);
                setWorkoutArray(response.data.dateToMark);

                const updatedUser = { ...user, workautDays: response.data.dateToMark };
                dispatch(setUser(updatedUser));
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <div>
            <Navbar />
            <Timer />

            <div className="bg-exfon bg-fixed">
                <ExerciseCards exercises={exercises}/>;
                <button
                    className="px-4 py-2 bg-[#FF7F50] text-white rounded hover:bg-orange-400"

                    onClick={() => {
                        const dateToMark = new Date(date.getFullYear(), date.getMonth()).getDate();
                        addToWorkoutArray(user.id, dateToMark);
                        navigator(appRoutes.profile.path);
                    }}>Готово</button>
            </div>
            </div>
    )
}

export default GenTraining