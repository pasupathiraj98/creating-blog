import { Component, OnInit } from '@angular/core';
import { UploadserviceService } from '../uploadservice.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {

  constructor(private abc:UploadserviceService) { }

  ngOnInit() {
  }

  regform=new FormGroup({
    
    name:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    createblog:new FormControl('',[Validators.required]), 
    
       
    })

boo(){
this.abc.information.push(this.regform.value);
}



}
