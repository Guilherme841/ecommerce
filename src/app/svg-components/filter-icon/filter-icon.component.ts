import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-icon',
  standalone: true,
  imports: [],
  template: `<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6666 2H1.33331L6.66665 8.30667V12.6667L9.33331 14V11.1533V8.30667L14.6666 2Z"
      stroke="#232327"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M9.33335 8H6.66669V11.9111L9.33335 13.3333V8Z" fill="#232327" />
  </svg> `,
})
export class FilterIconComponent {}
