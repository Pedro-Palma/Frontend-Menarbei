import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEmpleadoComponent } from './solicitudes-empleado.component';

describe('SolicitudesEmpleadoComponent', () => {
  let component: SolicitudesEmpleadoComponent;
  let fixture: ComponentFixture<SolicitudesEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
