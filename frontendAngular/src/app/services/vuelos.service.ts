import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Vuelo} from '../models/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  API_URL = 'http://localhost:4000';
  constructor(private http:HttpClient) { }

  getVuelos(){
    return this.http.get(`${this.API_URL}/vuelos`);
  }

  saveVuelo(vuelo:Vuelo){
    return this.http.post(`${this.API_URL}/vuelo`,vuelo);
  }

  getAero(){
    return this.http.get(`${this.API_URL}/aeropuertos`);
  }
}
