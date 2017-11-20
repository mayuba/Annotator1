import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logOut() {

  }
  //Récupération des informations sur l'utilisateur (référence a user.service)
  userInfo() {

  }

  //Récupération des informations sur les projets (référence a project.service)
  projectInfo() {

  }

   //Redirection vers le module projet pour la creation d'un projet
  createProject() {

  }

  //Redirection vers le module projet pour la modification
  editProject() {

  }

}
