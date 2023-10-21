import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ModalComponent } from './empleado/modal.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProyectosJefeComponent } from './proyectos-jefe/proyectos-jefe.component';
import { ProyectosEmpleadoComponent } from './proyectos-empleado/proyectos-empleado.component';
import { ProyectosLiderComponent } from './proyectos-lider/proyectos-lider.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ModalComponent,
    SolicitudComponent,
    LoginComponent,
    HomeComponent,
    ProyectosJefeComponent,
    ProyectosEmpleadoComponent,
    ProyectosLiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
