import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { customInterceptor } from './services/custom.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}
  
  logout() {

    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    alert("user loggedout");
    this.router.navigateByUrl( '/logout' );

  
  }


  title = 'angularseventeen';
}




