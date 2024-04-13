const {Users} = require('../models/users.model');

const registerUser =  async (req, res) => {
    const {name, password, email} = req.body;
    const findUser = await Users.findOne({email});
    if(findUser) return res.status(400).json({message: `User already exists with this email: ${email}`});


    const newUser = await Users.create({
        ...req.body,
        // password:
    });

    res.status(201).json({message: "User registered", newUser})

    // <============= Install bcryptjs and hash the password============>
};

const getUserById = async(req, res) => {
    try{
       
    }
    catch(err){
        throw new Error(err)
    }
}


module.exports = {registerUser}