import { RoleTypes } from '@dis/auth/roles.enum';
// Will allow show/hide of links in sidebar when sign-on flow is implemented

export const config = [
  // Add navigation group here
  // {
  //   group: 'Navigation Group 1',
  //   // Add navigation items here
  //   items: [
  //     {
  //       name: 'Sample',
  //       icon: 'crosstab',
  //       link: './sample',
  //       elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
  //     },
  //     {
  //       name: 'Sample 2',
  //       icon: 'crosstab',
  //       link: './sample2',
  //       elevation: [RoleTypes.ROLE_MANAGER, RoleTypes.ROLE_USER]
  //     }
  //   ]
  // },
  // {
  //   group: 'Navigation Group 2',
  //   items: [
  //     {
  //       name: 'Login',
  //       icon: 'login',
  //       link: './login',
  //       elevation: [RoleTypes.ROLE_ADMIN]
  //     }
  //   ]
  // },
  {
    group: 'Research',
    // Add navigation items here
    items: [
      {
        name: 'Background',
        icon: 'crosstab',
        link: './dashboard-one',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Dataset',
        icon: 'crosstab',
        link: './dashboard-two',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Results',
        icon: 'crosstab',
        link: './dashboard-three',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Impacts',
        icon: 'crosstab',
        link: './table',
        elevation: []
      }
    ]
  },
];
