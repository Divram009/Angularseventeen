import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ContentProjectionComponent } from "../content-projection/content-projection.component";

@Component({
    selector: 'app-angular',
    standalone: true,
    templateUrl: './angular.component.html',
    styleUrl: './angular.component.css',
    imports: [RouterOutlet, ReactiveFormsModule, CommonModule, ContentProjectionComponent]
})
export class AngularComponent {

  userForm: FormGroup;
  isSubmitted:boolean=false;
  constructor() {
  this.userForm=new FormGroup({

    firstName:new FormControl("",[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl("",[Validators.required, Validators.minLength(4)]),
    userName:new FormControl("",[Validators.required, Validators.email]),
    city:new FormControl("",Validators.required),
    state:new FormControl("",[Validators.required]),
    zipcode:new FormControl("",Validators.required),
    isAgree:new FormControl("",Validators.required),
  });
}

onStateChange()
{
  var state=this.userForm.controls['state'].value;
  var city=this.userForm.controls['city'].value;
  if(city=="media" && state!='PA')
  {
    this.userForm.controls['state'].setErrors({'invalidstate':true});
  }
  else{
    this.userForm.controls['state'].setErrors({'invalidstate':false});
  }

}
onSubmit(){
  this.onStateChange();

//  var stateValue=this.userForm.controls['state'].value;
//  if(stateValue==''){
//   this.userForm.controls['state'].setErrors({'required':true});
//  } else{
//   this.userForm.controls['state'].setErrors({'required':false});
//   }
  this.isSubmitted=true;
  const isValid=this.userForm.valid;
  console.log(this.userForm)
  }
}
