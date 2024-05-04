const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginUser = async(req,res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({email: email});

    if(!user) {
        return res.status(400).send("User does not exist");
    }

    const isPasswordMatchingFromDb = await bcrypt.compare(
        password,
        user.password
    );

    if (isPasswordMatchingFromDb) {
        const token = jwt.sign({userId: user._id}, "randomsecret");
        return res.status(200).json({
            user: user,
            token: token,
        })
    }

    return res.status(401).send("Incorrect login credentials");
};

const signupUser = async (req, res) => {
    const { email, password, name } = req.body;
    const emailExists = await UserModel.findOne({ email: email });
    if (emailExists) {
        return res.status(400).send("User Already Exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        name: name,
        email: email,
        password: hashpassword,
    });
    try {
        const savedUser = await newUser.save();

        const token = jwt.sign({ userId: savedUser._id }, "randomsecret");
        return res.status(200).json({
            user: savedUser, 
            token: token,
        });
    } catch (error) {
        return res.status(500).send("Error saving user: " + error.message);
    }
}

module.exports ={
    loginUser,
    signupUser
}