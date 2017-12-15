import { Component, OnInit } from '@angular/core';
import {UsersService} from 'app/services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   model: any = {};
   constructor(private userService : UsersService) {

  }

  ngOnInit() {
  }

  // Pour l'inscirption d'un nouvel utilisateur a l'aide d'un email
  register() {
    this.model.username=this.model.displayName;
    //this.userService.userExiste(this.model);
    this.userService.createUserWithEmail(this.model);
  }

}
