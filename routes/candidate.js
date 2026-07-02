const express = require("express");
const router = express.Router();

const { createCandidate } = require("../controller/canditate");

router.post("/create-candidate", createCandidate);

module.exports = router;