import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionProjet',
  templateUrl: './gestionProjet.component.html',
  styleUrls: ['./gestionProjet.component.css']
})
export class gestionProjetComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //Suppression de la categorie dont l'ordre est donnee en parametre
  delete(ordre: number):boolean{
    return true;
  }

  //Ajout d'une nouvelle categorie d'annotation au projet en cours.  L'ordre
  //sera selon la valeur actuelle de la variable "count"
  add(titre: string): boolean{
    return true;
  }

  //Modification du titre d'une categorie d'annotation selon le titre donne en
  //parametre
  edit(ordre: number, newTitre: string):void{

  }
}
