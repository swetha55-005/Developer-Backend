const CandidateModel = require("../model/candidate");

const createCandidate = async (req, res) => {
    try {
        const allFields = req.body;


        if (Object.keys(allFields).length === 0) {
            return res.json({
                success: false,
                message: "All fields are required"
            });
        }

        const isExisting = await CandidateModel.findOne({
            $or: [
                { email: allFields.email },
                { phone: allFields.phone }
            ]
        });

        if (isExisting) {
            return res.json({
                success: false,
                message: "Already account exists"
            });
        }

        const newCandidate = new CandidateModel(allFields);
        const save = await newCandidate.save();

        return res.json({
            success: true,
            message: "Candidate created successfully",
            save
        });

    }  catch(err){
        console.log("Error in create user",err)
    }
};


const fetchCandidates = async (req ,res) => {
    try{

        const candidates = await CandidateModel.find({})

        if(!candidates){
           return res.json({success : "false" , message : "candidate not found"})
        }

        return res.json({success : "true" , message : "candidate fetch successfully" , data : candidates})

    }
    catch(err){
        console.log("Error in fetch candidates")
        return res.json({success : false , message : "Error in fetch candidates"})
    }
}

const fetchCandidateByEmail = async (req ,res) => {
      try{

        const {email} = req.params

      const candidate = await CandidateModel.findOne({ email })

        if(!candidate){
           return res.json({success : "false" , message : "candidate not found"})
        }

        return res.json({success : "true" , message : "candidate fetch successfully" , data : candidate})

    }
    catch(err){
        console.log("Error in fetch candidate")
        return res.json({success : false , message : "Error in fetch candidate"})
    }  
}



module.exports = {
    createCandidate,
    fetchCandidates,
    fetchCandidateByEmail
};