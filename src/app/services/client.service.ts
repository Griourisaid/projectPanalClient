import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument   } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Clients } from '../module/clients';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clintes:AngularFirestoreCollection<Clients>;
  clientsDoc : AngularFirestoreDocument<Clients>
clints:Observable<Clients[]>;

  constructor(private afs:AngularFirestore) {
    this.clintes= this.afs.collection('Clients');

  }

  getdata(user : string) :Observable<Clients []>

  {
    return  this.afs.collection("Clients" ,ref=>ref.where("userid",'==' ,user  )).snapshotChanges()
     .pipe(
    map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Clients;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  addnewclinet(client :Clients)
  {
    this.clintes.add(client);

  }

  updatecleint(client :Clients)
  {
     this.clientsDoc= this.clintes.doc(client.id);
     this.clientsDoc.update(client);

  }
  //get client

  getclient(id :string) : Observable<Clients>
  {
      return this.clintes.doc(id).valueChanges()
  }

  // delete
  deleted(id : string)
  {
     this.clientsDoc= this.clintes.doc(id);
     this.clientsDoc.delete();

  }

}
