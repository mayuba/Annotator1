import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/services/index';
import { Router } from '@angular/router';
import { HeaderComponent } from 'app/shared/component/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  isNotLoggedIn:boolean;
  constructor(private auth : AuthentificationService,
  private router: Router) { }

  ngOnInit() {
  console.log(this.isNotLoggedIn);
  this.isNotLoggedIn=this.authenticated();

  console.log(this.isNotLoggedIn);
  //Assure la déconnexion d'un texte ou d'un projet en cas de redirection depuis
  //un projet/annotation/gestion-usager
  localStorage.removeItem('currentProjet');
  localStorage.removeItem('currentText');
  }
  /// Social Login
  signInWithGithub() {
    this.auth.githubLogin()
    .then(() => this.afterSignIn());
  }

  signInWithGoogle() {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }

  signInWithFacebook() {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }

  signInWithTwitter() {
    this.auth.twitterLogin()
      .then(() => this.afterSignIn());
  }
  //Connexion d'un utilisateur
  login() {
   this.auth.login(this.model);
   console.log("login->"+this.isNotLoggedIn);
   this.isNotLoggedIn=this.authenticated();
  }

  logout(){
    this.auth.logout();
  }

  authenticated(){
    if(!this.auth.authenticated()){
      console.log("header activer");
      HeaderComponent.isUserLoggedIn = true;
      HeaderComponent.updateUserStatus.next(true);
      return false;
    }else
    return true;
  }

  /// Shared
 private afterSignIn() {
   // Do after login stuff here, such router redirects, toast messages, etc.

   console.log("login->"+this.isNotLoggedIn);
   this.isNotLoggedIn=this.authenticated();
   this.router.navigate(['/']);
 }
}
