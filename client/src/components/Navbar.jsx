import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import appRoutes from "../appRoutes";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { FaUser } from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const user = useSelector(state => state.appUser.user);
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onLogoutClick = () => {
        dispatch(deleteUser());
        localStorage.removeItem("TOKEN");
        navigator(appRoutes.login.path);
        console.log("Logout")
    }

    const handleNav = () => {
        setNav(!nav)
    }

    const onBuyClick = () => {
        navigator(appRoutes.buy.path);
        setIsModalOpen(false);
    }

    const onCancelClick = () => {
        setIsModalOpen(false);
    }



    return (
        <div className="flex justify-between items-center h-15 max-w-[1480px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#FF7F50]"><Link to={appRoutes.home.path} replace>FitnessTrainer</Link></h1>
            <ul className="hidden md:flex">
                <li className="p-4 cursor-pointer"><Link to={appRoutes.about.path} replace>About</Link></li>
                {
                    user ? <li className="p-4 cursor-pointer"><Link to={appRoutes.gym.path} replace>YourGym</Link></li> : null
                }
                {
                    user ? <li className="p-3 m-1 cursor-pointer rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]" onClick={onLogoutClick}>Logout</li> :
                        <li className="p-3 m-1 cursor-pointer rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]"><Link to={appRoutes.login.path} replace>Login</Link></li>
                }

                {/*{*/}
                {/*   user && user.role === "USER"  ? <li className="p-4 cursor-pointer flex gap-2 text-[#FF7F50]" onClick={() => setIsModalOpen(true)}>*/}
                {/*        <div className="flex"><FaUser className="m-1"/>*/}
                {/*            <div>Profile</div>*/}
                {/*        </div>*/}
                {/*    </li> : null*/}
                {/*}*/}

                {
                    user && user.role === "USER"  ? <Link to={user.isPremium ? appRoutes.profile.path : appRoutes.profilePurchase.path} className="p-4 cursor-pointer flex gap-2 text-[#FF7F50]"> Profile </Link> : null
                }
                {
                    user && user.role === "ADMIN" ? <Link to={appRoutes.admin.addEx.path} className="p-3 m-1 cursor-pointer w-[95px] rounded-md bg-[#f02742] focus:bg-[#e91e6c] hover:bg-[#ab1010]">Admin</Link> : null
                }

            </ul>
            {/*{isModalOpen &&*/}
            {/*    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">*/}
            {/*        <div className="bg-white p-8 rounded-lg">*/}
            {/*            <p className="mb-4 text-black">Особистий профіль доступний тільки преміум користувачам,</p>*/}
            {/*            <p className="mb-4 text-black">чи бажаєте ви переглянути умови?</p>*/}
            {/*            <div className="flex justify-end gap-4">*/}
            {/*                <button className="bg-[#FF7F50] text-white px-4 py-2 rounded-md hover:bg-[#FFA07A]" onClick={() => {*/}
            {/*                    setIsModalOpen(false);*/}
            {/*                    navigator(appRoutes.profilePurchase.path);*/}
            {/*                }}>Купити</button>*/}
            {/*                <button className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400" onClick={() => setIsModalOpen(false)}>Назад</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*}*/}


            {/*<div onClick={handleNav} className="block md:hidden">*/}
            {/*    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}*/}
            {/*</div>*/}
            {/*<div className={nav ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>*/}
            {/*    <h1 className="w-full text-3xl font-bold text-[#FF7F50] m-4">FitnessTrainer</h1>*/}
            {/*    <ul className="pt-15 uppercase">*/}
            {/*        <li className="p-4 cursor-pointer border-b border-gray-500 flex gap-2"><Link to={appRoutes.profile.path} replace>{user ? <><FaUser />{user.name}</> : "user"}</Link></li>*/}
            {/*        <li className="p-4 cursor-pointer border-b border-gray-500"><Link to={appRoutes.about.path} replace>About</Link></li>*/}
            {/*        <li className="p-4 cursor-pointer border-b border-gray-500"><Link to={appRoutes.gym.path} replace>Your Gym</Link></li>*/}
            {/*        <li className="p-4 cursor-pointer w-[80px] rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]"><Link to={appRoutes.login.path} replace>Login</Link></li>*/}
            {/*        <li className="p-4 cursor-pointer w-[95px] rounded-md bg-[#FF7F50] focus:bg-[#FF7F50] hover:bg-[#FFA07A]" onClick={onLogoutClick}>Logout</li>*/}

            {/*        <li></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    )
}

export default Navbar