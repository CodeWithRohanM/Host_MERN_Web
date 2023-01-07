const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/ReviseTest/.env" });
const userData = require("../Models/dataSchema");
const alert = require("alert");


const AuthenticateUser = async (req, res, next) => {

    try {

        const getRegistrationCookie = await req.cookies.RegisterCookieItchi;
        const getLogInCookie = await req.cookies.SignInCookieItchi;
        console.log("Auth Sign Up Cookie = " + getRegistrationCookie);
        console.log("Auth Sign In Cookie = " + getLogInCookie);


        if (getRegistrationCookie) {
            if (getLogInCookie) {
                const verifyUser = jwt.verify(getLogInCookie, process.env.SECRET_KEY);
                console.log(verifyUser);

                if (verifyUser) {
                    // const verifyUserData = jwt.verify(getLogInCookie, process.env.SECRET_KEY);

                    // const getData = await userData.findOne({ _id: verifyUser.id });
                    // console.log("Comppp = " + getData);
                    // req.getLogInCookie = getLogInCookie;
                    // req.getData = getData;
                    return res.status(201).json("Verified User!!");
                    // next();

                }
                else {
                    return res.status(401).json("Could Not Verify User, Please Try Again..")
                }

            }
            else {
                return res.status(401).json("Please Log In First To Access The Page!!")
            }

        } else {
            return res.status(401).json("Please Register First To Access The Page!!")
        }




    }
    catch (err) {
        return res.status(401).json("Something Went Wrong..");
    }

};


module.exports = AuthenticateUser;