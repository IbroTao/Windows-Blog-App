const {Users} = require('../models/users.model');

const registerUser =  async (req, res) => {
    const {email, password, name} = req.body;
    const findUser = await Users.findOne({email});
    if(findUser) return res.status(400).json({message: `User already exists with this email: ${email}`});

    // const findUserByName = await Users.findOne({name});
    // if(findUserByName) return res.status(400).json({message: `User already exists with this name: ${name}`});


    const newUser = await Users.create({
        name,
        email,
        password
    });

    res.status(201).json({message: "User registered", newUser})

    // <============= Install bcryptjs and hash the password============>
};

const getUserById = async(req, res) => {
    try{
       const {id} = req.params;
       const user = await Users.findById(id);
       if(!user) return res.status(404).json({message: "User not found"})

       res.status(200).json({user})
    }
    catch(err){
        throw new Error(err)
    }
}

const getAllUsers = async(req, res) => {
    try {
       const users = await Users.find();
       if(!users) return res.status(404).json({msg: "No Users Found"})
    
       return res.status(200).json({users})
    } catch (error) {
        throw new Error(err);
    }
}

module.exports = {registerUser, getUserById, getAllUsers}