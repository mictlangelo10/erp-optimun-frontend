import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEmpleadoComponent } from './proyectos-empleado.component';

describe('ProyectosEmpleadoComponent', () => {
  let component: ProyectosEmpleadoComponent;
  let fixture: ComponentFixture<ProyectosEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosEmpleadoComponent]
    });
    fixture = TestBed.createComponent(ProyectosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
