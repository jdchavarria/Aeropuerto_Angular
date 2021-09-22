import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgVuelosComponent } from './componentes/ag-vuelos/ag-vuelos.component';
import { MostrarVuelosComponent } from './componentes/mostrar-vuelos/mostrar-vuelos.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearBoletoComponent } from './componentes/crear-boleto/crear-boleto.component';
import { AgAeropuertoComponent } from './componentes/ag-aeropuerto/ag-aeropuerto.component';
import { VsDetalleFacturaComponent } from './componentes/vs-detallefactura/vs-detallefactura.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'vuelos/add',
    component: AgVuelosComponent
  },
  {
    path: 'mostar/vuelos',
    component: MostrarVuelosComponent
  },
  {
    path: 'crearBoleto',
    component: CrearBoletoComponent
  },
  {
    path: 'aeropuerto/add',
    component : AgAeropuertoComponent
  },
  {
    path: 'mostrar/factura',
    component : VsDetalleFacturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
