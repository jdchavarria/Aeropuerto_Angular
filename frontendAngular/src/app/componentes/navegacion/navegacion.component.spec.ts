import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavegacionComponent } from './navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


describe('NavegacionComponent', () => {
  let component: NavegacionComponent;
  let fixture: ComponentFixture<NavegacionComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get( Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //---------------------PRUEBAS UNITARIAS-----------------------

  describe('Pruebas navegacion', () => {

    it('Navigate Verificar al salir de sesion',function()
    {    
      component.salirSesion();
      expect(component.router.navigate(['/principal'])).toBeDefined();
    }); 

    it('Comprueba que el usuario administrador haya iniciado sesion',function()
    {    
      component.ngOnInit();
      expect(component.hayUsuario).not.toBeNull;
      expect(component.esconder.registrarVuelos).toBeTruthy;
    }); 
  });
});
