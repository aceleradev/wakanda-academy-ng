const environment = require("../src/environments/environment.dev");
console.log(environment);
module.exports = {
    "/wakanda/app/v1/*": {
        "target": environment.userHost,
        source: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/wakanda/app/v1/listTribes": environment.wakanda.wakander.tribe.list.path,
            "^/wakanda/app/v1/tribe": environment.wakanda.wakander.tribe.detail.path
        }
    }
}