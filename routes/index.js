const express = require('express')



const router = express.Router()


const User = require('./userRouter')





router.use(User)



module.exports = router


