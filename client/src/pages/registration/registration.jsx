import React, { useState } from "react";
import "./registration.css"
import client from "../../api"
import { Link, useNavigate } from "react-router-dom";
import appRoutes from "../../appRoutes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Registration = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: ""
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    };

    const registration = () => {
        const { name, email, password, rePassword } = user
        if (name && email && password && (password === rePassword)) {
            client.post("auth/registration", user)
                .then(res => {
                    alert(res.data.msg);
                    navigate(appRoutes.login.path);
                }).catch(e => {
                    console.log(e);
                    alert("Registration error");
                });
        } else {

            alert("invalid input")
        }
    }

    return (
        <div>
            <Navbar />
            <div className="h-screen flex bg-fon">
                <div className="m-auto w-auto border-1 border-black rounded-md bg-white bg-opacity-30 shadow-md shadow-gray-700 flex flex-col">
                    {console.log("User", user)}
                    <div className="text-3xl text-white bg-black py-2 px-4 font-bold bg-opacity-90">Registration</div>
                    <div className="mt-5 mx-3">
                        <input type="text"
                            name="name"
                            className="outline-none text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                            value={user.name}
                            placeholder="Enter your name"
                            onChange={handleChange} />
                        <div className="flex mt-5">
                            <input type="text"
                                name="email"
                                className="outline-none text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                                value={user.email}
                                placeholder="Enter your email"
                                onChange={handleChange} />
                        </div>
                        <div className="flex mt-5">
                            <input type="password"
                                name="password"
                                className="outline-none text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                                value={user.password}
                                placeholder="Enter password"
                                onChange={handleChange} />
                        </div>
                        <div className="flex mt-5">
                            <input type="password"
                                name="rePassword"
                                className="outline-none text-xl placeholder-slate-600 rounded-sm mx-2 px-3 py-2 border-2 border-gray-400"
                                value={user.rePassword}
                                placeholder="Re Enter password"
                                onChange={handleChange} />
                        </div>
                        <button type="button" className=" cursor-pointer w-full py-2 mt-5 shadow-sm shadow-black bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]" onClick={registration}>Register</button>

                        <div>or</div>
                    </div>
                    <Link to={appRoutes.login.path} replace className=" m-2 text-md text-indigo-800 ">Login</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registration
