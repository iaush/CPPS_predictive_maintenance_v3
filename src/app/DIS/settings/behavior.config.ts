import { Notification } from '@dis/components/notifications-menu/notifications-menu.props';

// Consolidated list of customizable behavior
// Change the function body, not the signature

// The purpose of having this list is to allow developers to customize
// function behavior built into the template without modifying the template

// This will allow us to push template changes without affecting development of individual apps

// SECTION: BASIC APP INFO
export const YOUR_APP_NAME = 'Your App Name';

// SECTION: APP Options
export const APP_OPTIONS = {
  notification: {
    isNotificationEnabled: true
  },
  i18n: {
    isSelectionEnabled: true,
    default: 'en',
    supported: [{text: 'English', value: 'en'},
      {text: 'Chinese', value: 'cn'}]
  },
  blockUI: {
    type: 'converging-spinner',
    themeColor: 'success',
    size: 'large',
    message: 'common.block-ui.loading-message'
  }
};

// SECTION: NOTIFICATIONS (IGNORE IF NOTIFICATIONS NOT REQUIRED)
export const handleNotificationsClick = (notificationId: string): void => {
  // notificationId is passed, decide what to do with it
  // i.e. POST to remove this notification
  console.log(notificationId);
};

export const getNotifications = (): Promise<Notification[]> => {
  // Replace with call to your data service
  // 'status' '1': success; '2': warning; '3': error
  const data: Notification[] = [
    {
      id: '1',
      status: '1',
      content: 'This is to notify you.'
    },
    {
      id: '2',
      status: '2',
      content: 'That you might want to.'
    },
    {
      id: '3',
      status: '3',
      content: 'Really panic.'
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 100);
  });
};
