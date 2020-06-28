const express = require('express');
const path = require('path');
const https = require('https');
const axios = require('axios');
const environment = require('./src/environments/environment');
const nomeApp = process.env.npm_package_name;
const app = express();  

app.use(express.json());

app.use(express.static(`${__dirname}/dist/${nomeApp}`));
 
app.post('/wakanda/app/v1/user', (req, res) => {
    axios({
        method: 'post',
        url: environment.apiUrl,
        data: req.body
    }).then((clientRespose) => {
        res.send(clientRespose.data);
    }, (error) => {
        res.status(error.response.status).send(error.response.data);
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});


 
app.listen(process.env.PORT || 8080);