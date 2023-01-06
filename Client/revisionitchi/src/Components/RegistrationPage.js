import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function RegistrationPage() {

    const navigate = useNavigate();

    const [datas, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });


    const userDetails = (event) => {
        try {
            const getName = event.target.name;
            const getValue = event.target.value;

            setData((prevValue) => {
                return {
                    ...prevValue,
                    [getName]: getValue,
                }
            })

        } catch (err) {
            console.log(err);
        }

    }


    const sendUserData = async (event) => {
        try {
            event.preventDefault();

            const getFirstName = datas.firstName;
            const getLastName = datas.lastName;
            const getEmail = datas.email;
            const getPassword = datas.password;
            const getConfirmPassword = datas.confirmPassword;
            const getPhone = datas.phone;




            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: getFirstName,
                    lastName: getLastName,
                    email: getEmail,
                    password: getPassword,
                    confirmPassword: getConfirmPassword,
                    phone: getPhone,
                })
            });

            const response = await data.json();
            console.log("Statys = " + response);
            
            if (data.status === 201) {
                window.alert(response);
                navigate("/");
            }
            else{
                window.alert(response);
            }
            // if(response.status === 404)
            // {
            //     navigate("/registration");
            // }
            // else if(response.status === 201)
            // {
            // console.log(response);
            // navigate("/");
            // }

        } catch (err) {
            window.alert("Something Went Wrong, Please Try Again..")
            console.log(err);
        }

    }




    return <>


        <div className="h-full bg-gray-50 mt-48">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">start your 14-day free trial</a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" method="POST" onSubmit={sendUserData}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>

                                <input id="email-address" name="firstName" type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name" value={datas.firstName} onChange={userDetails} />
                            </div>

                            <div>

                                <input id="email-address" name="lastName" type="text" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" value={datas.lastName} onChange={userDetails} />
                            </div>
                            <div>
                                <input id="email-address" name="email" type="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" value={datas.email} onChange={userDetails} />
                            </div>
                            <div>

                                <input id="password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" value={datas.password} onChange={userDetails} />
                            </div>
                            <div>

                                <input id="password" name="confirmPassword" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirm Password.." value={datas.confirmPassword} onChange={userDetails} />
                            </div>
                            <div>

                                <input id="email-address" name="phone" type="number" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Phone Number.." value={datas.phone} onChange={userDetails} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
}