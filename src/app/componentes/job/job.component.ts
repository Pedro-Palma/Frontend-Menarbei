import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/modelos/modelo.job';

import { TypeEmployee } from 'src/app/modelos/modelo.typeEmployee';
import { JobsEmployeeService } from 'src/app/servicios/jobs-employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  
  public jobs;
  public identidadUsuario;
  public jobModel: Job;
  public employeeModel: TypeEmployee;
  public typeEmployees;

  constructor(
    private _jobService: JobsEmployeeService,
    private _employeeService: JobsEmployeeService,
  ) {
    this.jobModel = new Job("","","","","");
   }

  ngOnInit(): void {
    this.listJob();
    this.listEmployee();
  }

  listJob(){
    this._jobService.listJobs().subscribe(
      response =>{
         console.log(response);
        this.jobs = response.jobsFind;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  listJobByType(idJob){
    this._jobService.listJobsByType(idJob).subscribe(
      response =>{
         console.log(response);
        this.jobs = response.jobsFind;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }
  listJobId(idJob){
    this._jobService.listJobsId(idJob).subscribe(
      response=>{
        this.jobModel = response.jobFind;
        console.log(response);

      }
    )
  }

  editarJob(){
    this._jobService.updateJob(this.jobModel).subscribe(
      response=>{
        console.log(response);
        this.listJob();
      }
      
    )
  }

  crearJob(){
    this._jobService.addJob(this.jobModel).subscribe(
      response=>{
        console.log(response);
        this.listJob();
      }
      
    )
  }

  eliminarJob(idJob){
    this._jobService.deleteJob(idJob).subscribe(
      response=>{
        console.log(response);
        this.listJob();
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
