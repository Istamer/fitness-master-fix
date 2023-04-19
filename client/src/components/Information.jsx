import React from "react";
import SportBody from '../images/womentwo.jpg'
import SportBodyTwo from '../images/women.jpg'
import appRoutes from "../appRoutes";
import {useNavigate} from "react-router-dom";


const Information = () => {
    const navigator = useNavigate();

    const handleClick = () => {
        navigator(appRoutes.gym.path);
    };

    return(
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={SportBody} alt="/"/>
            <div className="flex flex-col justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Твій головичний помічник у шляху до бажаного тіла</h1>
                <div className=""><p>Домашні тренування мають багато переваг, але для них потрібна самодисципліна. Тренуючиcь з нами ви матимите:</p>
                    <p>➭ можливість самостійно обирати час і тренуватись стільки, скільки вам комфортно;</p>
                    <p>➭ займатися разом з іншими членами сім'ї;</p>
                    <p>➭ економити свій час;</p>
                    <p>➭ немає потреби виходити з дому;</p>
                    <p>➭ можливість змінювати програму та пробувати різноманітні онлайн-тренування.</p></div>
            </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 p-6">
            <div className="flex flex-col justify-center">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Почни свої тренування вже зараз!</h1>
                <div className=""><p>Ви матимите безкоштовну можливість займатися за готовими комплексами тренувань, просто і зручно.</p>
                <p>Визнач свій показник маси тіла, обери рівень складності і починай своє перше тренування. </p></div>
                <button onClick={handleClick} className="bg-black w-[200px] rounded-md font-bold text-[#FF7F50] my-6 mx-auto md:mx-0 py-3">Почати тренування</button>
            </div>
            <img className="w-[500px] h-[600px] mx-auto my-4" src={SportBodyTwo} alt="/"/>
        </div>
    </div>
    )
}

export default Information