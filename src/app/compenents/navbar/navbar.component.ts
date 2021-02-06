import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { map } from 'rxjs/operators';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auths :AuthclientService ,
              private flashmessge: FlashMessagesService ,
              private route:Router ,

  ) { }

  isloge : boolean= false;
  email :string;

  nglogin()
  {
    this.auths.getAouth().subscribe(auth =>{
      if(auth)
      {
        this.isloge= true;
        this.email= auth.email;

      }
      else
      {
        this.isloge= false;
      }
    })
  }


  ngOnInit(): void {
    this.nglogin();

  }



  getlogout()
  {
    this.auths.logout();
    this.route.navigate(["/login"]);
  }

}
