

import {NgModule}  from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';

import {InicioComponent} from './pages/inicio/inicio.component';
import {ContactComponent} from './pages/contact/contact.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';


const app_routes: Routes = [

	{ path: 'home', component: InicioComponent},
	{ path: 'contact', component:ContactComponent},
	{path:'galeria',component:GaleriaComponent},
	{path:'about',component:ColaboradoresComponent},
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