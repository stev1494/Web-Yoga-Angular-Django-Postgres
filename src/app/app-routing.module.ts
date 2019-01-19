

import {NgModule}  from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';

import {InicioComponent} from './pages/inicio/inicio.component';
import {ContactComponent} from './pages/contact/contact.component';


const app_routes: Routes = [

	{ path: 'home', component: InicioComponent},
	{ path: 'contact', component:ContactComponent},
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];


@NgModule({
	imports : [
		RouterModule.forRoot( app_routes)
	],
	exports : [
		RouterModule
	]
	
})

export class AppRoutingModule { }