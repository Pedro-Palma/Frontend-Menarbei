import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/modelo.usuario';


@Component({
  selector: 'app-perfil-seleccionado',
  templateUrl: './perfil-seleccionado.component.html',
  styleUrls: ['./perfil-seleccionado.component.scss']
})
export class PerfilSeleccionadoComponent implements OnInit {
  public rutaID: string;
  public usuarioModel:Usuario;
  public modeloComentario = {
    _id:"",
    coment:"",
    idUserComent:""
  }



  constructor(
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute
  ) {
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);

   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(infoRuta => {
      this.rutaID = infoRuta.get('idUser');
    })
   this.obtenerUsuarioId()
  }

  obtenerUsuarioId(){
    this._usuarioService.obtenerUsuarioId(this.rutaID).subscribe(
      response=>{
        this.usuarioModel = response.userFind;
        console.log(response);

      }
    )
  }
  addComent(){
    console.log(this.modeloComentario)
    this._usuarioService.addComent(this.modeloComentario,this.rutaID).subscribe(
      response=>{
        this.usuarioModel = response.userFind;
        console.log(response);
        this.obtenerUsuarioId()

      }
    )
  }



}
