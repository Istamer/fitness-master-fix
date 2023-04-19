import React, { useState } from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FormData from 'form-data'
import client from "../../api";
import appRoutes from "../../appRoutes";
import {useNavigate} from "react-router-dom";

export const AddEx = () => {

    const navigate = useNavigate()
    const onButtonClick = () =>{
        navigate(appRoutes.delete.path)
    }

    const [file, setFile] = useState(null);

    const [inputValue, setInputValue] = useState({
        exname: "",
        category: "",
        description: ""
    });

    const handleChange = e => {
        const { name, value } = e.target
        setInputValue({
            ...inputValue,
            [name]: value
        });
    };

    const AddExercise = () => {
        const { exname, category, description } = inputValue
        if (exname && category && description && file) {
            const formData = new FormData();
            formData.append("picture", file);
            formData.append("exname", inputValue.exname);
            formData.append("category", inputValue.category);
            formData.append("description", inputValue.description);

            client.post("exercises/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then(response => {
                alert(response.data.msg);
            });
            //} else {
            //    alert("Err");
            // }
        }
    }
    return (
        <div>
            <Navbar />
            <div>
            <div className="h-screen flex bg-white">
                <form className="m-auto w-auto border-1 border-black rounded-md bg-lime-50 shadow-md shadow-gray-700 flex flex-col">
                    {console.log(inputValue, file)}
                    <div className="text-3xl text-white bg-black py-2 px-4 font-bold border-2 border-white rounded-md">Додати вправу</div>

                    <div className="mt-5 mx-3">
                        <input
                            type="file"
                            className="outline-none text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                            name="pictures"
                            onChange={(e) => { setFile(e.target.files[0]) }}
                            placeholder="Enter picture link"
                        />

                        <div className="flex mt-5">
                            <input
                                type="text"
                                className="outline-none w-full text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                                name="exname"
                                value={inputValue.exname}
                                onChange={handleChange}
                                placeholder="Enter name of exercise"
                            />
                        </div>
                        <div className="flex mt-5">
                            <select onChange={handleChange} name="category" className="w-full outline-none text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400">
                                <option hidden>Категорія</option>
                                <option value="Розминка">Розминка</option>
                                <option value="Руки">Руки</option>
                                <option value="Ноги">Ноги</option>
                                <option value="Прес">Прес</option>
                            </select>
                        </div>
                        <div className="flex mt-5">
                            <textarea
                                type="text"
                                className="outline-none w-full h-[200px] text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                                name="description"
                                value={inputValue.description}
                                onChange={handleChange}
                                placeholder="Enter exercise description"
                            />
                        </div>
                        <button type="button" className="w-full py-2 mt-5 shadow-sm shadow-black bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]" onClick={AddExercise}>Додати</button>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white">
                        <p className="md:text-2xl sm:text-xl text-gray-800 pt-8">Перейти до:</p>
                        <button onClick={() =>{onButtonClick()}} className="bg-black w-[350px] h-[100px] rounded-md font-bold text-white ml-3 my-6 py-7 focus:bg-[#FF6347] hover:bg-[#FF6347] opacity-90">Видалення</button>
                    </div>
                </form>
            </div>
            </div>
                <Footer />
        </div>
    )
}