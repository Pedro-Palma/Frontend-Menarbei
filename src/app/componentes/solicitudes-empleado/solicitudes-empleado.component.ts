import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/modelos/modelo.work';
import { WorkService } from 'src/app/servicios/work.service';

@Component({
  selector: 'app-solicitudes-empleado',
  templateUrl: './solicitudes-empleado.component.html',
  styleUrls: ['./solicitudes-empleado.component.scss']
})
export class SolicitudesEmpleadoComponent implements OnInit {
  public works;
  public identidadUsuario;
  public workModel: Work;
  public worksSelected:Work;

  constructor(
    
    private _workService: WorkService
    
    
  ) {
    this.workModel = new Work("",{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},"",0,"","","");
    this.worksSelected = new Work("",{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},{_id:"",name:""},"",0,"","","");
   }

  ngOnInit(): void {
    this.obtenerTrabajos();
  }

  obtenerTrabajos(){
    this._workService.getWorkAvialable().subscribe(
      response =>{
         console.log(response);
        this.works = response.workFound;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  obtenerWorkId(id){
    this._workService.getWorkId(id).subscribe(
    response =>{
       console.log(response);
      this.worksSelected = response.workFind;
    },
    error =>{
      console.log(<any>error)
    }
  )
}

}
