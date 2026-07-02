const express = require("express");
const router = express.Router();

const { createCandidate ,fetchCandidates ,fetchCandidateByEmail} = require("../controller/canditate");

router.post("/create-candidate", createCandidate);

router.get('/fetch-candidates', fetchCandidates)

router.get('/fetch-candidate/:email', fetchCandidateByEmail)



module.exports = router;