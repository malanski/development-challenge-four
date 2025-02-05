const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,    
    },
    birthDate: {
        type: String,
        require: true,    
    }, 
    email: {
        type: String,
        require: true,
        unique: true
    }, 
    address: {
        zipCode: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },        
        county: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        streetAddress: {
            type: String,
            require: true,
        },        
        addition: {
            type: String,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    } 
});

const User = mongoose.model('user', UserSchema);

module.exports = User;