import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { SigninComponent } from './signin/signin.component';
import { ImageDetailComponent } from './image/image-detail.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
 // {path:'about',component:AboutComponent},
 // {path:'contact',component:ContactComponent},
 // {path:'login',component:SigninComponent},
  {path:'memories',component:AboutComponent},
  {path:'happy10',component:ContactComponent},
  {path:'messages',component:SigninComponent},
  
  {path:"image/:id",component:ImageDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
