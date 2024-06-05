import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

export const routes: Routes = [
{
    path: 'home-component',
    component:HomeComponent,
},
{
    path: 'contact-component',
    component:ContactComponent,
},
{
    path: 'angular-component',
    component:AngularComponent,
},

{
    path: 'content-projection-component',
    component:ContentProjectionComponent,
}
   
];
