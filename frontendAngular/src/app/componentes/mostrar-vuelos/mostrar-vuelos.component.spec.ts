import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVuelosComponent } from './mostrar-vuelos.component';
import {VuelosService } from '../../services/vuelos.service';
import { of } from 'rxjs';
import { Vuelo } from 'src/app/models/vuelo';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('MostrarVuelosComponent', () => {
  let component: MostrarVuelosComponent;
  let fixture: ComponentFixture<MostrarVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ MostrarVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
//-------------------------PRUEBAS UNITARIAS----------------------------------

describe('When getVuelos() is called', () =>{
  it('deberia devolver',() => {
    var vuelos:Vuelo[] = [{hora_salida:'2222', hora_llegada:'55555', precio:500 ,id_estado_v:2,origen:1,destino:1,id_avion:1}];
    spyOn(component.vueloservicio, 'getVuelos').and.returnValue(of({ vuelos }));
    component.getVuelos();
    expect(component.error).toBeFalsy();
    expect(component.vuelos).toBeDefined();
  });
});

});
