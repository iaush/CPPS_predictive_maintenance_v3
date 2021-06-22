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
import {environment} from '../../../../environments/environment';
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
    this.languageSelected = APP_OPTIONS.i18n.supported[0];
    this.isNotificationEnabled = APP_OPTIONS.notification.isNotificationEnabled;

    this.translate.setDefaultLang(this.languageSelected.value);
    this.translate.use(this.languageSelected.value);
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

}
