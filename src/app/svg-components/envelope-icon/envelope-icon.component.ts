import { Component } from '@angular/core';

@Component({
  selector: 'app-envelope-icon',
  standalone: true,
  imports: [],
  template: `<svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.32698 1.63803C0 2.27976 0 3.11984 0 4.8V11.2C0 12.8802 0 13.7202 0.32698 14.362C0.614601 14.9265 1.07354 15.3854 1.63803 15.673C2.27976 16 3.11984 16 4.8 16H15.2C16.8802 16 17.7202 16 18.362 15.673C18.9265 15.3854 19.3854 14.9265 19.673 14.362C20 13.7202 20 12.8802 20 11.2V4.8C20 3.11984 20 2.27976 19.673 1.63803C19.3854 1.07354 18.9265 0.614601 18.362 0.32698C17.7202 0 16.8802 0 15.2 0H4.8C3.11984 0 2.27976 0 1.63803 0.32698C1.07354 0.614601 0.614601 1.07354 0.32698 1.63803ZM5.56569 4.17538C5.11026 3.86296 4.4878 3.97889 4.17538 4.43431C3.86296 4.88974 3.97889 5.5122 4.43431 5.82462L8.30293 8.47849C9.32556 9.18002 10.6744 9.18002 11.6971 8.47849L15.5657 5.82462C16.0211 5.5122 16.137 4.88974 15.8246 4.43431C15.5122 3.97889 14.8897 3.86296 14.4343 4.17538L10.5657 6.82926C10.2248 7.0631 9.77519 7.0631 9.43431 6.82926L5.56569 4.17538Z"
      fill="#626262"
    />
  </svg> `,
})
export class EnvelopeIconComponent {}
