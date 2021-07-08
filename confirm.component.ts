import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  

  ngOnInit(): void {
  }

  constructor(private router:Router){}
  gotoPage(pagename:string):void
  {this.router.navigate([`$(pagename)`]);
 
  }
  //myImage: string ="confirm/confirm.jpg";
  myImage: string ="assets/img/done.jpg";
}
