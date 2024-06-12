import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AngularComponent } from './angular/angular.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LogoutComponent } from './logout/logout.component';

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
},

{
    path: 'login',
    component:LoginComponent,

},
{
path:'',
redirectTo:'login',
pathMatch:'full',

}
,

{
  path:'' , 
  component:LayoutComponent,
  children:[
    {
        path: 'dashboard',
        component:DashboardComponent,
    },

    {
        path: 'logout',
        component:LogoutComponent,
    }
  ]
},
{
path:'**',
component:LoginComponent,

}
   
   
];
