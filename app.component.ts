import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  
  constructor(private router:Router){


  }
  gotoPage(pagename:string):void
  {
    //this.router.navigate([`$(pagename)`]);
 this.router.navigate(['/confirm'])
  }
  myImage: string ="dist/angularapp/assets/done.jpg";
}
