import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import appRoutes from "../../appRoutes";
import {Link, useNavigate} from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Gym = () => {

    const navigate = useNavigate()
    const onButtonClick = (category) =>{
        navigate(appRoutes.genTraining.path(category))
    }

    return (
        <div>
            {/*<Navbar />*/}
            <div className="bg-white">
            <div className="bg-exfon h-screen opacity-95">
                <h1 className="w-full text-3xl font-bold text-[#FF7F50] m-auto p-4"><Link to={appRoutes.home.path} replace><AiOutlineArrowLeft size={45}/></Link></h1>
            <div className="flex flex-col items-center justify-center pb-8"><h1 className="md:text-3xl sm:text-3xl text-xl text-white font-bold pt-20 pb-10 py-16">Обери, що ти хочеш тренувати сьогодні!</h1>
                <p className="md:text-2xl sm:text-xl text-gray-300">Рекомендуємо почати з розминки.</p>
                <button onClick={() =>{onButtonClick("Розминка")}} className="bg-[#FF7F50] w-[650px] h-[100px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF6347] opacity-90">Розминка</button>
            </div>
                <div className="flex flex-col items-center justify-center"><h2 className="md:text-m sm:text-xl text-gray-300">Або перейди одразу до:</h2></div>
            <div className="flex items-center justify-center w-full py-5 px-4 pb-40">
                <button onClick={() =>{onButtonClick("Ноги")}} className="bg-black w-[250px] h-[200px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF7F50] opacity-90">Ноги</button>
                <button onClick={() =>{onButtonClick("Руки")}} className="bg-black w-[250px] h-[200px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF7F50] opacity-90">Руки</button>
                <button onClick={() =>{onButtonClick("Прес")}} className="bg-black w-[250px] h-[200px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF7F50] opacity-90">Пресс</button>
            </div>
            </div>
            </div>
            {/*<Footer />*/}
        </div>
    )
}

export default Gym