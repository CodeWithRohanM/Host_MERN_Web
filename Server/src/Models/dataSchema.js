const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/RevisionMERN/ReviseTest/.env" });

const documentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        uppercase: true,
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                res.status(404).send("Email Dekh Leti Ek Baar....");
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    tokenValue: [{
        firstToken: {
            type: String,
            required: true,
        },
    }]
});


documentSchema.methods.createSignUpToken = async function () {
    try {
        const SignUpToken = jwt.sign({ id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokenValue = this.tokenValue.concat({ firstToken: SignUpToken });
        return SignUpToken;
    } catch (err) {
        console.log(err);
    }
};


documentSchema.methods.createSignInToken = async function () {

    try {
        const SignInToken = jwt.sign({ id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokenValue = this.tokenValue.concat({ firstToken: SignInToken });
        this.confirmPassword = await bcrypt.hash(this.password, 9);
        this.save();
        return SignInToken;
    } catch (err) {
        console.log(err);
    }

};




documentSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {

            this.password = await bcrypt.hash(this.password, 9);
            this.confirmPassword = undefined;
        }
        next();
    } catch (err) {
        console.log(err);
    }
});




const createCollection = new mongoose.model("RevisionTestItchi", documentSchema);

module.exports = createCollection;


