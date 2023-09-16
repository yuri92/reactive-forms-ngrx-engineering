const cors = require('cors')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require('morgan');
const fs = require('fs');
const axios = require('axios');
const {v4: uuid} = require('uuid');

app.use(cors())
// parse application/json
app.use(bodyParser.json({limit: '64mb'}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

const EMAILS = [
    'test@test.it',
    'mariorossi@gmail.com'
]

app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 500);
});

app.post('/api/email-checker', (req, res) => {
    const {email} = req.body;

    if(EMAILS.includes(email)){
        res.status(400);
        res.json({errorMessage : 'Username already exists'});
    } else {
        res.json({status: 'ok'})
    }
})

app.listen(3001, () => console.log('Server partito sulla 3001'));