import { addonEnvironment } from '@dis/settings/environments/environment.prod';

//export const environment = {
//  production: true,
//  ...addonEnvironment
// };
const KEYCLOAK_URL = 'https://172.20.105.242/';

export const environment = {

  production: false,
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
  KEYCLOAK_CLIENT: 'DEMO_CLIENT', // Please add the client name(Id), 'INEVNTORY APP' is just a demo client name
  API_ROOT: '',                     // Please add your API Root
  APP_ROOT: 'http://localhost:4200',                     // Please add your APP Root
  KEYCLOAK_GET_CLIENT_ROLES_1: KEYCLOAK_URL + 'auth/admin/realms/demo1/users/',
  KEYCLOAK_GET_CLIENT_ROLES_2: '/role-mappings/clients/',
  KEYCLOAK_GET_CLIENT_ROLES_3: '/composite',
  ...addonEnvironment
};