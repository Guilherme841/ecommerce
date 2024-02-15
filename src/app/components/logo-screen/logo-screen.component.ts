import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent {
  @ViewChildren('slides') slides!: QueryList<ElementRef>;
  constructor(private _router: Router) {}
  i: number = 0;
  activated: boolean = true;
  next() {
    this.activated = !this.activated;
    if (this.i >= 2) {
      this._router.navigate(['login']);
      return;
    } else {
      this.i++;
      this.slides.get(this.i)?.nativeElement.scrollIntoView();
    }
  }
  back() {
    if (this.i <= 0) {
      return;
    } else {
      this.i--;
      this.slides.get(this.i)?.nativeElement.scrollIntoView();
    }
  }
}
