// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Environment
import { environment } from 'src/environments/environment';

// Addon
import { ClickOutsideModule } from 'ng-click-outside';
import { JwtModule } from '@auth0/angular-jwt';
import 'hammerjs';

// Kendo
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {
  GridModule,
  PDFModule,
  ExcelModule
} from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { MenuModule } from '@progress/kendo-angular-menu';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';

// Components
import { NotificationsMenuComponent } from './DIS/components/notifications-menu/notifications-menu.component';
import { ProfileMenuComponent } from './DIS/components/profile-menu/profile-menu.component';
import { SidebarComponent } from './DIS/components/sidebar/sidebar.component';
import { LayoutComponent } from './DIS/components/layout/layout.component';

// App
import { AppRoutingModule } from './DIS/settings/routes/app-routing.module';
import { AppComponent } from './app.component';
import { ViewHeadingComponent } from './DIS/components/view-heading/view-heading.component';
import { ViewFilterComponent } from './DIS/components/view-filter/view-filter.component';
import { IndicatorCustomSampleComponent } from './DIS/components/indicator-custom-sample/indicator-custom-sample.component';

// Views
import { LoginComponent } from './DIS/views/login/login.component';
import { SamplePageComponent } from './DIS/views/sample-page/sample-page.component';
import { SamplePageTwoComponent } from './DIS/views/sample-page-two/sample-page-two.component';

// Sort

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    NotificationsMenuComponent,
    ProfileMenuComponent,
    LoginComponent,
    SamplePageComponent,
    ViewHeadingComponent,
    ViewFilterComponent,
    IndicatorCustomSampleComponent,
    SamplePageTwoComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        allowedDomains: [environment.API_ROOT],
        disallowedRoutes: [environment.SSO_ENDPOINT]
      }
    }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    NavigationModule,
    IconsModule,
    LayoutModule,
    DropDownsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    ChartsModule,
    MenuModule,
    IndicatorsModule,
    LabelModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
