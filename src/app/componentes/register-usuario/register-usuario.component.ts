import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { UsuarioService } from "../../servicios/usuario.service";

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.scss'],
  providers: [UsuarioService]
})
export class RegisterUsuarioComponent implements OnInit {
  public usuarioModel: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);
  }

  ngOnInit(): void {
  }

  registrar(){
    this._usuarioService.registro(this.usuarioModel).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/login'])
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
