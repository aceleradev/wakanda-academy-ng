 const environment = require("./src/environments/environment");

module.exports = {
    "/wakanda/app/v1/user/*": {
        "target": environment.apiUrl,
        source: false,
        logLevel: "debug",
        changeOrigin: true
    }
}