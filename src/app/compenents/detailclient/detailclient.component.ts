import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from 'src/app/module/clients';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css']
})
export class DetailclientComponent implements OnInit {

  id: string
  client:Clients
  constructor( private router:ActivatedRoute , private dataserver : ClientService ,private route : Router) { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params["id"];

    this.dataserver.getclient(this.id).subscribe(res =>{
     this.client= res;
    })
  }

  delete(id: string)
  {




  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {

    if (result.value) {

      Swal.fire(
        'Deleted!',
        'deleted client.',
        'success'

      )
      this.dataserver.deleted(id);
      this.route.navigate(["/"]);

    }
  })

  }

}
