const mongoose = require('mongoose');
// const mongoose = require('../database');

const userName = 'testeUser';
const password = '6u1jnm0o0vAxuI0j';
const url = `mongodb+srv://${userName}:${password}@cluster0.fw4xxr0.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(url, {},  (error) => {
    if (error) {
        console.log("Fail to connect to mongoose");
        console.log(error);
        return;
    }
    console.log("You are connected to mongoose database");

});

mongoose.Promisse = global.Promisse;

module.exports = mongoose