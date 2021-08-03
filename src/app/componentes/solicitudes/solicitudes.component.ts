
import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/modelos/modelo.work';
import { JobsEmployeeService } from 'src/app/servicios/jobs-employee.service';
import { WorkService } from 'src/app/servicios/work.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  public employees;
  public works;
  public jobsPrice;
  public jobs;
  public identidadUsuario;
  public workModel: Work;

  constructor(private _workService: WorkService,
    private _employeeService: JobsEmployeeService) {
      this.workModel = new Work("",{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},"",0,"","","");
    }

  ngOnInit(): void {
    this.listEmployee();
    this.getWorkClient();
  }

  listEmployee(){
    this._employeeService.listTypeEmployee().subscribe(
      response =>{
        console.log(response);
        this.employees = response.typeEFind;
        console.log(response.typeEFind);

      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  crearSolicitud(){
    this._workService.addWorkClient(this.workModel).subscribe(
      response=>{
        console.log(response);
        this.getWorkClient();
      }

    )
  }

  listJobByType(id){
    this._employeeService.listJobsByType(id).subscribe(
      response =>{
         console.log(response);
        this.jobs = response.jobsFind;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  listJobById(id){
    this._employeeService.listJobsId(id).subscribe(
      response =>{
         console.log(response);
        this.jobsPrice = response.jobFind;
        console.log(this.jobsPrice)
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  getWorkClient(){
    this._workService.getWorkCliente().subscribe(
      response =>{
        console.log(response);
        this.works = response.workFound;


      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  cancelWork(id){
    this._workService.cancelWork(id).subscribe(
      response =>{

         console.log(response);
         this.getWorkClient;
         location.reload()
      },
      error =>{
        console.log(id)
        console.log(<any>error)
      }
    )
  }
  cancelChangesWorks(id){
    this._workService.cancelChangesWorks(id).subscribe(
      response =>{

         console.log(response);
         location.reload()
         this.getWorkClient;

      },
      error =>{
        console.log(id)
        console.log(<any>error)
      }
    )
  }

  aceptWorkC(id){
    this._workService.confirmWorkClient(id).subscribe(
      response =>{

         console.log(response);
         this.getWorkClient;
         location.reload()
      },
      error =>{
        console.log(id)
        console.log(<any>error)
      }
    )
  }


}
