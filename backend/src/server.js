const express = require('express');
const userControllers = require('./controllers/userControllers');

const app = express();

app.use(express.json());

// app.use('/', userControllers)
app.use('/', userControllers)

app.listen(3030, () => {
    console.log('The server is running')
})