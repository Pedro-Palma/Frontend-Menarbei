import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/modelo.usuario';
import { TypeEmployee } from 'src/app/modelos/modelo.typeEmployee';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { JobsEmployeeService } from 'src/app/servicios/jobs-employee.service';

@Component({
  selector: 'app-register-trabajador',
  templateUrl: './register-trabajador.component.html',
  styleUrls: ['./register-trabajador.component.scss']
})
export class RegisterTrabajadorComponent implements OnInit {
  public usuarioModel: Usuario;
  public employeeModel: TypeEmployee;
  public typeEmployees;

  constructor(
    private _usuarioService: UsuarioService,
    private _employeeService: JobsEmployeeService,
    private _router: Router
  ) {
    this.usuarioModel = new Usuario("","","","","","",0,"",0,{_id:"",name:""},[{_id:"",coment:"",idUserComent:""}]);
   }

  ngOnInit(): void {
    this.listEmployee();

  }


  registrar(){
    this._usuarioService.registroEmployee(this.usuarioModel).subscribe(

      response=>{
        console.log(response);
        this._router.navigate(['/login'])
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  listEmployee(){
    this._employeeService.listTypeEmployee().subscribe(
      response =>{
        console.log(response);
        this.typeEmployees = response.typeEFind;
        console.log(response.typeEFind);

      },
      error =>{
        console.log(<any>error)
      }
    )
  }

}
