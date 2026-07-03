const express = require('express')
const { createUser , fetchUser } = require('../controller/user')

const router = express.Router()


router.post('/create-user', createUser)
router.get('/fetch-user', fetchUser)



module.exports = router