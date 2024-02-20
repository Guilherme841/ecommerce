import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [],
  template: `<svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 5.01L0 5V7H18V5.01ZM0 10H12V12H0V10ZM18 0H0V2.01L18 2V0Z"
      fill="#323232"
    />
  </svg> `,
})
export class MenuIconComponent {}
