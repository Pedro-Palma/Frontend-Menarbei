import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/modelos/modelo.work';
import { JobsEmployeeService } from 'src/app/servicios/jobs-employee.service';
import { WorkService } from 'src/app/servicios/work.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-trabajo-aceptado',
  templateUrl: './trabajo-aceptado.component.html',
  styleUrls: ['./trabajo-aceptado.component.scss']
})
export class TrabajoAceptadoComponent implements OnInit {
  public employees;
  public works;
  public jobsPrice;
  public jobs;
  public identidadUsuario;
  public workModel: Work;
  public rutaId:String;
  

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _workService: WorkService,
    private _employeeService: JobsEmployeeService,
    private _router: Router
  ) {
    this.workModel = new Work("",{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},"",0,"","","");
   }

  ngOnInit(): void {
  
    this._activatedRoute.paramMap.subscribe(infoRuta => {
      this.rutaId = infoRuta.get('idWork');
  
    })
    this.obtenerWorkId();

  }

  obtenerWorkId(){
    this._workService.getWorkId(this.rutaId).subscribe(
    response =>{
       console.log(response);
      this.works = response.workFind;
    },
    error =>{
      console.log(<any>error)
    }
  )
}

aceptWorkE(){
  this._workService.aceptWorkE(this.works).subscribe(
  response =>{
     console.log(response);
     this.obtenerWorkId();
  },
  error =>{
    console.log(<any>error)
  }
)
}

cancelChangesWorks(){
  this._workService.cancelChangesWorks(this.works).subscribe(
  response =>{
     console.log(response);
     this.obtenerWorkId();
  },
  error =>{
    console.log(<any>error)
  }
)
}

changesWorks(){
  this._workService.changesWork(this.workModel,this.rutaId).subscribe(
  response =>{
     console.log(response);
     this.obtenerWorkId();
  },
  error =>{
    console.log(<any>error)
  }
)
}

finishWord(){
  this._workService.finishWorkEmployee(this.rutaId).subscribe(
    response =>{
      
       console.log(response);
       this._router.navigate(['/solicitudesEmpleado'])
    },
    error =>{
      console.log(<any>error)
    }
  )
}




}
