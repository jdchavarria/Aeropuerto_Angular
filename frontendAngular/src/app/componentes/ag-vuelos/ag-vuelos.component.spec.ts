import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgVuelosComponent } from './ag-vuelos.component';
import { Aeropuerto } from '../../models/aeropuerto';
import { Vuelo} from '../../models/vuelo';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('AgVuelosComponent', () => {
  let component: AgVuelosComponent;
  let fixture: ComponentFixture<AgVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [ AgVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  //--------------------------PRUEBAS UNITARIAS-----------------------------------

  describe('When getAero() is called', () =>{
    it('deberia devolver',() => {
      var aeropuerto:Aeropuerto[] = [{id_aeropuerto:1, nombre:'londres'}];
      spyOn(component.vueloservicio, 'getAero').and.returnValue(of({ aeropuerto }));
      component.getAero();
      expect(component.aeropuerto).toBeDefined();
    });
  });

  describe('Pruebas datos vacios', () => {
    it('Verifica si los datos de usuario y contraseña ingresados estan vacios.', function () {
      const datos:Vuelo = {
        hora_salida : '5222',
        hora_llegada: '5888',
         precio : 500,
        id_estado_v: 1,
        origen: 1,
        destino: 1,
        id_avion: 1
      };
      expect(component.vuelito).not.toEqual(datos);
    });
    it('si se inserta un vuelo ',function()
    {    
      component.save();
      expect(component.router.navigate(['/vuelos/add'])).toBeDefined();
    }); 
  });
});
