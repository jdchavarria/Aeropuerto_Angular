import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsDetalleFacturaComponent } from './vs-detallefactura.component';

describe('AgVuelosComponent', () => {
  let component: VsDetalleFacturaComponent;
  let fixture: ComponentFixture<VsDetalleFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsDetalleFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});