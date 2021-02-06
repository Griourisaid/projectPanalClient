import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Email: string;
  Password : string;
  constructor(
    private auth : AuthclientService,
    private  messageflsah : FlashMessagesService ,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  register()
  {
    this.auth.regsert(this.Email , this.Password).then(auth=>{

      this.messageflsah.show("your are login succcessfuly" ,{
        cssClass:" alert-success",
        timeout:5000
      })
     this.route.navigate(["/"]);

    }).catch(error=>{

      this.messageflsah.show(error ,{
        cssClass:"alert-danger",
        timeout:5000
      })
    })
  }

}
