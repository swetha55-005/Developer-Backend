const express = require('express')
const { createUser, fetchUser } = require('../controller/user')
const router = require('.')

console.log("createUser:", createUser)
console.log("fetchUser:", fetchUser)
module.exports =router