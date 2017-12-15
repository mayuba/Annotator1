import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument
       } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
  user : User;

  private UserCollection : AngularFirestoreCollection<User>;

  constructor(private router: Router,
              private firebase : AngularFireAuth,
              private afs : AngularFirestore) {
    this.UserCollection = afs.collection<User>('User');
  }

  // Ajoute un nouvel utilisateur dans la base de données
  //addUser(model: User) {
    //this.firebase.auth.createUserWithEmailAndPassword(model.displayName,model.email, model.password);
    //model.displayName=model.username;
    //this.UserCollection.add(model);

//  }
/*A discuter
  addUserSocial(user: User){
  this.UserCollection.add(user);
  }
*/

  createUserWithEmail(user: User) {
        this.firebase.auth.createUserWithEmailAndPassword(
          user.email,
          user.password
        ).then(
          (success) => {
           console.log(success);
           console.log("display--->"+user.displayName);
           this.UserCollection.add(user);
          localStorage.setItem('currentUser', JSON.stringify(user.displayName));
          success.updateProfile({
            displayName: user.displayName//,
            //photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).catch(
          (err) => {
          //this.error = err;
          });
          this.router.navigate([''])
        }).catch(
          (err) => {
          //this.error = err;
        })
    }
  // Permet la modification des informations d'un utilisateur
  modifUser(id: number, username: string, password: string, email: string){

  }

  // Suppression d'un utilisateur
  delUser(id: number) {

  }

  // Permet de chercher les peojets dont il fait partie
  getProjects(id: number)  {

  }
  // Permet de chercher les peojets dont il est administrateur
  getAdmin(id: number)  {

  }

}
