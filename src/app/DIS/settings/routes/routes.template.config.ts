import { Routes } from '@angular/router';
import { AuthGuard } from '@dis/auth/auth.guard';
import { RoleTypes } from '@dis/auth/roles.enum';

/**
 *  BELOW ARE ROUTES USED IN TEMPLATE
 *  DO NOT EDIT
 *
 *  Treat this as a sample when you link your pages in routes.config.ts
 */

// NOTE: Do not add views within /DIS folder (this folder will be updated and your project specific code shouldn't be here)
// The views below are within /DIS folder because we created them and are responsible for updating them
import { LoginComponent } from '@dis/views/login/login.component';
import { SamplePageComponent } from '@dis/views/sample-page/sample-page.component';
import { EditedPageComponent } from '@dis/views/edited-page/edited-page.component';
import {DashboardOneComponent} from '@dis/views/dashboard-one/dashboard-one.component';
import {DashboardTwoComponent} from '@dis/views/dashboard-two/dashboard-two.component';
import {DashboardThreeComponent} from '@dis/views/dashboard-three/dashboard-three.component';
import {TablesComponent} from '@dis/views/tables/tables.component';
import {InputFieldsComponent} from '@dis/views/input-fields/input-fields.component';
import {FormFillingComponent} from '@dis/views/form-filling/form-filling.component';
import {DatasetComponent} from "@dis/views/dataset/dataset.component";
import {IntroductionComponent} from "@dis/views/introduction/introduction.component";


//CPPS WP 3.3 Pages
import { CppsPdmIntroductionComponent } from 'src/app/cpps-pdm-introduction/cpps-pdm-introduction.component';
import { CppsPdmDatasetsAlgoComponent } from 'src/app/cpps-pdm-datasets-algo/cpps-pdm-datasets-algo.component';
import { CppsPdmRootCauseAlgoComponent } from 'src/app/cpps-pdm-root-cause-algo/cpps-pdm-root-cause-algo.component';
import { CppsPdmMaintenanceActionAlgoComponent } from 'src/app/cpps-pdm-maintenance-action-algo/cpps-pdm-maintenance-action-algo.component';
import { CppsPdmConclusionComponent } from 'src/app/cpps-pdm-conclusion/cpps-pdm-conclusion.component';
import { CppsPdmRootCauseAlgoPerformanceComponent } from 'src/app/cpps-pdm-root-cause-algo-performance/cpps-pdm-root-cause-algo-performance.component';
import { CppsPdmMaintenanceActionAlgoPerformanceComponent } from 'src/app/cpps-pdm-maintenance-action-algo-performance/cpps-pdm-maintenance-action-algo-performance.component';
import { CppsPdmAlgoTrainingTimeComponent } from 'src/app/cpps-pdm-algo-training-time/cpps-pdm-algo-training-time.component';
import { CppsDeepLearningComponent } from 'src/app/cpps-deep-learning/cpps-deep-learning.component'
import {OverviewNewComponent} from "@dis/views/overview-new/overview-new.component";
import { OutcomeNewComponent } from 'src/app/cpps-outcome-data/outcome-new.component';
import {OutcomeOnlyNewComponent} from "@dis/views/outcome-only-new/outcome-only-new.component";
import {DatasetNewComponent} from "@dis/views/dataset-new/dataset-new.component";
import {OverviewSingleNewComponent} from 'src/app/cpps-33-overview-single-new/overview-single-new.component'
import { ConclusiongraphComponent } from 'src/app/cpps-conclusion-graph/dashboard-three.component'

export const AppTemplateRoutes: Routes = [
  

  {
    path: 'cpps-33-overview',
    component: OverviewSingleNewComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'outcomes_dataset',
    component: OutcomeNewComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'cpps-pdm-introduction',
    component: CppsPdmIntroductionComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  

  //{
  //  path: 'cpps-pdm-datasets-algo',
  //  component: CppsPdmDatasetsAlgoComponent,
  //  canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
  //  data: {
  //    elevation: [

  //    ] // List out all roles that are acceptable
  //  }
  //},
  {
    path: 'cpps-pdm-root-cause-algo',
    component: CppsPdmRootCauseAlgoComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'cpps-pdm-maintenance-action-algo',
    component: CppsPdmMaintenanceActionAlgoComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'cpps-pdm-root-cause-performance-algo',
    component: CppsPdmRootCauseAlgoPerformanceComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'cpps-pdm-mainteance-action-performance-algo',
    component: CppsPdmMaintenanceActionAlgoPerformanceComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'cpps-pdm-algo-training-time',
    component: CppsPdmAlgoTrainingTimeComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'cpps-pdm-conclusion',
    component: CppsPdmConclusionComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },

  {
    path: 'input-field',
    component: InputFieldsComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'form-filling',
    component: FormFillingComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'outcome-new',
    component: OutcomeNewComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'outcome-only-new',
    component: OutcomeOnlyNewComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'Conclusion-graph',
    component: ConclusiongraphComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'dataset',
    component: DatasetComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'dataset-new',
    component: DatasetNewComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'introduction-no-dataset',
    component: IntroductionComponent,
    canActivate: [AuthGuard], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [

      ] // List out all roles that are acceptable
    }
  },
  { path: '**', redirectTo: '' }
];
