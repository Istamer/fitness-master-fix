import React, {useState} from "react";
import appRoutes from "../../appRoutes";
import {useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BMI from "../../images/bmi.JPG";
import Calendar from "../../images/Calendar.JPG";
import Calc from "../../images/calc.JPG"
import client from "../../api";
import {setUser} from "../../store/userSlice";

const ProfilePurchase = () => {
    const navigator = useNavigate();

    // const handleBuyClick = () => {
    //     navigator(appRoutes.profile.path);
    // };

    //const [userId, setUserId] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const handleBuyClick = async () => {
        const token = localStorage.getItem("TOKEN");
        console.log(token)
        if (token) {
            client.post("auth/buypremium", {},{
                headers: { Authorization: `Bearer ${token}` },
            }).then(res => {
                console.log(res.data);
                // localStorage.setItem("TOKEN", res.data.token);
                dispatch(setUser({...user, isPremium: true}))
            }).catch(e => {
                // localStorage.clear("TOKEN");
                 console.log(e);
            })
        }
    };

    // const handleUserIdChange = (event) => {
    //     setUserId(event.target.value);
    // };

    return (
        <div className="text-white">
            <Navbar />
            <div className="bg-exfon bg-fixed">
            <div className="w-full py-16 px-4">
                <h1 className="flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold pb-20">Отримай власний профіль та стеж за своєю активністю!</h1>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Калькулятор ІМТ твого тіла</h2>
                        <div className=""><p>ІМТ є важливим показником для оцінки здоров'я та фітнесу.
                            Він визначається на основі вашої ваги та зросту і дозволяє вам зрозуміти,
                            чи є ваша вага занадто високою, низькою або в нормі.</p>
                            <p> ІМТ вираховується автоматично на основі введених даних
                                і показує результат в зручному форматі. Ви можете використовувати
                                цю функцію, щоб відстежувати свій прогрес та досягнення в галузі
                                фітнесу та здоров'я.</p>
                            <p>➭ Точний розрахунок ІМТ</p>
                            <p>➭ Відстежуйте свій прогрес</p>
                            <p>➭ Зручно та доступно</p></div>
                    </div>
                    <img className="w-[250px] h-[300px] mx-auto my-4 rounded-2xl" src={Calc} alt="/"/>
                    <img className="w-[800px] h-[300px] mx-auto my-4 rounded-2xl" src={BMI} alt="/"/>
                    <div className="pl-8 pt-5"><p>Графік ІМТ дає можливість відстежувати свій прогрес та здоров'я.
                        Він дозволяє виявляти зміни в Індексі Маси Тіла та діяти відповідно
                        для покращення свого здоров'я та форми.</p>
                    <p>➭ Візуальне відображення динаміки</p>
                    <p>➭ Оцінка ефективності програми тренувань</p>
                    <p>➭ Раннє виявлення проблем з здоров'ям</p></div>
                </div>

                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 p-6">
                    <div className="flex flex-col">
                        <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Календар активності</h2>
                        <p>Відстежуйте свої фізичні активності протягом тижня, місяця та року.
                            Календар допомагає встановити регулярний графік
                            фітнесу та дозволяє зберігати історію своїх тренувань. </p>
                    </div>
                    <img className="w-[500px] h-[300px] mx-auto my-4 rounded-2xl" src={Calendar} alt="/"/>
                </div>
                <div className="flex justify-center max-w-[1240px] mx-auto pt-9">
                    <h2 className="md:text-xl sm:text-xl text-2xl text-gray-300">Придбання власного профілю на нашому сайті дозволяє отримати доступ до розширених функцій,
                        які допомагають підвищити ефективність тренувань та досягнути поставлених цілей. Користувачі можуть вираховувати точний ІМТ, планувати та
                        відстежувати свої фізичні активності.</h2>
                    <button onClick={handleBuyClick} className="bg-[#FF7F50] w-[700px] rounded-md font-bold text-black my-6 mx-auto md:mx-0 py-3">Отримати профіль</button></div>
            </div>
                </div>
            <Footer />
        </div>
    );
}

export default ProfilePurchase;