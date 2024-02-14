import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent {
  @ViewChild('container') containerImg!: ElementRef;
  constructor() {}
  scrollToImage(imagemId: string) {
    console.log(this.containerImg);
  }
}
