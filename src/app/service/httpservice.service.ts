import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Error } from '../model/error.model';
import { environment } from 'environments/environment'

@Injectable()

export class HttpserviceService {

  constructor(private _http: Http) { }

   getService(routname) : Observable<any> {
      
      let url = environment.apiService + '/' + routname;
      return this._http.get(url)
                       .map((res: Response) => {
                           let status = res.status;
                          if(status > 250) {
                            let error: Error = {status : status, message: res.json()}
                             return error;
                          }
                          else {
                           return <any>res.json();
                          }
                        })
                       .catch(this.errorHandler);
   }

   postService(routname, data): Observable<any>{
       let headers = new Headers({ 'Content-Type': 'application/json'});
       let options = new RequestOptions({headers: headers});

       let url = environment.apiService + '/' + routname;
       return this._http.post(url, data)
                    .map((res: Response)=>{
                        let status = res.status;
                        if(status > 250) {
                           let error: Error = {status : status, message: res.json()}
                           return error;
                        }
                        else {
                          return <any>res.json();
                        }
                    })
                    .catch(this.errorHandler);
   }

   putService(routname, id, data): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      let url = environment.apiService + '/' + routname  + '/' + id;
      return this._http.put(url, data, options)
                    .map((res: Response)=>{
                        let status = res.status;
                        if(status > 250) {
                           let error: Error = {status : status, message: res.json()}
                           return error;
                        }
                        else {
                          return <any>res.json();
                        }
                    })
                    .catch(this.errorHandler);
   }

   deleteService(routname, id): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      let url = environment.apiService + '/' + routname + '/' + id;
      return this._http.delete(url, options)
                    .map((res: Response)=>{
                        let status = res.status;
                        if(status > 250) {
                           let error: Error = {status : status, message: res.json()}
                           return error;
                        }
                        else {
                          return <any>res.json();
                        }
                    })
                    .catch(this.errorHandler);
   }

   patchService(routname, id, data): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      let url = environment.apiService + '/' + routname  + '/' + id;
      return this._http.put(url, data, options)
                    .map((res: Response)=>{
                        let status = res.status;
                        if(status > 250) {
                           let error: Error = {status : status, message: res.json()}
                           return error;
                        }
                        else {
                          return <any>res.json();
                        }
                    })
                    .catch(this.errorHandler);
   }


   private errorHandler(error: Response | any){
     let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
   }
}
