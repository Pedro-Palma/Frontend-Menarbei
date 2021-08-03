import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { JobComponent } from './componentes/job/job.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PerfilSeleccionadoComponent } from './componentes/perfil-seleccionado/perfil-seleccionado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegisterTrabajadorComponent } from './componentes/register-trabajador/register-trabajador.component';
import { RegisterUsuarioComponent } from './componentes/register-usuario/register-usuario.component';
import { SolicitudesEmpleadoComponent } from './componentes/solicitudes-empleado/solicitudes-empleado.component';
import { SolicitudesComponent } from './componentes/solicitudes/solicitudes.component';
import { TipoCuentaComponent } from './componentes/tipo-cuenta/tipo-cuenta.component';
import { TrabajadoresProcesoComponent } from './componentes/trabajadores-proceso/trabajadores-proceso.component';
import { TrabajadoresComponent } from './componentes/trabajadores/trabajadores.component';
import { TrabajoAceptadoComponent } from './componentes/trabajo-aceptado/trabajo-aceptado.component';
import { TypeEmployeeComponent } from './componentes/type-employee/type-employee.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'navar', component: NavbarComponent},
  { path: 'tipoCuenta', component: TipoCuentaComponent},
  { path: 'registroUsuario', component: RegisterUsuarioComponent},
  { path: 'registroTrabajador', component: RegisterTrabajadorComponent},
  { path: 'home', component: HomeComponent},
  { path: 'perfil/:idUser', component: PerfilComponent},
  { path: 'solicitud', component: SolicitudesComponent},
  { path: 'listaUsuarios', component: UsuariosComponent},
  { path: 'typeEmployee', component: TypeEmployeeComponent},
  { path: 'listaTrabajadores', component: TrabajadoresComponent},
  { path: 'listaTrabajadoresP', component: TrabajadoresProcesoComponent},
  { path: 'listaJob', component: JobComponent},
  { path: 'solicitudesEmpleado', component: SolicitudesEmpleadoComponent},
  { path: 'trabajoAceptado/:idWork', component: TrabajoAceptadoComponent},
  {path: 'perfilSeleccionado/:idUser', component: PerfilSeleccionadoComponent},



  /* Esto hasta abajo; Toda ruta no encontrada la redirigirá a esta */
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
