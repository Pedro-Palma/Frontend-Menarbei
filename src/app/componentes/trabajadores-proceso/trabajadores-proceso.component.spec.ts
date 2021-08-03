import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresProcesoComponent } from './trabajadores-proceso.component';

describe('TrabajadoresProcesoComponent', () => {
  let component: TrabajadoresProcesoComponent;
  let fixture: ComponentFixture<TrabajadoresProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadoresProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
