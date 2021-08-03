import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabajadores-proceso',
  templateUrl: './trabajadores-proceso.component.html',
  styleUrls: ['./trabajadores-proceso.component.scss']
})
export class TrabajadoresProcesoComponent implements OnInit {
  public usuarios;
  public identidadUsuario;
  public usuarioModel: Usuario;
  constructor(
    private _usuarioService: UsuarioService
  ) { 
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);
  }

  ngOnInit(): void {
    this.obtenerEmpleadoP();
  }

  obtenerEmpleadoP(){
    this._usuarioService.obtenerEmpleadoP().subscribe(
      response =>{
        console.log(response);
        this.usuarios = response.usersFound;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }
  obtenerUsuarioId(idUsuario){
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe(
      response=>{
        this.usuarioModel = response.userFind;
        console.log(response);

      }
    )
  }

  editarUsuario(){
    this._usuarioService.editarUsuario(this.usuarioModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerEmpleadoP();
      }
      
    )
  }

  eliminarUsuario(idUsuario){
    this._usuarioService.eliminarUsuario(idUsuario).subscribe(
      response=>{
        console.log(response);
        this.obtenerEmpleadoP();
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No se pudo eliminar el usuario ',
          showConfirmButton: false,
          timer: 1500,
        
        });
      }
    )
  }

  confirmarUsuario(id){
    this._usuarioService.confirmarUsuario(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerEmpleadoP();
      }
      
    )
  }

}
