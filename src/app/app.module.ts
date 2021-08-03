import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegisterTrabajadorComponent } from './componentes/register-trabajador/register-trabajador.component';
import { RegisterUsuarioComponent } from './componentes/register-usuario/register-usuario.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { SolicitudesComponent } from './componentes/solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { TypeEmployeeComponent } from './componentes/type-employee/type-employee.component';
import { TrabajadoresComponent } from './componentes/trabajadores/trabajadores.component';
import { TrabajadoresProcesoComponent } from './componentes/trabajadores-proceso/trabajadores-proceso.component';
import { JobComponent } from './componentes/job/job.component';
import { SolicitudesEmpleadoComponent } from './componentes/solicitudes-empleado/solicitudes-empleado.component';
import { TrabajoAceptadoComponent } from './componentes/trabajo-aceptado/trabajo-aceptado.component';
import { PerfilSeleccionadoComponent } from './componentes/perfil-seleccionado/perfil-seleccionado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PerfilComponent,
    RegisterTrabajadorComponent,
    RegisterUsuarioComponent,
    TipoCuentaComponent,
    SolicitudesComponent,
    UsuariosComponent,
    TypeEmployeeComponent,
    TrabajadoresComponent,
    TrabajadoresProcesoComponent,
    JobComponent,
    SolicitudesEmpleadoComponent,
    TrabajoAceptadoComponent,
    PerfilSeleccionadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
