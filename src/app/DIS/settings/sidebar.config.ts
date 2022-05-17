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
        name: 'Introduction',
        icon: 'information',
        link: './introduction',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Results',
        icon: 'graph',
        link: './results',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Conclusion',
        icon: 'crosstab',
        link: './conclusion',
        elevation: []
      }
    ]
  },
  {
    group: 'Research',
    // Add navigation items here
    items: [
      {
        name: 'Introduction',
        icon: 'information',
        link: './introduction-no-dataset',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Dataset',
        icon: 'graph',
        link: './dataset',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Results',
        icon: 'graph',
        link: './table',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Conclusion',
        icon: 'crosstab',
        link: './conclusion',
        elevation: []
      }
    ]
  },
];
