import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {


    return <>

        <nav className="bg-gradient-to-b from-red-300 via-orange-300 to-yellow-300 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <NavLink exact to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MERN</span>
                </NavLink>
                <div className="flex flex-row gap-x-4 md:order-2">
                    <NavLink exact to="/logIn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</NavLink>
                    <NavLink exact to="/logOut" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</NavLink>

                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink exact to="/" style={({ isActive }) => ({
                                color: isActive ? "red" : "blue",
                                fontSize: isActive ? "20px" : "15px",
                                fontWeight: isActive ? "bold" : "normal",
                            })} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" style={({ isActive }) => ({
                                color: isActive ? "red" : "blue",
                                fontSize: isActive ? "20px" : "15px",
                                fontWeight: isActive ? "bold" : "normal",
                            })} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/secretPage" style={({ isActive }) => ({
                                color: isActive ? "red" : "blue",
                                fontSize: isActive ? "20px" : "15px",
                                fontWeight: isActive ? "bold" : "normal",
                            })} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Secret Page</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/registration" style={({ isActive }) => ({
                                color: isActive ? "red" : "blue",
                                fontSize: isActive ? "20px" : "15px",
                                fontWeight: isActive ? "bold" : "normal",
                            })} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/toDoList" style={({ isActive }) => ({
                                color: isActive ? "red" : "blue",
                                fontSize: isActive ? "20px" : "15px",
                                fontWeight: isActive ? "bold" : "normal",
                            })} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">To Do List</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </>
}