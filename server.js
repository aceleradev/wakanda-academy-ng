const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const environment = require('./src/environments/environment');
const nomeApp = process.env.npm_package_name;
const app = express();  

app.use(express.json());

app.use('/wakanda/app/v1/*', proxy(environment.userHost, {
        proxyReqPathResolver:  (req) => {            
            return req.baseUrl + req.url;
        }
    })
);

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8000);