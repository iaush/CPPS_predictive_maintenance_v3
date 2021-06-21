import { addonEnvironment } from '@dis/settings/environments/environment.prod';

export const environment = {
  production: true,
  i18n: {
    isEnabled: true,
    default: 'en',
    supported: [{text: 'English', value: 'en'},
      {text: 'Chinese', value: 'cn'}]
  },
  ...addonEnvironment
};
