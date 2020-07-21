const userHost = 'https://run.mocky.io';
const landingpageUrl = 'http://localhost:4200';
const common = require('./common');

const env = {
  ...common,
  production: false,
  apiUrl: userHost + '/v3/9f87f13d-222c-4cd2-adbf-99375f9b0597',
  userHost: userHost,
  landingpageUrl: landingpageUrl,
  wakanda: {
    wakander: {
      tribe: {
        detail: {
          path: '/v3/d0a027b2-a9e7-49b7-9e77-ec522d069334'
        },
        list: {
          path: '/v3/c8f5bbc4-c310-4b86-badb-54849bf14ecd'
        }
      }
    }
  }
};

module.exports = env;
