import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sport from "../../images/sport1.jpg";
import Letters from "../../components/Letters";

const About = () => {

    return (
        <div>
            <Navbar />
            <div className="w-full bg-white py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto my-4" src={Sport} alt="/"/>
                    <div className="flex flex-col justify-center">
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Віртуальний фітнес-тренер</h1>
                        <div className=""><p>Тренер було сворено, щоб допомогти людям в домашніх умовах підтримувати тіло у здоровій формі.</p>
                            <p>У наш час не завжди є можливість вільно ходити у спорт зал поза домом. Онлайн заняття стали рятівником для багатьох людей.
                            Завдяки віртуальному тренеру ви можете займатись та відстежувати свою активність не виходячи з дому.
                            </p></div>
                    </div>
                </div>
        </div>
            <Letters />
            <Footer />
        </div>
    )
}

export default About