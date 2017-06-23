import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { application } from '../model/application.model';
import { ApplicationService } from './application.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  providers: [ApplicationService]
})
export class ApplicationComponent implements OnInit {
  appForm : FormGroup;
  Message: string;
  app : application;  
  showAlert: boolean = false;
  alertStyle: string = 'alert-success';
 
  constructor(private fb: FormBuilder, private service: ApplicationService) {
     this.createForm();   
   }

   onClose() {
        this.showAlert = false;
   }

  ngOnInit() {
     
  }

  setFormValue(){
      if(!this.app.IsError()){      
          this.appForm.setValue({
            name: this.app.name,
            address: this.app.address,
            bulider: this.app.bulider,
            survayNo: this.app.survayNo
          });
      }
      else
      {
          this.alertStyle = 'alert-danger';
          this.showAlert = true;
      }  
  }

  onSubmit() {   
      if(this.appForm.valid) {
        this.app.address = this.appForm.value.address;
        this.app.bulider = this.appForm.value.bulider;
        this.app.name = this.appForm.value.name;
        this.app.survayNo = this.appForm.value.survayNo;

        this.service.UpdateApplication(this.app).subscribe(result => {          
          this.app = result;
         if(this.app != null ) {     
             this.showAlert = true;
             this.Message = "Update Sucessfully";
             this.setFormValue();
          }
        }, error => {

        });
      }     
  }

  createForm() {
    this.appForm = this.fb.group({
       name: ['', Validators.required],
       address:['', Validators.required],
       bulider:'',
       survayNo: ''
     });
      
     this.service.getApplication().subscribe(ap => {       
        this.app = ap;
         if(this.app != null ) {     
            this.setFormValue();      
        }
     });    
     
  }

}
