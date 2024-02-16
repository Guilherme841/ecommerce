import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo-screen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo-screen.component.html',
  styleUrl: './logo-screen.component.scss',
})
export class LogoScreenComponent implements AfterViewInit {
  @ViewChildren('slides') slides!: QueryList<ElementRef>;
  @ViewChild('img1') img1!: ElementRef;
  constructor(private _router: Router) {}
  i: number = 0;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.img1.nativeElement?.scrollIntoView?.();
    }, 600);
  }
  next() {
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
