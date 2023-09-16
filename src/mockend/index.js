const cors = require('cors')
const fileUpload = require('express-fileupload')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require('morgan');
const fs = require('fs');
const axios = require('axios');
const {v4: uuid} = require('uuid');

app.use(cors())
app.use(fileUpload())
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

    if (EMAILS.includes(email)) {
        res.status(400);
        res.json({errorMessage: 'Username already exists'});
    } else {
        res.json({status: 'ok'})
    }
})

app.post('/api/upload-thumbnail', (req, res) => {
    res.json({status: 'ok'})
})

let cachedComuni;
app.get('/api/comuni', (req, res) => {
    const {search} = req.query;

    console.log(search)

    if (search.length <= 3) {
        res.json([]);
    } else {
        let comuni = JSON.parse(fs.readFileSync('./json/comuni.json').toString());
        comuni = comuni.filter(e => e.nome.toLowerCase().startsWith(search))

        res.json(comuni.slice(0, 10))

    }

})

app.listen(3001, () => console.log('Server partito sulla 3001'));