const userHost = 'http://localhost:8080';
const landingpageUrl = 'http://localhost:3000';
const common = require('./common');

const env = {
  production: false,
  apiUrl: userHost + common.wakanda.baseBath + '/user/create',
  userHost: userHost,
  landingpageUrl: landingpageUrl,
  ...common
};

module.exports = env;
