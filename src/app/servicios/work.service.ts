import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./global.service";

import { Work } from '../modelos/modelo.work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  public url: String;
  public identidad;
  public WordId;
  public headersV = new HttpHeaders().set('Content-Type', 'application/json');
  public token;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
   }

   confirmWorkClient(id): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/confirmClientWork/' + id, { headers: headersToken })
  }
  finishWorkEmployee(id): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/finishWorkEmployee/' + id, { headers: headersToken })
  }

  aceptWorkE(id: Work): Observable<any>{
    let params = JSON.stringify(id);
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.put(this.url + '/aceptEmployee' , params,  { headers: headersToken })
  }

  cancelChangesWorks(id): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/cancelChangesWorks/'+id,  { headers: headersToken })
  }

  changesWork(id: Work,idWork): Observable<any>{
    let params = JSON.stringify(id);
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.put(this.url + '/changeWork/'+ idWork , params,  { headers: headersToken })
  }

   getWorkId(id): Observable<any>{

    return this._http.get(this.url + '/findWorkId/' + id, { headers: this.headersV })
  }

  obtenerWorkId(id): Observable<any>{

    return this._http.get(this.url + '/getWorkUser/' + id, { headers: this.headersV })
  }
   getWorkCliente(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/getProcessWork', { headers: headersToken })
  }

  getWorkAvialable(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

      return this._http.get(this.url + '/getWorkAvailable', { headers: headersToken })
  }
  addWorkClient(work: Work): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())
    let params = JSON.stringify(work);

    return this._http.post(this.url + '/addWorkClient', params, { headers: headersToken })
  }

  cancelWork(id): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.delete(this.url + '/cancelWork/' + id, { headers: headersToken })
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
