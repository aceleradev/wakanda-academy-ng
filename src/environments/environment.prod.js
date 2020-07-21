const userHost = 'http://wakanda-academy-be.herokuapp.com';
const landingpageUrl = 'https://wakanda-landginpage-ng.herokuapp.com';
const common = require('./common');

const env = {
  production: true,
  apiUrl: userHost + '/wakanda/app/v1/user/create',
  userHost: userHost,
  landingpageUrl: landingpageUrl,
  ...common
};

module.exports = env;
