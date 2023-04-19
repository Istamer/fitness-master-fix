import React from "react";
import appRoutes from "../appRoutes";
import {useNavigate } from "react-router-dom";

const Letters = () => {

    const navigator = useNavigate();

    const handleBuyClick = () => {
        navigator(appRoutes.profilePurchase.path);
    };

    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-3">
                    <h1 className="md:text-3xl sm:text-3xl text-xl font-bold">Отримай можливість стежити за своїм прогресом разом з власним профілем!</h1>
                    <p className="font-light text-gray-400">Придбання є одноразовим на весь період користування.</p>
                </div>
               <div> <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <button onClick={handleBuyClick} className="bg-[#FF7F50] w-[500px] rounded-md font-bold text-black ml-3 my-6 mx-auto py-3">Переглянути інформацію</button>
                </div>
                <p className="font-light text-gray-400 ">Перегляньте умови оплати та опис можливостей.</p></div>
            </div>
        </div>
    )
}

export default Letters