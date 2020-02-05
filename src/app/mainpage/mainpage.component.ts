import { Component, OnInit } from '@angular/core';
import { UploadserviceService } from '../uploadservice.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private abc:UploadserviceService) { 
   
   }

   myarr = this.abc.information;

  ngOnInit() {
   }



  




}

