import { Injectable } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';
import { application } from '../model/application.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApplicationService {
    route: string = 'application';
    constructor(private _service: HttpserviceService) { }

    getApplication(): Observable<application> {
        
        return new Observable(observer => {
            let appModel: application = new application();   
            this._service.getService(this.route).subscribe(app => {                    
                appModel.setProperity(app[0]);
                observer.next(appModel);
                observer.complete();
            }, error => {  
                appModel.error = error;
                observer.next(appModel);
                observer.complete();
            });
        });
    }

    UpdateApplication(appData:application): Observable<application> {
        let appModel: application = new application();   
        return new Observable(observer => {
            this._service.patchService(this.route, appData.id, appData).subscribe(app=>{
                appModel.setProperity(app);
                observer.next(appModel);
                observer.complete();
            }, error => {
                appModel.error = error;
                observer.next(appModel);
                observer.complete();
            })
        })
    }
}