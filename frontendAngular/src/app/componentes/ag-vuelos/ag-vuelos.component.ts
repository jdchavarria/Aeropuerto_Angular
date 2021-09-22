import { Component, OnInit } from '@angular/core';


import {VuelosService} from '../../services/vuelos.service';
import {Vuelo} from '../../models/vuelo';
import { Aeropuerto} from '../../models/aeropuerto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ag-vuelos',
  templateUrl: './ag-vuelos.component.html',
  styleUrls: ['./ag-vuelos.component.css']
})
export class AgVuelosComponent implements OnInit {

  vuelito:Vuelo ={
    hora_salida : '',
    hora_llegada: '',
    precio : 0,
    id_estado_v: 0,
    origen: 0,
    destino: 0,
    id_avion: 0
    };

  seleccion:number;
  seleccion2:number;
  constructor( public vueloservicio:VuelosService,public router:Router) { }

  ngOnInit(): void {
    this.getAero();
  }

  getAero(){
    this.vueloservicio.getAero().subscribe((
      res:Aeropuerto[]) => {
        this.aeropuerto = res;
      }
    );
  }

  aeropuerto:Aeropuerto[] = [];


  save(){
    this.vuelito.origen = this.seleccion;
    this.vuelito.destino = this.seleccion2;
    this.vueloservicio.saveVuelo(this.vuelito)
    .subscribe(
      res =>{
        this.router.navigate(['vuelos/add']);
        console.log(res);
      },
      err => console.error(err)
    )
    console.log(this.seleccion);
  }

}
