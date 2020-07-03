const userHost = 'https://wakanda-user-singup-be.herokuapp.com';
const landingpageUrl = 'https://wakanda-landginpage-ng.herokuapp.com';

const env = {
  production: true,
  apiUrl: userHost + '/wakanda/app/v1/user/create',
  userHost: userHost,
  landingpageUrl: landingpageUrl
};

module.exports = env;
