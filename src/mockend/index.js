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
    //{"codice":"028001","nome":"Abano Terme","nomeStraniero":null,"codiceCatastale":"A001","cap":"35031","prefisso":"049","provincia":{"nome":"Padova","regione":"Veneto"},"email":"protocollo@abanoterme.net","pec":"abanoterme.pd@cert.ip-veneto.net","telefono":"+39 049 8245111","fax":"+39 049 8600499","coordinate":{"lat":45.3619,"lng":11.7924}}
    if (cachedComuni) {
        res.json(cachedComuni);
    } else {
        axios.get('https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni').then(comuniResponse => {
            cachedComuni = comuniResponse.data;
            res.json(cachedComuni)
        })
    }

})

app.listen(3001, () => console.log('Server partito sulla 3001'));