import { RoleTypes } from '@dis/auth/roles.enum';
// Will allow show/hide of links in sidebar when sign-on flow is implemented

export const config = [
  // Add navigation group here
  {
    group: 'Research',
    // Add navigation items here
    items: [
      {
        name: 'Overview',
        icon: 'information',
        link: './introduction-new',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Outcomes',
        icon: 'information',
        link: './outcome-new',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },

      {
        group: 'Results',
        icon: 'crosstab',
        // Add navigation items here
        items: [
          {
            name: 'Context',
            icon: 'graph',
            link: './results',
            elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
          },
          {
            name: 'Process',
            icon: 'information',
            link: './table',
            elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
          }
        ]
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
        link: './introduction-single-new',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Outcomes',
        icon: 'information',
        link: './outcome-only-new',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: 'Dataset',
        icon: 'graph',
        link: './dataset-new',
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
