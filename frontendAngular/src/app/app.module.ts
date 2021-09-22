import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgVuelosComponent } from './componentes/ag-vuelos/ag-vuelos.component';
import { MostrarVuelosComponent } from './componentes/mostrar-vuelos/mostrar-vuelos.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearBoletoComponent } from './componentes/crear-boleto/crear-boleto.component';
import { AgAeropuertoComponent } from './componentes/ag-aeropuerto/ag-aeropuerto.component';
import { VsDetalleFacturaComponent } from './componentes/vs-detallefactura/vs-detallefactura.component';
import {VuelosService} from './services/vuelos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PrincipalComponent,
    AgVuelosComponent,
    MostrarVuelosComponent,
    LoginComponent,
    CrearBoletoComponent,
    AgAeropuertoComponent,
    VsDetalleFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VuelosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
