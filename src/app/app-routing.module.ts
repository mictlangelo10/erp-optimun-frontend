import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProyectosJefeComponent } from './proyectos-jefe/proyectos-jefe.component';
import { ProyectosEmpleadoComponent } from './proyectos-empleado/proyectos-empleado.component';
import { ProyectosLiderComponent } from './proyectos-lider/proyectos-lider.component';

const routes: Routes = [
  {path: 'EmpleadoComponent', component: EmpleadoComponent},
  {path: 'SolicitudComponent', component: SolicitudComponent},
  {path: 'LoginComponent', component: LoginComponent},
  {path: 'HomeComponent', component: HomeComponent},
  {path: 'ProyectosJefeComponent', component: ProyectosJefeComponent},
  {path: 'ProyectosEmpleadoComponent', component: ProyectosEmpleadoComponent},
  {path: 'ProyectosLiderComponent', component: ProyectosLiderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
