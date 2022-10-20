const express = require('express');
const UserModel = require('../models/User');

const router =  express.Router();

router.post('/register', async(req, res) => {
    const { email } = req.body

    // Check if email already exists
    if (await UserModel.findOne(email)) {
        return res.status(400).json({
            error: true,
            message: "A user already exists with this email!"
        })
    }

    const user = await UserModel.create(req.body);

    return res.status(200).json ({
        user,
        error: false,
        message: "User registration successfully!"
    })
})
module.exports = router;