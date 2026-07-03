const express = require ('express')
const { createCandidate,fetchCandidate} = require('../controller/candidate')

const router = express.Router()

router.post('/create-Candidate', createCandidate)
router.get('/fetch-Candidate',fetchCandidate)


console.log("candidate router loaded")

module.exports = router