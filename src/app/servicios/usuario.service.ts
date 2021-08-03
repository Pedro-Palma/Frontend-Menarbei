import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./global.service";
import { Usuario } from '../modelos/modelo.usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: String;
  public identidad;
  public identidadLiga;
  public headersV = new HttpHeaders().set('Content-Type', 'application/json');
  public token;


  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
   }


  eliminarUsuario(id: Usuario):Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())


    return this._http.delete(this.url + '/deleteUsers/' + id, {headers: headersToken})
  }

   editarUsuario(usuario: Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersV.set('Authorization', this.getToken())


    return this._http.put(this.url + '/updateUsers/' + usuario._id, params, {headers: headersToken})
  }
  editarUsuarios(id,usuario: Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersV.set('Authorization', this.getToken())


    return this._http.put(this.url + '/updateUsers/' + id, params, {headers: headersToken})
  }
  addComent(usuario, id):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersV.set('Authorization', this.getToken())


    return this._http.put(this.url + '/addComentUser/' + id, params, {headers: headersToken})
  }

  confirmarUsuario(id):Observable<any>{


    return this._http.put(this.url + '/employeeUpdateRole/' + id, {headers: this.headersV})
  }

  obtenerEmpleado(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/listEmployees', {headers: headersToken})
   }

   obtenerEmpleadoP(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/listEmployeesProcess', {headers: headersToken})
   }



   obtenerUsuarios(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/listUsers', {headers: headersToken})
   }
   getRecord(): Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.get(this.url + '/getRecord', {headers: headersToken})
   }

   registroAdmin(usuario: Usuario): Observable<any>{

    let headersToken = this.headersV.set('Authorization', this.getToken())
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/registerAdmin', params, { headers: headersToken })
   }


  //-------------------------usuario logueado------------------------
   eliminarCuenta():Observable<any>{
    let headersToken = this.headersV.set('Authorization', this.getToken())

    return this._http.delete(this.url + '/deleteProfile'  ,{headers: headersToken})
  }
   editarCuenta(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersV.set('Authorization', this.getToken())
    console.log(usuario)
     return this._http.put(this.url + '/updateProfile/', params, {headers: headersToken})
   }


   obtenerUsuarioId(id:String): Observable<any>{
    return this._http.get(this.url + '/findUserId/'+ id, {headers: this.headersV})
  }
  //-----------------Funciones generales---------------------------------------------------------------------------------
  registro(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/registerClient', params, { headers: this.headersV })
   }

   registroEmployee(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/registerEmployee', params, { headers: this.headersV })
   }
   login(userLog): Observable<any> {
    let params = JSON.stringify(userLog);

    return this._http.post(this.url + '/login', params, { headers: this.headersV });
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
