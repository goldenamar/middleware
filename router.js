const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('./controller');

const middleWare = (req, res, next) => {
    console.log('hi');
    next();
}

router.post("/sign-up", createUser);

module.exports = router