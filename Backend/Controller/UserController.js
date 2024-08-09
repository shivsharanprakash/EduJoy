import User from "../Models/User.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const JwtSecret = "ShivsharanPrakashVasant";

export const signin = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;
        if (password !== cpassword) {
            return res.status(400).json({ message: 'Password do not match ' });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exist' });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            name,
            email,
            password: hashPassword,
        });
        await createUser.save();
        return res.status(201).json({ message: 'User Created successfully' });

    } catch (error) {
        console.log('Error:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });
    };
};

export const login =async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Enter Valid Credentials'});
        }
        const isMatch=await bcryptjs.compare(password,user.password);
        const payload={userId:user._id};
        const authToken=jwt.sign(payload,JwtSecret,{expiresIn:'1h'});
        res.status(200).json({
            messsage:'Login Successfully',
            user:{
                _id:user.id,
                name:user.name,
                email:user.email
            },
            authToken
        });     
    } catch (error) {
        console.log("error:",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

