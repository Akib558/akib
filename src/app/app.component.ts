import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Akib';
  email = "saidulislamakib99@gmail.com"

  openPDF() {
    window.open('assets/Md. Saidul Islam Akib.pdf', '_blank');
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    // Add your menu toggle logic if you use a hamburger nav
  }

}
