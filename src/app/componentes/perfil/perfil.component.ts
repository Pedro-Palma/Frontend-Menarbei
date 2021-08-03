import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public identidad;
  public usuarios;
  public usuarioModel: Usuario;
  public record;

  public rutaID: String;

  constructor(
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.identidad = this._usuarioService.getIdentidad();
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);
   }

  ngOnInit(): void {
    console.log(this.identidad);
    this._activatedRoute.paramMap.subscribe(infoRuta => {
      this.rutaID = infoRuta.get('idUser');
    })
    this.getRecord()
  }

  obtenerUsuarioId(idUsuario){
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe(
      response=>{
        this.usuarioModel = response.userFind;
        console.log(response);

      }
    )
  }
  getRecord(){
    this._usuarioService.getRecord().subscribe(
      response=>{
        this.record = response.workFound;
        console.log(response);

      }
    )
  }
  editarUsuario(){
    this._usuarioService.editarUsuarios(this.rutaID,this.usuarioModel).subscribe(
      response=>{
        this.identidad = response.userUpdated;
        localStorage.setItem("persona", JSON.stringify(this.identidad));
        console.log(response);
        this.getIdentidad;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario editado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      }

    )
  }
  eliminarUsuario(){
    this._usuarioService.eliminarCuenta().subscribe(
      response=>{
        console.log(response);
        localStorage.clear()


    this._router.navigate(['/login'])

      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No se pudo eliminar el usuario porque tiene una liga activa',
          showConfirmButton: false,
          timer: 1500,

        });
      }
    )
  }

  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('persona'));
    if (identidad2 != 'undefined') {
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }

}
