const UserModel = require('../model/user')

const createUser = async (req ,res) => {
    try{
        const {name ,email ,password, age , role , isActive }=req.body

        if(!name || !email || !password || !age || !role || !isActive){
            return res.json({success : false  , message : "All filed are required"})
        }

        const isExiting = await UserModel.findOne({email})

        if(isExiting){
            return res.json({success : false , message : "Already account exits please try again later"})
        }

        const newUser = new UserModel({
            name,
            email,
            password,
            age,
            role,
            isActive
        })

        const save = await newUser.save()

        if(!save){
            return res.json({success : false , message : "Failed to create please try again later" })
        }

        return res.json({success : true , message : "Account cretaed successfully" , save})

    }
    catch(err){
        console.log("Error in create user",err)
    }
}


module.exports = {createUser}