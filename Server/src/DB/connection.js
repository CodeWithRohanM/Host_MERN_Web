const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config({path: "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/Server/.env"});

const URI = process.env.CONNECT_ONLINE;

mongoose.connect(URI)
.then(()=>{
    console.log("Database Connection Successful!!");
})
.catch((err)=>{
    console.log(err);
});


