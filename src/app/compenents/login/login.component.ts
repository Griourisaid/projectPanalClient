import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { map } from 'rxjs/operators';
import { AuthclientService } from 'src/app/services/authclient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emil:string
  constructor(private auth :AuthclientService ,
              private flashmessge: FlashMessagesService ,
              private route:Router ,
              private auther : AngularFireAuth) { }

  ngOnInit(): void {
    this.nglogin();
  }
  Email:string;
  password: string;

  nglogin()
  {
    this.auth.getAouth().subscribe(auth =>{

      if(auth)
      {
        return this.route.navigate(["/"]);
      }
    })


  }
  loginwithgoogle()
  {
    this.auth.getwidgoogle().then(auth =>{
      if(auth)
      {
         this.flashmessge.show("your are login succcessfuly" ,{
           cssClass:" alert-success",
           timeout:5000
         })
       this.route.navigate(["/"]);
      }
    })
    .catch(error =>{

      this.flashmessge.show(error ,{
        cssClass:"alert-danger",
        timeout:5000
      })

    })
  }

  login()
  {
    this.auth.login(this.Email , this.password).then(auth =>{
      if(auth)
      {
         this.flashmessge.show("your are login succcessfuly" ,{
           cssClass:" alert-success",
           timeout:5000
         })
       this.route.navigate(["/"]);
      }
    })
    .catch(error =>{

      this.flashmessge.show(error ,{
        cssClass:"alert-danger",
        timeout:5000
      })

    })
  }

}
