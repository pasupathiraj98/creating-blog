import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
 


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private activatedroute:ActivatedRoute) {

    console.log(activatedroute.snapshot.params.name);
    console.log(activatedroute.snapshot.params.id);
   }

  ngOnInit() {
  }





}
