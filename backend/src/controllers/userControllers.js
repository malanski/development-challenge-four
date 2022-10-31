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
                message: "A patients already exists with this email!"
            });
        };

        const patients = await UserModel.create(req.body);

        return res.status(200).json({
            patients,
            error: false,
            message: "Patient registration successfully!"
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
        // const { name } = req.body;

        const patients = await UserModel.find();

        if (!patients) {
            return res.status(400).json({
                error: true,
                message: "This patient is not register!"
            });
        }
        return res.status(200).json({
            patients,
            error: false,
            message: "The patient has been found!"
        });

    } catch (error) {
        throw res.status(400).json({
            error: true,
            message: error.message
        });
    }
});
router.get('/consult/:id', async(req, res) => {
    try {
        const { id } = req.body;

        const patients = await UserModel.findOne({ id });

        if (!patients) {
            return res.status(400).json({
                error: true,
                message: 'The patient is not register!'
            }); 
        }
        
        return res.status(200).json({
            patients,
            error: false,
            message: 'The patient has been found!'
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

        let patients = await UserModel.findOne({ name });

        if (!patients) {
            return res.status(400).json({
                error: true,
                message: "This patient is not register!"
            });
        }

        await UserModel.updateOne(req.body);

        patients = await UserModel.findOne({ name });

        return res.status(200).json({
            patients,
            error: false,
            message: "The patient has been updated successfully"
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

        const patients = await UserModel.findOne({ name });

        if(!patients) {
            return res.status(400).json({
                error: true,
                message: "Patient not found"
            })
        }

        await UserModel.deleteOne(req.body);

        return res.status(200).json({
            patients,
            error: false,
            message: "Patient deleted successfully!"
        })

    } catch (error) {
        throw res.status(400).json({
            error: true,
            message: error.message 
        });
    }
})

module.exports = router;