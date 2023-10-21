import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosJefeComponent } from './proyectos-jefe.component';

describe('ProyectosJefeComponent', () => {
  let component: ProyectosJefeComponent;
  let fixture: ComponentFixture<ProyectosJefeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosJefeComponent]
    });
    fixture = TestBed.createComponent(ProyectosJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
