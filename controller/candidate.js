const CandidateModel = require("../model/candidate");

const createCandidate = async (req, res) => {
    try {

        const {
            name,
            email,
            phone,
            age,
            gender,
            address,
            skills,
            education,
            experience,
            social,
            projects,
            certifications,
            languages,
            resume,
            profileImage,
            expectedSalary,
            noticePeriod,
            isActive
        } = req.body;

        console.log("req.body", req.body)

        
        if (!name || !email || !phone || !age) {
            return res.json({
                success: false,
                message: "All required fields are mandatory"
            });
        }

        
        const isExisting = await CandidateModel.findOne({ email });

        if (isExisting) {
            return res.json({
                success: false,
                message: "Candidate already exists"
            });
        }

        const newCandidate = new CandidateModel({
            name,
            email,
            phone,
            age,
            gender,
            address,
            skills,
            education,
            experience,
            social,
            projects,
            certifications,
            languages,
            resume,
            profileImage,
            expectedSalary,
            noticePeriod,
            isActive
        });

        const save = await newCandidate.save();

        if (!save) {
            return res.json({
                success: false,
                message: "Failed to create candidate"
            });
        }

        return res.json({
            success: true,
            message: "Candidate created successfully",
            save
        });

    } catch (err) {
        console.log("Error in create candidate:", err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const fetchCandidate = async (req, res) => {
    try{
        const candidate = await CandidateModel.find({})
        if(!candidate){
            return res.json({success:"false", message:"candidate not found"})
        }
        return res.json({success:"true",message:"candidate fetch successfully", data:candidate})
    }

    catch(err)
        {
            console.log("error in fetch candidate")
            return res.json({success:"false",message:"error in fetch candidate"})

        }
    

    
   
}

module.exports = { createCandidate , fetchCandidate };