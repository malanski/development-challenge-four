const mongoose = require('mongoose');
// const mongoose = require('../database');

const userName = 'ulisses';
const password = 'Tvm7HQSqEiirEAg';
// const url = `mongodb+srv://${userName}:${password}@cluster0.vphfkrk.mongodb.net/?retryWrites=true&w=majority`;
const url = `mongodb+srv://${userName}:${password}@cluster0.vphfkrk.mongodb.net/?retryWrites=true&w=majority`;
          // mongodb+srv://ulisses:<password>@cluster0.vphfkrk.mongodb.net/?retryWrites=true&w=majority


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