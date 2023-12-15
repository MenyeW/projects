import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  linkedin() {
    window.open('https://www.linkedin.com/in/rahul-bhatnagar-29942a106/');
  }
  stackoverflow() {
    window.open('https://stackoverflow.com/users/6825431/rahul-bhatnagar');
  }
  github() {
    window.open('https://github.com/MenyeW');
  }
}
