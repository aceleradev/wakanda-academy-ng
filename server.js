const express = require('express');
const path = require('path');
const http = require('http');
const environment = require('./src/environments/environment.ts');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${nomeApp}`));
 
app.post('/wakanda/app/v1/user', (req, res) => {
    http.request({
        host: environment.userHost,
        path: "/wakanda/app/v1/user"
    }, (clientRespose) => {
        clientRespose.on('data', (data) => {
            res.send(data);
        });
        clientRespose.on('error', (data) => {
            res.send(data);
        });
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});


 
app.listen(process.env.PORT || 8080);