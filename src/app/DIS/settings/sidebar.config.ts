import { RoleTypes } from '@dis/services/auth/roles.enum';
// Will allow show/hide of links in sidebar when sign-on flow is implemented

export const config = [
  // Add navigation group here
  {
    group: 'Navigation Group 1',
    // Add navigation items here
    items: [
      {
        name: 'Sample',
        icon: 'crosstab',
        link: './sample',
        elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Sample 2',
        icon: 'crosstab',
        link: './sample2',
        elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER]
      }
    ]
  },
  {
    group: 'Navigation Group 2',
    items: [
      {
        name: 'Login',
        icon: 'login',
        link: './login',
        elevation: [RoleTypes.ROLE_ADMIN]
      }
    ]
  }, {
    group: 'Navigation Group 3',
    // Add navigation items here
    items: [
      {
        name: 'Dashboard Sample 1',
        icon: 'crosstab',
        link: './dashboard-one',
        elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Dashboard Sample 2',
        icon: 'crosstab',
        link: './dashboard-two',
        elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Dashboard Sample 3',
        icon: 'crosstab',
        link: './dashboard-three',
        elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Sample 2',
        icon: 'crosstab',
        link: './sample2',
        elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER]
      }
    ]
  }
];
