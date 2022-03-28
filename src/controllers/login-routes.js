const express = require('express');
const router = express.Router();
const userRepository = require('../models/user-repository');
const jwt = require('express-jwt');
const argon2 = require("argon2");

router.post('/', async (req, res) => {
    const user = userRepository.getUserByFirstName(req.body.firstName)
    //jwt({secret: 'sdhflsjf5', })
    if (await userRepository.checkUser(user, req.body.password)) {
        console.log("oui")
    } else {
        console.log("non")
    }
    res.send()
});

exports.initializeRoutes = () => {
    return router;
}
