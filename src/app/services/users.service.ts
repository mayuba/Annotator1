import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  // Ajoute un nouvel utilisateur dans la base de données
  addUser(username: string, password: string, email: string) {

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
