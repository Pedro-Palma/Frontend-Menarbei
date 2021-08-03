import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTrabajadorComponent } from './register-trabajador.component';

describe('RegisterTrabajadorComponent', () => {
  let component: RegisterTrabajadorComponent;
  let fixture: ComponentFixture<RegisterTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTrabajadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
