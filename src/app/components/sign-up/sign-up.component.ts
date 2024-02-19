import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfileIconComponent } from '../../svg-components/profile-icon/profile-icon.component';
import { LockIconComponent } from '../../svg-components/lock-icon/lock-icon.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ProfileIconComponent, LockIconComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
