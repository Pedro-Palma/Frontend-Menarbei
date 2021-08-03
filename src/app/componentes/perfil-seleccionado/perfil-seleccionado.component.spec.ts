import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSeleccionadoComponent } from './perfil-seleccionado.component';

describe('PerfilSeleccionadoComponent', () => {
  let component: PerfilSeleccionadoComponent;
  let fixture: ComponentFixture<PerfilSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
