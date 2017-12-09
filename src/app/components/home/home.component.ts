import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 currentUser:string;
  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
  createProject(): void {

  }

  //redirection vers la fenêtre pour la modification
  editProject(): void{
  }

  //Redirection vers la fenêtre pour la modification dans le but
  //de suppimer le projet
  deleteProject() {

  }
}
