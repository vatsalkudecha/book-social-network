import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const linkColor = document.querySelectorAll('.nav-link');
    linkColor.forEach(link => {
      if (window.location.href.endsWith(link.getAttribute('href') || '')) {
        link.classList.add('active')
      }
      link.addEventListener('click', () => {
        linkColor.forEach(l => l.classList.remove('active'));
        link.classList.add('active')
      });
    });
  }

  logout() {
    // Ensure localStorage token is removed before any further action
    localStorage.removeItem('token');
    
    // Optionally, you can clear more user-specific data from localStorage or app state here
    // For example: localStorage.removeItem('userInfo');

    // Immediately navigate to the login page and prevent any unwanted navigation
    this.router.navigate(['']).then(() => {
        // Reload the application after navigation to ensure all states are reset
        window.location.reload();
    });
  }
}
