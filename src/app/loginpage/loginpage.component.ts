import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }


 ngOnInit(){

 console.log("Respond when Angular");
 }


ngDoCheck(){
console.log("updating login page");
	
}

ngOnDestroy(){
	console.log("say hello to blog!");

}	

}



