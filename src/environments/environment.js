// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const userHost = 'https://wakanda-user-singup-be.herokuapp.com';
const landingpageUrl = 'https://wakanda-landginpage-ng.herokuapp.com';

const env = {
  production: false,
  apiUrl: userHost + '/wakanda/app/v1/user/create',
  userHost: userHost,
  landingpageUrl: landingpageUrl
};

module.exports = env;

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
