import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent {
  constructor() {
  }

}
