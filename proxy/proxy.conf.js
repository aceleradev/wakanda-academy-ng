 const environment = require("../src/environments/environment.prod");

module.exports = {
    "/wakanda/app/v1/*": {
        "target": environment.apiUrl,
        source: false,
        logLevel: "debug",
        changeOrigin: true
    }
}