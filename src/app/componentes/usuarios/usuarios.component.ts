import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuarios;
  public identidadUsuario;
  public usuarioModel: Usuario;

  constructor(
    private _usuarioService: UsuarioService
  ) {
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(
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
        this.obtenerUsuarios();
      }

    )
  }

  eliminarUsuario(idUsuario){
    this._usuarioService.eliminarUsuario(idUsuario).subscribe(
      response=>{
        console.log(response);
        this.obtenerUsuarios();
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
  registrarAdmin(){
    this._usuarioService.registroAdmin(this.usuarioModel).subscribe(
      response=>{
        console.log(response);

        this.obtenerUsuarios();
      },
      error=>{
        console.log(<any>error);
      }
    )
  }





}
