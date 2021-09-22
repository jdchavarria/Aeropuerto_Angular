import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/models/vuelo';
import {VuelosService} from '../../services/vuelos.service';

@Component({
  selector: 'app-mostrar-vuelos',
  templateUrl: './mostrar-vuelos.component.html',
  styleUrls: ['./mostrar-vuelos.component.css']
})
export class MostrarVuelosComponent implements OnInit {
  vuelos:Vuelo[] = [];
  public error = false;

  constructor(public vueloservicio: VuelosService) { }

  ngOnInit(): void {
    this.getVuelos();
  }

  getVuelos(){
    this.vueloservicio.getVuelos().subscribe((
      res:Vuelo[]) => {
        this.vuelos = res;
      },
      () =>{
        this.error = true;
      }
    );
  }


}
