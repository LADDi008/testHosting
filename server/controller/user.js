const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "shh";
 
const createUser = async (req,res)=>{
    const userData = req.body;
    const {name,email,password} = userData;
    const saltRound = 10
    const existedEmail = await User.findOne({email,email});

    try {

        if(existedEmail){
            res.status(409).json({message:"Email already exsisted"})
            return;
        }

        if(!userData){
            return res.status(400).json({ error: "User data is required" });
        }else{

            const token = jwt.sign({name:name,email:email},secretKey);

            const bycryptPassword = await bcrypt.hash(password,saltRound);

            const newUser = new User({
                name,
                email,
                password:bycryptPassword,
                token,
            });
            const savedUser = await newUser.save();
            res.status(201);

            res.json({message:"New user created successfully!", token,savedUser});
            console.log("New user created successfully!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}


const allUser = async(req,res)=>{

    try {
        const data = await User.find();
        res.status(200).json(data);        
    } catch (error) {
        res.json({message:"error getting data",error})
        console.log(error);
    }

}



module.exports = {createUser,allUser};