import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent {
  @ViewChildren('slides') slides!: QueryList<ElementRef>;
  constructor() {}
  i: number = 0;
  next() {
    if (this.i >= 2) {
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
