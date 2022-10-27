const { Router } = require('express');
const express = require('express');
const UserModel = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email } = req.body;

        // Check if email already exists
        if (await UserModel.findOne({ email })) {
            return res.status(400).json({
                error: true,
                message: "A user already exists with this email!"
            });
        };

        const user = await UserModel.create(req.body);

        return res.status(200).json({
            user,
            error: false,
            message: "User registration successfully!"
        });
    } catch (error) {
        throw res.status(400).json({
            error: true,
            message: error.message
        })
    }
});

router.get('/consult', async (req, res) => {
    try {
        const { name } = req.body;

        const user = await UserModel.findOne({ name });

        if (!user) {
            return res.status(400).json({
                error: true,
                message: "This user is not register!"
            });
        }
        return res.status(200).json({
            user,
            error: false,
            message: "The user has been found!"
        });

    } catch (error) {
        throw res.status(400).json({
            error: true,
            message: error.message
        });
    }
});


router.patch('/consult', async (req, res) => {
    try {
        const { name } = req.body;

        let user = await UserModel.findOne({ name });

        if (!user) {
            return res.status(400).json({
                error: true,
                message: "This user is not register!"
            });
        }

        await UserModel.updateOne(req.body);

        user = await UserModel.findOne({ name });

        return res.status(200).json({
            user,
            error: false,
            message: "The user has been updated successfully"
        })
        
    } catch (error) {
        throw res.status(400).json({
            error: true,
            message: error.message
        });
    }
})

router.delete('/consult', async(req, res) => {
    try {
        const { name } = req.body;

        const user = await UserModel.findOne({ name });

        if(!user) {
            return res.status(400).json({
                error: true,
                message: "User not found"
            })
        }

        await UserModel.deleteOne(req.body);

        return res.status(200).json({
            user,
            error: false,
            message: "User deleted successfully!"
        })

    } catch (error) {
        throw res.status(400).json({
            error: true,
            message: error.message
        });
    }
})

module.exports = router;