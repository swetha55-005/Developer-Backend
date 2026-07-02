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

module.exports = {
    createCandidate
};