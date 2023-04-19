import React from "react";
import Typed from "react-typed";
import appRoutes from "../appRoutes";
import {useNavigate} from "react-router-dom";

const StartPage = () => {
    const navigator = useNavigate();

    const handleClick = () => {
        navigator(appRoutes.gym.path);
    };

    return (
        <div className="text-white bg-fon">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#FF7F50] font-bold p-2">ОНЛАЙН ФІТНЕС-ТРЕНЕР</p>
                <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold mp:py-6">Займайся вдома у будь-який момент!</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-3xl sm:text-3xl text-xl font-bold p-2">Тренуй усе тіло</p>
                    <Typed className="md:text-3xl sm:text-3xl text-xl font-bold" strings={["НОГИ", "РУКИ", "ПРЕС"]} typeSpeed={120} backSpeed={130} loop/>
                </div>
                <p className="md:text-2xl sm:text-xl text-gray-300">Доєднуйся до мільйону людей, що вже тренуються за допомогою нашого фітнес-тренеру.</p>
            <button onClick={handleClick} className="bg-[#FF7F50] w-[200px] rounded-md font-bold text-black my-6 mx-auto py-3">Почати тренування</button>
            </div>
        </div>
    )
}
export default StartPage