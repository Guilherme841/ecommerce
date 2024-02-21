import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoupeIconComponent } from '../../svg-components/loupe-icon/loupe-icon.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet,LoupeIconComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
