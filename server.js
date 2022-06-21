const express = require('express');
const mongoose = require('mongoose');
const employee = require('./routes/employee')

require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/employees', employee);

app.listen(4000, () => {
    console.log("Server is listening on port 4000...")
});