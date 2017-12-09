import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private auth : AuthentificationService) { }

  ngOnInit() {
  }

  //Connexion d'un utilisateur
  login() {
   this.auth.login(this.model);
   if(this.auth.authenticated()) {
      console.log("Connected!");
   }else {
      console.log("Not connected");
   }
  } 
}
