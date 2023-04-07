import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/loging.service';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
})
export class UserBlockComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public logService: LoginService,
    private router: Router
  ) {
    iconRegistry.addSvgIcon(
      'user-icon',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svg/user-logo1.svg'
      )
    );
    this.isLogged = logService.isLogged;
    logService.loggedObserver.subscribe(
      (isLogged) => (this.isLogged = isLogged)
    );
  }
  isLogged: boolean;
  onLogOut() {
    this.logService.logOut();
  }
  onLoginClick() {
    this.router.navigateByUrl('auth');
  }
}
