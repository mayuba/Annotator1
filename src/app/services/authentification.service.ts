import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {User} from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//Le service d'authentification fournit les constantes et les fonctions requises pour la gestion de connexion.
@Injectable()
export class AuthentificationService {

	authState:any = null;

	user:Observable<firebase.User>;

  constructor(private firebase : AngularFireAuth) { 
  	this.firebase.authState.subscribe((auth) => {
  		this.authState = auth
  	});
  }

  login(model : User) {
  	this.authState = this.firebase.auth.signInWithEmailAndPassword(model.email, model.password);
  }

  logout() {
  	this.firebase.auth.signOut();
  }

  //Verifie si un utilisateur est connecté
  authenticated() :boolean  {
    return !this.authState;
  }
}

/*
	.then(value => {
  	  return true;
  	})
  	.catch(err => {
  	  return false;
  	});
  	this.user = this.firebase.authState;
  	console.log(this.user);
  	return this.user;

*/
 