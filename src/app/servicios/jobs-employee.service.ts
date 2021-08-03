import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./global.service";
import { Job } from '../modelos/modelo.job';
import { TypeEmployee } from '../modelos/modelo.typeEmployee';

@Injectable({
  providedIn: 'root'
})
export class JobsEmployeeService {
  public url: String;
  public identidad;
  public jobIde;
  public typeEIde
  public headersV = new HttpHeaders().set('Content-Type', 'application/json');
  public token;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }
  /* Rutas de Jobs */
  listJobsByType(id): Observable<any>{
    console.log(id)
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/listJobsByType/' + id, { headers: headersToken});
  }

  listJobsId(id): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/findJobId/' + id, { headers: headersToken});
  }
  listJobs(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/listJobs', { headers: headersToken});
  }

  addJob(typeE: TypeEmployee): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())
    let params = JSON.stringify(typeE);

    return this._http.post(this.url + '/addJob', params, { headers: headersToken })
  }
  updateJob(job: Job): Observable<any>{
    let params = JSON.stringify(job);
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.put(this.url + '/updateJob/' + job._id, params, { headers: headersToken })
  }
  deleteJob(id): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.delete(this.url + '/deleteJob/'+id, { headers: headersToken })
  }

  /* Rutas de TypeEmployee */
  listTypeEmployeeId(id: String): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/findTypeEmployeeId/'+id, {headers: headersToken})
  }
  listTypeEmployee(): Observable<any>{


    return this._http.get(this.url + '/listTypeEmployee', {headers: this.headersV})
  }
  addTypeEmployee(typeE: TypeEmployee): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())
    let params = JSON.stringify(typeE);

    return this._http.post(this.url + '/addTypeEmployee', params, { headers: headersToken })
  }
  updateTypeEmployee(typeE: TypeEmployee): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())
    let params = JSON.stringify(typeE);

    return this._http.put(this.url + '/updateTypeEmployee/' + typeE._id, params, { headers: headersToken })
  }
  deleteTypeEmployee(id): Observable<any> {
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.delete(this.url + '/deleteTypeEmployee/' + id, { headers: headersToken })
  }

  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('persona'));
    if (identidad2 != 'undefined') {
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }
    return this.identidad;
  }
  getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }
}



