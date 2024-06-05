import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm: FormGroup;
  isSubmitted:boolean=false;
  constructor() {
  this.userForm=new FormGroup({

    firstName:new FormControl("",[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl("",[Validators.required, Validators.minLength(4)]),
    userName:new FormControl("",[Validators.required, Validators.email]),
    city:new FormControl(""),
    state:new FormControl(""),
    zipcode:new FormControl(""),
    isAgree:new FormControl(""),


  });


}
onSubmit(){
this.isSubmitted=true;
  const isValid=this.userForm.valid;
  debugger;
}
}
