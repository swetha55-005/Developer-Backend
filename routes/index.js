const express = require('express')



const router = express.Router()


const User = require('./userRouter')
const candidate =require("./candidate")





router.use(User)
router.use(candidate)



module.exports = router


