const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,    
    },
    birthDate: {
        type: Date,
        require: true,    
    }, 
    email: {
        type: String,
        require: true,
        unique: true
    }, 
    address: {
        cep: {
            type: String,
            require: true,
        },
        logradouro: {
            type: String,
            require: true,
        },
        numero: {
            type: String,
            require: true,
        },
        bairro: {
            type: String,
            require: true,
        },
        cidade: {
            type: String,
            require: true,
        },
        uf: {
            type: String,
            require: true,
        },
        complemento: {
            type: String,
        }
    } 
});

const User = mongoose.model('user', UserSchema);

module.exports = User;