import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosLiderComponent } from './proyectos-lider.component';

describe('ProyectosLiderComponent', () => {
  let component: ProyectosLiderComponent;
  let fixture: ComponentFixture<ProyectosLiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosLiderComponent]
    });
    fixture = TestBed.createComponent(ProyectosLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
