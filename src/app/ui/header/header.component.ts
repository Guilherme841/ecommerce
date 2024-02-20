import { Component } from '@angular/core';

import { MenuIconComponent } from '../../svg-components/menu-icon/menu-icon.component';
import { LogoSmallComponent } from '../../svg-components/logo-small/logo-small.component';
import { avatarIconComponent } from '../../svg-components/avatar-icon/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuIconComponent, LogoSmallComponent, avatarIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
