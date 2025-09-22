import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
isOpen = false;
  constructor(
    private router: Router
  ) {
  
  }

 logout() {
    // limpiar session/token
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');

    // redirigir al login
    this.router.navigate(['/auth/login']);
  }

  toggleDropdown(event: Event) {
  event.preventDefault();
  this.isOpen = !this.isOpen;
}
}
