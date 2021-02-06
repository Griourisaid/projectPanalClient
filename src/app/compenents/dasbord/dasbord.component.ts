import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/module/clients';
import { AuthclientService } from 'src/app/services/authclient.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dasbord',
  templateUrl: './dasbord.component.html',
  styleUrls: ['./dasbord.component.css']
})
export class DasbordComponent implements OnInit {
   clients : Clients  [];
   totals:number=0;
   serch : Clients[];
  constructor( private data:ClientService ,private auths: AuthclientService) { }

  ngOnInit(): void {
          this.auths.getAouth().subscribe(auth=>{
            this.data.getdata(auth.uid).subscribe(res=>{
             this.serch=  this.clients= res;
              this.totals= this.total();
              console.log(res.toString());
            })
          })


       /*  this.data.getdata().subscribe(res=>{
          this.clients= res;
          this.totals= this.total();
        })
        */





  }

  //search les donnes in datbel
  search(query : string)
  {
    this.serch= (query)?this.clients.filter(client=> client.FisrtName.toLowerCase().includes(query.toLowerCase())) : this.clients

  }

  total()
  {
    return this.clients.reduce((totals , clients)=>{
      return totals + parseFloat(clients.Prix.toString());
    },0)
  }

}
