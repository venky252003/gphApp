export class application {
    name='';
    address='';
    bulider='';
    survayNo='';
    id='';
    error='';
  
    constructor() {   
        
    }  

    setProperity(responseData?: any){
        if(responseData != undefined) {
            this.name = responseData.name;
            this.address = responseData.address;
            this.bulider = responseData.bulider;
            this.survayNo = responseData.survayNo;
            this.id = responseData._id;
        }
    }  

    IsError(): boolean{
        if(this.error != '')
            return true;
        else
            return false;
    }
}