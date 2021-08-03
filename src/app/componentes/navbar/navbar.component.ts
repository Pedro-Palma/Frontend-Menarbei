import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {

  constructor(public _usuarioService: UsuarioService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  limpiarStorage() {
    localStorage.clear()


    this._router.navigate(['/login'])

    error => {
      console.log(<any>error);

    }
  }

}