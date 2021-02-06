import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Clients } from 'src/app/module/clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id : string
  client: Clients

  constructor(
    private router :ActivatedRoute ,
     private dataservices : ClientService ,
      private _flashMessagesService:FlashMessagesService ,
      private Route:Router)
     { }

  ngOnInit(): void {

    this.id= this.router.snapshot.params["id"];
    this.dataservices.getclient(this.id).subscribe(res =>{
      this.client= res;
    }
      )
  }

  updateclient()
  {
    this.client.id= this.id;
    this.dataservices.updatecleint(this.client);
    this._flashMessagesService.show('bine Modifier' , {cssClass: 'alert-warning' , timeout: 2000});
    this.Route.navigate(["/"]);


  }

  // deleted



}
