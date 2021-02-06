import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Clients } from 'src/app/module/clients';
import { AuthclientService } from 'src/app/services/authclient.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  client :Clients ={
    LastName: "",
    FisrtName:"",
    Email : "",
    Address : "",
    Country: "",
    Phone : 0,
    Prix: 0,
    userid:""
  }
  constructor(private dataservier : ClientService ,
               private router:Router  ,
               private _flashMessagesService: FlashMessagesService,
               private auth: AuthclientService) { }

  ngOnInit(): void {
    this.auth.getAouth().subscribe(auth=>{
      this.client.userid= auth.uid;
    })
  }

  onsbmit()
  {
    this.dataservier.addnewclinet(this.client);
    this.router.navigate (["/"]);
    this._flashMessagesService.show('bien ajouter' , {cssClass: 'alert-success ' , timeout: 1000})

  }

}
