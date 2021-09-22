import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-crear-boleto',
  templateUrl: './crear-boleto.component.html',
  styleUrls: ['./crear-boleto.component.css']
})
export class CrearBoletoComponent implements OnInit {

  vuelos: any[];

  constructor(
    private userService: UserService,
    private router: Router) { }

  VectorVuelos: UserService[] = [];
  VectorAsientos: UserService[] = [];
  total_precio: any = 0;
  obj_vuelo_asiento = {
    id_asiento: undefined,
    id_vuelo: undefined,
    total_precio: undefined
  }

  ngOnInit(): void {
    this.obtenerVuelos();
  }

  obtenerVuelos() {
    this.userService.getVuelos().subscribe((res:any[])=>{
      this.VectorVuelos=res;
    })
  }

  obtenerAsientos(arr_vuelo: String[]){
    this.userService.getAsientos(arr_vuelo.toString().split(',')[0] as unknown as number).subscribe((res:any[])=>{
      this.VectorAsientos=res;
      this.obj_vuelo_asiento.id_vuelo = arr_vuelo.toString().split(',')[1] as unknown as number;
      this.obj_vuelo_asiento.total_precio = arr_vuelo.toString().split(',')[2] as unknown as number;
      
    })
  }

  calcularTotalPrecio(arr_asiento: String[]){
    this.obj_vuelo_asiento.id_asiento = arr_asiento.toString().split(',')[0] as unknown as number;
    this.obj_vuelo_asiento.total_precio = (this.obj_vuelo_asiento.total_precio * 1) + ((arr_asiento.toString().split(',')[1] as unknown as number)/100 * this.obj_vuelo_asiento.total_precio);
    this.total_precio = (this.obj_vuelo_asiento.total_precio as number).toFixed(2);
  }

  generarBoleto(){
    console.log(this.obj_vuelo_asiento.total_precio);
    this.userService.registrarBoleto(this.obj_vuelo_asiento.id_asiento, this.obj_vuelo_asiento.id_vuelo, this.obj_vuelo_asiento.total_precio).subscribe((res:any[])=>{
      //console.log(res);
    })
  }

}
