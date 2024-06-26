import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FondoComponent } from './fondo/fondo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FondoComponent,
    ServiciosComponent,
    RequisitosComponent,
    ExperienciasComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
