import { useState, useEffect } from "react";
import client from "../api";
import { useSelector } from "react-redux";

const DAYS_OF_WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

function Calendar() {
    const [date, setDate] = useState(new Date());
    const [markedDays, setMarkedDays] = useState([]);
    // const [workoutArray, setWorkoutArray] = useState([]);
    // const [workoutStat, setWorkoutStat] = useState([]);

    const user = useSelector(state => state.appUser.user);

    // const getWorkoutStat = async ({ userId }) => {
    //     try {
    //         const response = await client.get(`/auth/users/${userId}/workout`);
    //         const workoutData = response.data

    //         console.log("Workout stat:", workoutData);
    //         setWorkoutStat(workoutData);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    useEffect(() => {
        if (user) {
            console.log(user);
            const marked = user.workautDays.map(date => new Date(date).getDate());
            setMarkedDays(marked);
            //getWorkoutStat(user.id);
        }
    }, [user]);


   
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const prevMonthDays = firstDayOfMonth.getDay();
    const daysFromPrevMonth = [];

    for (let i = prevMonthDays; i > 0; i--) {
        daysFromPrevMonth.push(
            <div
                key={`prev-${i}`}
                className="text-gray-500 bg-gray-100 hover:bg-gray-200 cursor-pointer text-center py-2"
            >
                {new Date(
                    date.getFullYear(),
                    date.getMonth() - 1,
                    daysInMonth - (i - 1)
                ).getDate()}
            </div>
        );
    }

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        const isMarked = markedDays.includes(
            new Date(date.getFullYear(), date.getMonth(), i).getDate()
        );
        console.log(isMarked)
        days.push(
            <div
                key={`current-${i}`}
                className={`${i === date.getDate() ? "bg-blue-500 text-white" : ""
                    } ${isMarked ? "bg-green-500 text-white" : "hover:bg-blue-200 cursor-pointer"} text-center py-2`}
            >
                {i}
            </div>
        );
    }

    const daysFromNextMonth = [];
    const nextMonthDays = 7 - lastDayOfMonth.getDay() - 1;
    for (let i = 1; i <= nextMonthDays; i++) {
        daysFromNextMonth.push(
            <div
                key={`next-${i}`}
                className="text-gray-500 bg-gray-100 hover:bg-gray-200 cursor-pointer text-center py-2"
            >
                {new Date(date.getFullYear(), date.getMonth() + 1, i).getDate()}
            </div>
        );
    }
    const allDays = [...daysFromPrevMonth, ...days, ...daysFromNextMonth];
    
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <button
                    className="p-2 rounded hover:bg-gray-100"
                    onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))}
                >
                    {"<"}
                </button>
                <h1 className="text-xl font-medium">
                    {date.toLocaleDateString("en-En", {
                        year: "numeric",
                        month: "long",
                    })}
                </h1>
                <button
                    className="p-2 rounded hover:bg-gray-100"
                    onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))}
                >
                    {">"}
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {DAYS_OF_WEEK.map((day) => (
                    <div key={day} className="text-center font-medium py-2">
                        {day}
                    </div>
                ))}
                {allDays}
            </div>
        </div>
    );
}

export default Calendar;

