// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { EditedPageComponent } from './DIS/views/edited-page/edited-page.component';
import {GaugesModule} from '@progress/kendo-angular-gauges';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { CustomUiBlockerComponent } from './DIS/components/custom-ui-blocker/custom-ui-blocker.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import {HttpInterceptorService} from '@dis/services/http/http-interceptor.service';
import { DashboardOneComponent } from './DIS/views/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './DIS/views/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './DIS/views/dashboard-three/dashboard-three.component';

// Sort

// @ts-ignore
// @ts-ignore
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
    EditedPageComponent,
    CustomUiBlockerComponent,
    DashboardOneComponent,
    DashboardTwoComponent,
    DashboardThreeComponent,
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
    NotificationModule,
    GridModule,
    PDFModule,
    ExcelModule,
    ChartsModule,
    MenuModule,
    IndicatorsModule,
    LabelModule,
    InputsModule,
    GaugesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BlockUIModule.forRoot({
      template: CustomUiBlockerComponent
    }), // Import BlockUIModule
    BlockUIHttpModule.forRoot({
      // blockAllRequestsInProgress: false
    }), // Import Block UI Http Module
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
