import { addonEnvironment } from '@dis/settings/environments/environment';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const KEYCLOAK_URL = 'http://localhost:8080/';

export const environment = {

  production: true,
  DEV_TEST_USER: {
    id: 'Dev User 1',
    username: 'devuser1',
    email: 'devuser1@test.com',
    firstName: 'dev',
    lastName: 'user',
    enabled: true,
    emailVerified: true,
    totp: true
  },
  KEYCLOAK_URL: KEYCLOAK_URL + 'auth',
  KEYCLOAK_REALM: 'demo1',
  KEYCLOAK_CLIENT: 'TEMPLATE', // Please add the client name(Id), 'INEVNTORY APP' is just a demo client name
  API_ROOT: '',                     // Please add your API Root
  APP_ROOT: 'http://localhost:57204',                     // Please add your APP Root
  KEYCLOAK_GET_CLIENT_ROLES_1: KEYCLOAK_URL + 'auth/admin/realms/demo1/users/',
  KEYCLOAK_GET_CLIENT_ROLES_2: '/role-mappings/clients/',
  KEYCLOAK_GET_CLIENT_ROLES_3: '/composite',
  ...addonEnvironment
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
