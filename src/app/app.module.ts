import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CarouselComponent,
    ContactComponent,
    TestimoniosComponent,
    ServiciosComponent,
    HorarioComponent,
    GaleriaComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
