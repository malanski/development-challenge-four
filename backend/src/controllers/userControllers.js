const { Router } = require('express');

const express = require('express');
const UserModel = require('../models/User');

const router = express.Router();

router.post('/patients', async (req, res) => {
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

router.get('/patients', async (req, res) => {
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

router.get('/patients/:id', async(req, res) => {
    try {
        const  _id  = req.params.id;

        const patient = await UserModel.findOne({ _id });

        if (!patient) {
            return res.status(400).json({
                error: true,
                message: 'The patient is not register!'
            }); 
        }
        
        return res.status(200).json({
            patient,
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

router.patch('/patients', async (req, res) => {
    try {
        const  _id  = req.params.id;

        let patient = await UserModel.findOne({ _id });

        if (!patient) {
            return res.status(400).json({
                error: true,
                message: "This patient is not register!"
            });
        }

        await UserModel.updateOne(req.body);

        patient = await UserModel.findOne({ _id });

        return res.status(200).json({
            patient,
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

router.delete('/patients/:id', async(req, res) => {
    try {
        const _id  = req.params.id;

        const patient = await UserModel.findOne({ _id });

        if(!patient) {
            return res.status(400).json({
                error: true,
                message: "Patient not found"
            })
        }

        await UserModel.deleteOne({_id});

        return res.status(200).json({
            patient,
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