const express = require("express");
const app = express();
const cors = require("cors");

const alert = require("alert");

require("dotenv").config({ path: "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/Server/.env" });
const hbs = require("hbs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//AUTHENTICATION OF USER TO ACCESS SECRET PAGE
const authenticate = require("./src/AuthenticateUser/Authenticate");
const cookieParser = require("cookie-parser");
app.use(cookieParser());



// CONNECTIONS & SCHEMA
require("./src/DB/connection")
const userData = require("./src/Models/dataSchema");


//ROUTERS
const userRouter = require("/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/Server/src/Routers/userRouters.js");
app.use(userRouter);


//POSTMAN READING DATA 
app.use(express.json());


// RENDERING HOME PAGE
// app.use(express.static("/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/ReviseTest/public"));

// USING VIEW ENGINE
// app.set("view engine", "hbs");
// app.set("views", "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/Server/views");
// hbs.registerPartials("/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/Server/Partials");


// SETTING ROUTES
// app.get("/", (req, res) => {
//     res.render("indexFile");
// });

// app.get("/about", (req, res) => {
//     res.render("aboutUsPage");
// });

// app.get("/signUp", (req, res) => {
//     res.render("SignUpPage");
// });

// app.get("/signIn", (req, res) => {
//     res.render("SignInPage");
// })




// TAKING URL(ONLINE FORM INPUTS)
app.use(express.urlencoded({ extended: false }));

app.use(cors());


// USER REGISTRATION
app.post("/register", async (req, res) => {

    try {
        const getPassword = req.body.password;
        const getConfirmPassword = req.body.confirmPassword;
        const getEmail = req.body.email;

        const userExists = await userData.findOne({ email: getEmail });

        if (userExists) {
            return res.status(401).json("User Already Exists, Please Log In to proceed..");
        }
        else {

            if (getPassword === getConfirmPassword) {
                const getFirstName = req.body.firstName;
                const getLastName = req.body.lastName;
                const getEmail = req.body.email;
                const getPassword = req.body.password;
                const getConfirmPassword = req.body.confirmPassword;
                const getPhone = req.body.phone;
                // const { firstName, lastName, email, password, confirmPassword, phone } = req.body;

                const insertData = new userData({
                    firstName: getFirstName,
                    lastName: getLastName,
                    email: getEmail,
                    password: getPassword,
                    confirmPassword: getConfirmPassword,
                    phone: getPhone,
                });

                const signUpToken = await insertData.createSignUpToken();
                console.log("Sign Up Token = " + signUpToken);

                res.cookie("RegisterCookieItchi", signUpToken);


                const getData = await insertData.save();
                // console.log("Data = " + getData);
                return res.status(201).json("Registered Successfully!!");
                // res.render("indexFile");
            }
            else {
                res.status(401).json("Enter Matching Passwords..");
            }
        }

    } catch (err) {
        return res.status(401).json("Something Went Wrong, Kindly Try Again..");
    }

});






// USER LOGIN

app.post("/signIn", async (req, res) => {
    const getEmail = req.body.email;
    const getPassword = req.body.password;


    try {
        const getData = await userData.findOne({ email: getEmail });
        if (getData) {
            console.log("LOG IN DATA = " + getData);

            const validatingUser = await bcrypt.compare(getPassword, getData.password);
            console.log(validatingUser);


            if (validatingUser) {

                const signInToken = await getData.createSignInToken();
                console.log("Sign In Token = " + signInToken);

                res.cookie("SignInCookieItchi", signInToken);

                return res.status(201).json("Logged In Successfully 😸😸😸");
            }
            else {
                return res.status(401).json("Wrong Password, Please Try Again..");
            }
        }
        else {
            return res.status(401).json("Wrong Email, Please Try Again..");
        }
    } catch (err) {
        return res.status(401).json("Wrong Email..");
        // res.render("ErrorPage");
    }

});




// //AUTHENTICATE USER SIGNIN to Access Secret Page
app.get("/secretPage", authenticate, (req, res) => {
    console.log("Inside Secret App Now!!");
    res.status(200).send(req.getData);
})




//SIGN OUT PAGE
// app.get("/signOut", authenticate, async (req, res)=>{
//     try{
//         const getData = req.getData;
//         const getCurrentLogInToken = req.getLogInCookie;

//         getData.tokenValue = getData.tokenValue.filter((curValue, index)=>{
//             return getCurrentLogInToken !== curValue.firstToken;
//         });

//         await getData.save();

//         res.clearCookie("SignInCookieItchi");
//         res.status(201).json("Cookie Cleared..");


//         // res.render("indexFile");
//     }catch(err){
//         res.status(404).json(err);
//     }

// });








app.listen(process.env.PORT, "127.0.0.1", () => {
    console.log("Server Is On Fire!! 🔥🔥");
    console.log("Server Running at PORT " + process.env.PORT);
});