import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument
       } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  user : User;

  private UserCollection : AngularFirestoreCollection<User>;

  constructor(private firebase : AngularFireAuth, private afs : AngularFirestore) { 
    this.UserCollection = afs.collection<User>('User');
  }

  // Ajoute un nouvel utilisateur dans la base de données
  addUser(model: User) {
    this.firebase.auth.createUserWithEmailAndPassword(model.email, model.password);
    this.UserCollection.add(model);
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
