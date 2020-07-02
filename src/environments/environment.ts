// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const userHost = 'https://run.mocky.io';
const landingpageUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  apiUrl: userHost + '/v3/9f87f13d-222c-4cd2-adbf-99375f9b0597',
  userHost: userHost,
  landingpageUrl: landingpageUrl
};



/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
