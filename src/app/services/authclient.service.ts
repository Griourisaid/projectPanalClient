import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthclientService {

  constructor(private authf:AngularFireAuth) { }


  getAouth()
  {
     return this.authf.authState.pipe(map(auth => auth ))
  }






  //login

  login(Email : string , Password: string)
  {

    return new Promise((resolve , rejects) =>{
      this.authf.signInWithEmailAndPassword(Email, Password)
      .then((usedate)=> resolve(usedate) , (error)=> rejects(error))
    })
  }

  regsert(Email : string , Password: string)
  {

    return new Promise((resolve , rejects) =>{
      this.authf.createUserWithEmailAndPassword(Email, Password)
      .then((usedate)=> resolve(usedate) , (error)=> rejects(error))
    })
  }


  getwidgoogle()
  {

    return new Promise((resolve , rejects) =>{
      this.authf.signInWithPopup(new firebase.auth.GoogleAuthProvider() )
      .then((usedate)=> resolve(usedate) , (error)=> rejects(error))
    })

  }

  //logout

  logout()
  {
    return this.authf.signOut()
  }


}
