import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Assure la déconnexion d'un texte ou d'un projet en cas de redirection depuis
    //un projet/annotation/gestion-usager
    localStorage.removeItem('currentProjet');
    localStorage.removeItem('currentText');
  }

}
