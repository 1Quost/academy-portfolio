import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendEmail() {
    window.location.href = 'mailto:your.email@example.com';
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
