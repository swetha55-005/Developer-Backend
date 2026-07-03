const express = require('express');

const router = express.Router();

const User = require('./userRouter');
const Candidate = require('./candidateRouter');

router.use(User);
router.use(Candidate);

module.exports = router;


