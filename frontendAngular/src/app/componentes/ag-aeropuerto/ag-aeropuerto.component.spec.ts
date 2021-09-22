import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgAeropuertoComponent } from './ag-aeropuerto.component';

describe('AgVuelosComponent', () => {
  let component: AgAeropuertoComponent;
  let fixture: ComponentFixture<AgAeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgAeropuertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});