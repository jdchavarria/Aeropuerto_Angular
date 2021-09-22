import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  getVuelos(){
    return this.http.get(`${this.API_URI}/vuelos`);
  }

  getAsientos(idAsiento:number){
    return this.http.get(`${this.API_URI}/asientos/${idAsiento}`);
  }

  registrarBoleto(asiento: number, vuelo: number, precio_total: number) {
    const url = this.API_URI+"/boleto";
    return this.http.post(
      url,
      {
        "id_asiento": asiento,
        "id_vuelo": vuelo,
        "total_precio": precio_total  
      },
      {
        headers: this.headers
      }
    ).pipe(map(data => data));
  }
}
