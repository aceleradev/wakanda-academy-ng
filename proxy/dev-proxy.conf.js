const environment = require("../src/environments/environment.dev");
console.log(environment);
module.exports = {
    "/wakanda/app/v1/*": {
        "target": environment.userHost,
        source: false,
        logLevel: "debug",
        changeOrigin: true
    }
}