import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login:any ={
    
      "Username": "",
      "Password": ""
    };

    constructor(private httpClient: HttpClient, private router:Router){

    }

    onLogin(){
      this.httpClient.post('https://localhost:5001/api/Login', this.login)
      .subscribe((res:any)=>{
      if(res?.token){
        alert("user logged in");
        localStorage.setItem('userToken', res.token);
        localStorage.setItem('user', res.user);
        this.router.navigateByUrl('/dashboard');
      }
      else{
      alert('Invalid credentials');
      }

      }, (error:any)=>{
        alert('Invalid credentials');
      });
    }


}
