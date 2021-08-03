import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel : Usuario;
  public token;
  public identidad;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);
  }

  ngOnInit(): void {
  }
  login() {
    this._usuarioService.login(this.usuarioModel).subscribe(
      res =>{
        this.identidad = res.userFound
        this.token = res.token
        console.log(this.identidad)
        console.log(this.token)

        localStorage.setItem('persona', JSON.stringify(this.identidad));
        localStorage.setItem('token', this.token);

        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Bienvenido!'
        })

        this._router.navigate(['/home'])
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: 'Usuario o contraseña incorrectos',
          showConfirmButton: false,
          timer: 1500

        })
      }
    )
  }
}
