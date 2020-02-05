import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {RegistrationpageComponent } from './registrationpage/registrationpage.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
{
	path:"",
	component:LoginpageComponent

},
{
	path:"content",
	component:MainpageComponent,
	},
{

     path:"registrationpage",
	component:RegistrationpageComponent



	},

	{
	path:'product/:id/:name',
	component:ProductComponent
	}

	




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
