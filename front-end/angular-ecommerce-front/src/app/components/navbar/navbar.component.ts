import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showMenu: boolean = false;
  imageServerUrl: string = environment.imageServerUrl;

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  constructor(private router: Router) {
    router.events.subscribe((val) => (this.showMenu = false));
  }
}
