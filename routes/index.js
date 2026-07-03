const express = require('express')



const router = express.Router()


const User = require('./userRouter')


const Candidate = require('./candidateRouter')
const candidate = require('../model/candidate')



router.use(User)
router.use(Candidate)



module.exports = router


