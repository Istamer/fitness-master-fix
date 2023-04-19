import React, {useState, useRef} from "react";
import icon from './icon.jpg';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {FaUser} from "react-icons/fa";
import {useSelector} from "react-redux";
import Bmicalc from "../../components/Bmicalc";
import Calendar from "../../components/Calendar";


const Profile = () => {
    const user = useSelector(state => state.appUser.user);

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-around bg-white py-16 px-4">
                <div className="profile_img text-center p-4">
                    <div className="flex flex-column justify-center pl-32 p-2">
                        <img
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "solid LightGrey",
                        }}
                        src={icon} alt=""/>

                        <li className="p-4 flex font-bold">{user?<><FaUser/>{user.name}</>:"User"}</li>
                        </div>
                </div>
                <div className="w-[800px]"><Calendar /></div>
            </div>
            <div className="flex justify-center bg-gray-200 pb-10"><Bmicalc /></div>
            <Footer />
        </div>
    )
}

export default Profile