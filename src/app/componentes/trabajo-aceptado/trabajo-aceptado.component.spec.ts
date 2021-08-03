import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoAceptadoComponent } from './trabajo-aceptado.component';

describe('TrabajoAceptadoComponent', () => {
  let component: TrabajoAceptadoComponent;
  let fixture: ComponentFixture<TrabajoAceptadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoAceptadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoAceptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
