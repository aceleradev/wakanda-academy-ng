const userHost = 'https://wakanda-user-singup-be.herokuapp.com';

const env = {
  production: true,
  apiUrl: userHost + '/wakanda/app/v1/user',
  userHost: userHost
};

module.exports = env;
