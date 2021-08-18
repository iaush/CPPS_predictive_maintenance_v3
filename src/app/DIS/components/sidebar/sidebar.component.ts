import {Component, OnInit} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { config } from '@dis/settings/sidebar.config';
import { Router } from '@angular/router';

// TODO: Roles
import { AuthGuard } from '@dis/auth/auth.guard';
import { RoleTypes } from '@dis/auth/roles.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('toggleSidebar', [
      state('collapsed, void', style({ transform: 'translateX(-100%)' })),
      state('expanded', style({ transform: 'translateX(0)' })),
      transition('collapsed <=> expanded', [animate(200), animate(200)])
    ])
  ],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  menuGroups = config; // Change this to populate menu items
  sidebarState: string;
  isLoggedIn$: Promise<boolean>;

  // constructor(private _roleGuardService: RoleGuardService) {
  constructor(
    private _router: Router,
    private authGuard: AuthGuard
  ) {

  }

  ngOnInit(): void {
    // Filter Empty Groupstudyshipp
    // this.menuGroups = this.menuGroups.filter(groups => groups.items && groups.items.length > 0 );
    this.menuGroups = this.menuGroups.filter(groups => {
      let result = new Array();

      if (groups.items){
        result = groups.items.filter(item => this.isLinkActivated(item.elevation));
        groups.items = result;
      }

      return result.length > 0;
    });

    this.checkIsLoggedIn();
  }

  isLoginView(): boolean {
    return this._router.url === '/login';
  }

  isLinkActivated(elevation: Array<RoleTypes>): boolean {
    return this.authGuard.isAuthorized(elevation);
  }

  checkIsLoggedIn(): void{
    this.isLoggedIn$ = this.authGuard.isAuthenticated();
  }

}
