import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoupeIconComponent } from '../../svg-components/loupe-icon/loupe-icon.component';
import { SortIconComponent } from '../../svg-components/sort-icon/sort-icon.component';
import { FilterIconComponent } from '../../svg-components/filter-icon/filter-icon.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    LoupeIconComponent,
    SortIconComponent,
    FilterIconComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
