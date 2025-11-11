import User from "../schema/userSchema.js";

export const SignupUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser)
            return res.status(400).json({message:"User Alraedy Exists"});

        const newUser = new User({name, email, password});
        await newUser.save();

        res.status(200).json({
            message:"User Registered Successfully",
            user:newUser,
        })
    }
    catch(error){
        res.status(500).json({error:error.message, message:"Error in Signup"});
    }
}




export const LoginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const userRegistered = await User.findOne({email});
        if(!userRegistered)
            return res.status(400).json({message:"User Not Found, please signup"});

        if(userRegistered.password != password)
            return res.status(401).json({message:"Invalid Password"})

        res.status(200).json({message:"Login Succesfully", userRegistered});

    }
    catch(error){
        res.status(500).json({error:error.message, message:"Error in Login"});
    }
}

