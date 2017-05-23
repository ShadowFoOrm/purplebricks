import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNav: boolean = false;

  closeMenuOnDesktop(): void {
    if (window.innerWidth > 991 && this.sideNav) {
      this.sideNav = false;
      document.body.classList.remove('no-scroll');
    }
  }

  toggleSidenav(): void {
    this.sideNav = !this.sideNav;

    if (this.sideNav) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
