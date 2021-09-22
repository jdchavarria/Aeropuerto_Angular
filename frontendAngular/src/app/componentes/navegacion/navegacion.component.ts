import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(public router:Router ) { }

  hayUsuario:any;

  esconder = {
    "registrarVuelos" : false,
    "registrarAeropuertos" : false,
    "administrar" : true,
    "salir": false
  }

  ngOnInit(): void {
    this.hayUsuario = localStorage.getItem('usuario');
    if (this.hayUsuario != null) {
      this.esconder.registrarVuelos = true;
      this.esconder.registrarAeropuertos = true;
      this.esconder.administrar = false;
      this.esconder.salir = true;
    }else{
      this.esconder.registrarVuelos = false;
      this.esconder.registrarAeropuertos = false;
      this.esconder.administrar = true;
      this.esconder.salir = false;
    }
  }

  salirSesion(){
    localStorage.removeItem('usuario');
    this.router.navigate(['/principal']);
  }

}
