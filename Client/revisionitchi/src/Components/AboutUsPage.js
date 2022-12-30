import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function AboutUsPage() {

    const {getFirstName} = useParams();
    // const getLocation = useLocation();
    const navigate = useNavigate ();
    


    return <>
        <div className="h-screen w-screen pt-20">
            <div className="bg-indigo-700 w-full h-full p-28 flex items-center justify-center">
                <div className="max-w-3xl flex h-full m-4 md:m-6">
                    <div className="relative group sm:w-full md:w-1/2 hover:bg-indigo-800 border-t border-l border-b border-r md:border-r-0 bg-opacity-5 transition-all duration-300">
                        <ul className="flex p-4 md:p-6 space-x-6 text-white">
                            <li className="cursor-pointer">Platform</li>
                            <li className="cursor-pointer">Services</li>
                            <li className="cursor-pointer">FAQ</li>
                        </ul>
                        <h1 className="pl-4 md:pl-8 mt-6 md:mt-8 text-2xl text-white font-serif transform group-hover:translate-x-6 duration-300 uppercase leading-snug">Fintech: <br />Top 5 mobile<br /> payment apps</h1>
                        <p className="absolute bottom-1 p-4 md:pl-8 text-white text-xs">Get our app and link your existing cards to Linkr.<br /> and  pay with your cell phone on the go.<br /> Browse, spending, set limits, and more. Link it up.</p>
                        <h1>You Entered {getFirstName}...</h1>
                        <button className="absolute z-50 bottom-32 md:bottom-10 right-0 transform translate-x-12 flex items-center justify-center w-20 h-20 rounded-full bg-white group-hover:bg-green-200 text-indigo-800 group-hover:text-white font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none" onClick={()=>{
                            navigate("/");
                        }}>Get It!</button>
                    </div>
                    <div className="md:w-1/2 hidden md:block bg-indigo-700">
                        <img src="https://images.unsplash.com/photo-1546621083-17f1e50980e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80" alt="mobile payment" className="h-full" />
                    </div>
                </div>
            </div>
        </div>

    </>
}