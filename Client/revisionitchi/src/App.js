import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ToDoList from "./Components/ToDoList";

import RegistrationPage from "./Components/RegistrationPage";
import HomePage from "./Components/HomePage";
import LogInPage from "./Components/LogInPage";
import ErrorPage from "./Components/ErrorPage";
import AboutUsPage from "./Components/AboutUsPage";
import SecretPage from "./Components/SecretPage";

import ReduxToDo from "./Components/ReduxToDo";

export default function App() {

  return <>


    {/* <h1 className="text-3xl text-red-500 text-semiBold text-center mt-14 font-mono">Hey There, Nice To See You Again!! 😃</h1> */}

   <Header />
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/registration" element={<RegistrationPage />}></Route>
      <Route exact path="/logIn" element={<LogInPage />}></Route>
      <Route exact path="/about/:getFirstName" element = {<AboutUsPage/>}></Route>
      <Route exact path="/secretPage" element = {<SecretPage/>}></Route>
      <Route exact path="*" element={<ErrorPage />}></Route>
      <Route exact path="/toDoList" element = {<ToDoList/>}></Route>
      <Route exact path="/reduxToDo" element = {<ReduxToDo/>}></Route>
      
    </Routes>




  </>
};