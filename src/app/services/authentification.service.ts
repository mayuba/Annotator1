import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {User} from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
//import { HeaderComponent } from '../shared/component/header/header.component';
//Le service d'authentification fournit les constantes et les fonctions requises pour la gestion de connexion.
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
@Injectable()
export class AuthentificationService {

	isNotLoggedIn:boolean = true;
	username:string ="";
	user:Observable<User>;
	currentUser: string=null;
	email:string;
	private UserCollection : AngularFirestoreCollection<User>;

  constructor(private afAuth : AngularFireAuth,
							private afs: AngularFirestore,
							private router: Router) {
				this.UserCollection = afs.collection<User>('User');
  }

  login(model : User) {
  	this.afAuth.auth.signInWithEmailAndPassword(model.email, model.password)
		.then(value => {
				console.log("login-->"+value.displayName);
				localStorage.setItem('currentUser', JSON.stringify(value.displayName));
				this.authenticated();
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout(){
  	this.afAuth.auth.signOut();
  }

  //Verifie si un utilisateur est connecté
  authenticated()  {
	this.afAuth.authState.subscribe(user => {
			if(user) {
				console.log("auth-->"+user.displayName);
				this.isNotLoggedIn=false;
				//var cU = localStorage.getItem('currentUser');
				//this.currentUser = cU == null ? '' : JSON.parse(cU).username;

				//if(this.currentUser=='')
				//localStorage.setItem('currentUser', JSON.stringify(user.displayName));

				//this.tokenNotvalide(value.displayName);
				//HeaderComponent.isUserLoggedIn = true;
        //HeaderComponent.updateUserStatus.next(true);
				this.router.navigateByUrl('');
/*
			//	-------------
			this.user = this.firebase.authState
		 .switchMap((user) => {
			 if (user) {
				 console.log(user.email);
				 return this.afs.doc<User>(`User/${user.email}`).valueChanges();
			 } else {
				 return Observable.of(null);
			 }
		 });
		 console.log(this.user);
		 this.user.subscribe((user1) => {

		 });*/
		}else{
			this.isNotLoggedIn=true;
		}
		});
		return this.isNotLoggedIn;

  }

	private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((value) => {
        //this.notify.update('Welcome to Firestarter!!!', 'success');
        //return this.updateUserData(credential.user);
				console.log("login-->"+value.user.displayName);
				this.username=value.user.displayName;
				this.email=value.user.email;
				let userContent: Array<Object> = [this.username,this.email];
				//this.UserCollection.add(userContent);
				//this.tokenNotvalide(value.displayName);
				//var cU = localStorage.getItem('currentUser');
				//this.currentUser = cU == null ? '' : JSON.parse(cU).username;

				localStorage.setItem('currentUser', JSON.stringify(value.user.displayName));
				this.authenticated();
      })
      .catch((error) =>  this.handleError(error) );
  }

	googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }
	// If error, console log and notify user
 private handleError(error: Error) {
	 console.error(error);
	 //this.authenticated();
	 //this.notify.update(error.message, 'error');
 }
	CorrigeToken(){

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
