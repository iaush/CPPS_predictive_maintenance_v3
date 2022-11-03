import { RoleTypes } from '@dis/auth/roles.enum';
// Will allow show/hide of links in sidebar when sign-on flow is implemented

export const config = [
  {
    group: 'Research',
    items:[
      {
        name: ' Overview',
        icon: 'information',
        link: './cpps-33-overview',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      {
        name: ' Outcomes',
        icon: 'gears',
        link: './outcomes_dataset',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
      //{
      //  name: 'Datasets for Algorithms Evaluation',
      //  icon: 'graph',
      //  link: './cpps-pdm-datasets-algo',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      //{
      //  name: 'Maintenance Root Cause Algorithm',
      //  icon: 'graph',
      //  link: './cpps-pdm-root-cause-algo',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      //{
       // group: ' Results',
        //icon: 'crosstab',
        // Add navigation items here
        //items: [
          //{
          //  name: ' Maintenance Root Cause Algorithm',
          //  icon: 'graph',
          //  link: './cpps-pdm-root-cause-performance-algo',
          //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
          //},
          {
            name: ' Results',
            icon: 'graph',
            link: './cpps-pdm-mainteance-action-performance-algo',
            elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
          },
        //]
      //},
          
      
      //{
      //  name: 'Optimal Maintenance Action Algorithm',
      //  icon: 'graph',
      //  link: './cpps-pdm-maintenance-action-algo',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      //{
      //  name: 'Conclusion',
      //  icon: 'graph',
      //  link: './cpps-pdm-conclusion',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      //{
      //  name: 'Training Time and Results',
      //  icon: 'graph',
      //  link: './cpps-pdm-algo-training-time',
      //  elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      //},
      {
        name: ' Conclusion',
        icon: 'graph',
        link: './Conclusion-graph',
        elevation: [] // Specify user roles allowed to see this link: NOT YET IMPLEMENTED
      },
    ]
  }


];


