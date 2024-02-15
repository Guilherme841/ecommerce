import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent {
  @ViewChildren('slides') slides!: QueryList<ElementRef>;
  constructor() {}
  i: number = 0;
  activated: boolean = true;
  next() {
    this.activated = !this.activated;
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
