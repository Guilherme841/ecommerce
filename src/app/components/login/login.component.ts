import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfileIconComponent } from '../../svg-components/profile-icon/profile-icon.component';
import { LockIconComponent } from '../../svg-components/lock-icon/lock-icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ProfileIconComponent, LockIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
