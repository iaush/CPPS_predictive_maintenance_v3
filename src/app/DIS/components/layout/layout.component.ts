import { Component, OnInit } from '@angular/core';
import { User } from '@dis/components/profile-menu/profile-menu.props';
import { Notification } from '@dis/components/notifications-menu/notifications-menu.props';
import {
  handleNotificationsClick,
  getNotifications,
  YOUR_APP_NAME, APP_OPTIONS
} from '@dis/settings/behavior.config';
import { Router } from '@angular/router';
import { AuthService } from '@dis/services/auth/auth.service';
import { StorageService } from '@dis/services/storage/storage.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  languages: any[];
  languageSelected: any;
  isSelectionEnabled: any;
  isNotificationEnabled: any;
  user: User;
  notifications: Array<Notification>;
  appName = YOUR_APP_NAME;
  currentFocusedMenu = 'none';
  isMenuCollapsed = false;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _storage: StorageService,
    private translate: TranslateService
  ) {

    // retrieve Language list from environment variable
    // Only set language if i18n is enabled.
    this.isSelectionEnabled = APP_OPTIONS.i18n.isSelectionEnabled;
    this.languages = APP_OPTIONS.i18n.supported;
    this.languageSelected = this.languages.find(item => item && item.value === APP_OPTIONS.i18n.default);
    this.translate.setDefaultLang(this.languageSelected.value);
    this.translate.use(this.languageSelected.value);

    this.isNotificationEnabled = APP_OPTIONS.notification.isNotificationEnabled;

    // Check if menu is expanded or collapsed
    if (APP_OPTIONS.sidemenu && APP_OPTIONS.sidemenu.collapsedByDefault) {
      this.isMenuCollapsed = true;
    }
  }



  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.user = this._auth.getUserDetails();
    if (this.user && this.user.id) { this.getData(); }

    this._storage.watch().subscribe(data => {
      this.user = this._auth.getUserDetails();
      this.getData();
    });

  }

  getData = async () => {
    this.notifications = await getNotifications();
  }

  onNotificationClick = notificationId => {
    handleNotificationsClick(notificationId);
  }

  logout() {
    this._auth.logout();
  }

  isLoginView() {
    return this._router.url === '/login';
  }

  isLoggedIn() {
    return this._auth.isLoggedIn();
  }

  languageChange(result): void {
    this.translate.use(result.value);
  }

  menuToggle(): void{
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
