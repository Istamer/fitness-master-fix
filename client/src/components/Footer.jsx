import React from "react";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
}
from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400">
            <div>
            <h1 className="w-full text-3xl font-bold text-[#FF7F50]">FitnessTrainer</h1>
            <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet lacinia sapien vel dapibus.
                Sed auctor non justo pellentesque venenatis.</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaGithubSquare size={25}/>
                <FaInstagramSquare size={25}/>
                <FaFacebookSquare size={25}/>
                <FaTwitterSquare size={25}/>
            </div>
            </div>
            <div className="lg:col-span-3 flex justify-between">
                <div>
                    <ul>
                         <li className="py-2 text-sm">About</li>
                         <li className="py-2 text-sm">Blog</li>
                         <li className="py-2 text-sm">Jobs</li>
                         <li className="py-2 text-sm">Careers</li>
                </ul>
                </div>
                <div>
                    <ul>
                        <li className="py-2 text-sm">Marketing</li>
                        <li className="py-2 text-sm">Commerce</li>
                        <li className="py-2 text-sm">Analytycs</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="py-2 text-sm">Pricing</li>
                        <li className="py-2 text-sm">Supports</li>
                        <li className="py-2 text-sm">Documentation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

