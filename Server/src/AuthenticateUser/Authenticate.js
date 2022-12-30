const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/ReviseTest/.env" });
const userData = require("../Models/dataSchema");



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

                if(verifyUser)
                {
                    console.log("Verified User!!");
                }
                else
                {
                    console.log("Could Not Verify User");
                    res.render("SignInPage");
                }

            }
            else {
                // console.log("Sign In First");
                res.render("SignInPage");
            }

        } else {
            res.render("SignUpPage");
        }

        const verifyUserData = jwt.verify(getLogInCookie,process.env.SECRET_KEY);

        const getData = await userData.findOne({ _id: verifyUserData.id });

        req.getLogInCookie = getLogInCookie;
        req.getData = getData;
        next();
    }
    catch (err) {
    res.render("AloneErrorPage");
}

};


module.exports = AuthenticateUser;