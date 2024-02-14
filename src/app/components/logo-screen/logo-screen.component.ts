import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent {
  @ViewChildren('containerImg') images!: QueryList<ElementRef>;
  constructor() {}
  next() {
    // this.img2.nativeElement.scrollIntoView();
    console.log(
      this.images.forEach((image) => console.log(image.nativeElement))
    );
  }
}
