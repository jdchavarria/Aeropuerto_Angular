import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //---------------------PRUEBAS UNITARIAS-----------------------

  describe('Pruebas Login', () => {
    it('Verifica si los datos de usuario y contraseña ingresados estan vacios.', function () {
      const datosN = {
        usuario: "" ,
        contrasenia: ""
      };
      expect(component.datos).not.toEqual(datosN);
    });

    it('Verifica si los datos de usuario y contraseña ingresados sean los correctos.', function () {
      const datosMOCK = {
        usuario: "admin" ,
        contrasenia: "admin",
      };
      expect(component.datos).toEqual(datosMOCK);
    });

    it('Valida si se puede realizar el logueo',function()
    {    
      const datos = {
        Username: 'admin',
        Password: 'admin'
      };
      component.usuario= datos.Username;
      component.contrasenia = datos.Password;
      component.inicializarAdmin();
      const validacion = component.verficar();
      expect(validacion).toBeTruthy;
    }); 

    it('Verifica si se realizo la sesion de administrador exitosamente',function()
    {    
      const datos = {
        Username: 'admin',
        Password: 'admin'
      };
      component.usuario= datos.Username;
      component.contrasenia = datos.Password;
      component.inicializarAdmin();
      const seRealizoSesion = component.validarLogeo();
      expect(seRealizoSesion).toBeTruthy;
    }); 

  });

});
