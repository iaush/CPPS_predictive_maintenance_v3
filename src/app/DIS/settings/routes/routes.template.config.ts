import { Routes } from '@angular/router';
import { RoleGuardService } from '@dis/services/auth/role-guard.service';
import { AuthGuardService } from '@dis/services/auth/auth-guard.service';
import { RoleTypes } from '@dis/services/auth/roles.enum';

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

export const AppTemplateRoutes: Routes = [
  // Below is how to include a page
  { path: 'login', component: LoginComponent },
  // Below is how to include a page that can be accessed after any user is logged in
  {
    path: 'sample',
    component: SamplePageComponent,
    canActivate: [AuthGuardService], // To accept ALL access after login, use AuthGuardService
    data: {
      elevation: [] // Not required when using AuthGuardService
    }
  },
  // Below is how to include a page that can be accessed after a user with SPECIFIED role is logged in
  {
    path: 'sample2',
    component: EditedPageComponent,
    canActivate: [RoleGuardService], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [
        RoleTypes.ROLE_ADMIN,
        RoleTypes.ROLE_MANAGER,
        RoleTypes.ROLE_USER
      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'dashboard-one',
    component: DashboardOneComponent,
    canActivate: [RoleGuardService], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [
        RoleTypes.ROLE_ADMIN,
        RoleTypes.ROLE_MANAGER,
        RoleTypes.ROLE_USER
      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'dashboard-two',
    component: DashboardTwoComponent,
    canActivate: [RoleGuardService], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [
        RoleTypes.ROLE_ADMIN,
        RoleTypes.ROLE_MANAGER,
        RoleTypes.ROLE_USER
      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'dashboard-three',
    component: DashboardThreeComponent,
    canActivate: [RoleGuardService], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [
        RoleTypes.ROLE_ADMIN,
        RoleTypes.ROLE_MANAGER,
        RoleTypes.ROLE_USER
      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'table',
    component: TablesComponent,
    canActivate: [RoleGuardService], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [
        RoleTypes.ROLE_ADMIN,
        RoleTypes.ROLE_MANAGER,
        RoleTypes.ROLE_USER
      ] // List out all roles that are acceptable
    }
  },
  {
    path: 'input-field',
    component: InputFieldsComponent,
    canActivate: [RoleGuardService], // ONLY acceptable ELEVATION can access after login
    data: {
      elevation: [
        RoleTypes.ROLE_ADMIN,
        RoleTypes.ROLE_MANAGER,
        RoleTypes.ROLE_USER
      ] // List out all roles that are acceptable
    }
  },
  { path: '**', redirectTo: '' }
];
