import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EnvelopeIconComponent } from '../../svg-components/envelope-icon/envelope-icon.component';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [RouterLink, EnvelopeIconComponent],
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.scss',
})
export class ForgotPassComponent {}
