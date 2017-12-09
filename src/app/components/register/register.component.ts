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

  // Pour l'inscirption d'un nouvel utilisateur
  register() {
    this.userService.addUser(this.model);
  }

}
