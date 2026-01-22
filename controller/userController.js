const users = require('../model/userModel');
const jwt = require("jsonwebtoken");

// Register by users as patient through public portal
exports.registerController = async (req, res) => {
    console.log("-------------Inside registerController-------------");
    console.log(req.body);
    
    const { name, email, phone, passwordHash } = req.body;
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
           res.status(409).json("Account already exists. Please register using different email address!");
        }
        else {
            const newUser = await users.create({
                name, email, phone, passwordHash, role : 'patient', isActive : true
            })
            res.status(200).json(newUser);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// admin and review_specialist login based on role
exports.loginController = async (req, res) => {
    console.log("-------------Inside loginController-------------");
    console.log(req.body);
    
    const { email, passwordHash} = req.body;
    try {
        const existingUser = await users.findOne({ email })
        console.log("Existing user data")
        console.log("+++++++++");
        
        console.log(existingUser);
        
        if (existingUser) {
            if (passwordHash == existingUser.passwordHash) {
                const token = jwt.sign({ userMail : existingUser.email, role : existingUser.role }, process.env.JWT_SECRET_KEY)
                res.status(200).json({ user : existingUser, token })
            }
            else {
                res.status(401).json("Incorrect Email or Password!!")
            }
        }
        else {
            res.status(404).json("Something went wrong. Please try again!");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// add user
exports.addUserController = async (req, res) => {
    console.log("-------------Inside addUserController-------------");

    const { name, email, phone, passwordHash, role, isActive, createdAt, updatedAt } = req.body;

    try {
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            res.status(409).json("The user already exists. Try with a different Email")
        }
        else {
            const newUser = await users.create({
                name, email, phone, passwordHash, role, isActive, createdAt, updatedAt
            })
            res.status(200).json(newUser)
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

}

// get all users
exports.getAllUsersController = async (req, res) => {
    console.log("-------------Inside getAllUsersController-------------");
    try {
        const allUsers = await users.find();
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// get user by id
exports.getUSerByIdController = async (req, res) => {
    console.log("-------------Inside getUSerByIdController-------------");
    const {id} = req.params
    try {
        const userDetails = await users.findById({_id:id});
        res.status(200).json(userDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// edit user
exports.editUSerController = async (req, res) => {
    console.log("-------------Inside editUSerController-------------");

    const {id} = req.params
    const { name, email, phone, passwordHash, role, isActive, createdAt, updatedAt } = req.body;
    
    try {
        const userDetails = await users.findByIdAndUpdate({_id:id},{name, email, phone, passwordHash, role, isActive, createdAt, updatedAt},{new : true});
        res.status(200).json(userDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

// delete user
exports.removeUSerController = async (req, res) => {
    console.log("-------------Inside removeUSerController-------------");
    const {id} = req.params
    try {
        const userDetails = await users.findByIdAndDelete({_id:id});
        res.status(200).json(userDetails)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}
