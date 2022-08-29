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





  // {
  //   group: 'Research',
  //   // Add navigation items here
  //   items: [
  //     {
  //       name: 'Introduction',
  //       icon: 'information',
  //       link: './introduction',
  //       elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
  //     },
  //     {
  //       name: 'Results',
  //       icon: 'graph',
  //       link: './results',
  //       elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
  //     },
  //     {
  //       name: 'Conclusion',
  //       icon: 'crosstab',
  //       link: './conclusion',
  //       elevation: []
  //     }
  //   ]
  // },
  // {
  //   group: 'Research',
  //   // Add navigation items here
  //   items: [
  //     {
  //       name: 'Introduction',
  //       icon: 'information',
  //       link: './introduction-no-dataset',
  //       elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
  //     },
  //     {
  //       name: 'Dataset',
  //       icon: 'graph',
  //       link: './dataset',
  //       elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
  //     },
  //     {
  //       name: 'Results',
  //       icon: 'graph',
  //       link: './table',
  //       elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
  //     },
  //     {
  //       name: 'Conclusion',
  //       icon: 'crosstab',
  //       link: './conclusion',
  //       elevation: []
  //     }
  //   ]
  // },





  {
    group: 'Research',
    items:[
      {
        name: 'Project Introduction',
        icon: 'information',
        link: './cpps-pdm-introduction',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Datasets for Algorithms Evaluation',
        icon: 'graph',
        link: './cpps-pdm-datasets-algo',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      //{
      //  name: 'Maintenance Root Cause Algorithm',
      //  icon: 'graph',
      //  link: './cpps-pdm-root-cause-algo',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      {
        name: 'Maintenance Root Cause Algorithm Performance and Results',
        icon: 'graph',
        link: './cpps-pdm-root-cause-performance-algo',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      //{
      //  name: 'Optimal Maintenance Action Algorithm',
      //  icon: 'graph',
      //  link: './cpps-pdm-maintenance-action-algo',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      {
        name: 'Optimal Maintenance Action Algorithm Performance and Results',
        icon: 'graph',
        link: './cpps-pdm-mainteance-action-performance-algo',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      //{
      //  name: 'Training Time and Results',
      //  icon: 'graph',
      //  link: './cpps-pdm-algo-training-time',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      //{
      //  name: 'Conclusion',
      //  icon: 'graph',
      //  link: './cpps-pdm-conclusion',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
    ]
  }


];
