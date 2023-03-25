import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() onClick = new EventEmitter();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'settings-icon',
      sanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svg/search_settings.svg'
      )
    );
  }
  handleClick() {
    this.onClick.emit();
  }
}
