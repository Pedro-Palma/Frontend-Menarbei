import { Component, OnInit } from '@angular/core';
import { TypeEmployee } from 'src/app/modelos/modelo.typeEmployee';
import { JobsEmployeeService } from 'src/app/servicios/jobs-employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-type-employee',
  templateUrl: './type-employee.component.html',
  styleUrls: ['./type-employee.component.scss']
})
export class TypeEmployeeComponent implements OnInit {
  public typeEmployees;
  public identidadUsuario;
  public employeeModel: TypeEmployee;

  constructor(private _employeeService: JobsEmployeeService) { 
    this.employeeModel = new TypeEmployee("","");
  }

  ngOnInit(): void {
    this.listEmployee();
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
  listEmployeeId(idEmployee){
    this._employeeService.listTypeEmployeeId(idEmployee).subscribe(
      response=>{
        this.employeeModel = response.typeEmployeeFind;
        console.log(response);

      }
    )
  }

  editarEmployee(){
    this._employeeService.updateTypeEmployee(this.employeeModel).subscribe(
      response=>{
        console.log(response);
        this.listEmployee();
      }
      
    )
  }

  eliminarEmployee(idUsuario){
    this._employeeService.deleteTypeEmployee(idUsuario).subscribe(
      response=>{
        console.log(response);
        this.listEmployee();
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No se pudo eliminar el tipo de trabajo ',
          showConfirmButton: false,
          timer: 1500,
        
        });
      }
    )
  }
  crearTypeEmployee(){
    this._employeeService.addTypeEmployee(this.employeeModel).subscribe(
      response=>{
        console.log(response);
        this.listEmployee();
      }
      
    )
  }

}
