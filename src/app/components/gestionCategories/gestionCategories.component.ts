import { Component, OnInit, Input } from '@angular/core';
import {ProjetService} from 'app/services/index';

@Component({
  selector: 'app-gestionCategorie',
  templateUrl: './gestionCategories.component.html',
  styleUrls: ['./gestionCategories.component.css']
})
export class GestionCategoriesComponent implements OnInit {
//  @Input() childMessage: string;
  model: any = {};
  currentUser: string;
  currentProject: string;
  currentColours: Array<string>;
  //count:number;
  colorList:any;
  constructor(private projetService: ProjetService) {
    this.colorList = projetService.getAllCouleurs();
    console.log(this.colorList);
  }

  ngOnInit() {
  }

  //Suppression de la categorie dont l'ordre est donnee en parametre
  delete(ordre: number):boolean{
    return true;
  }

  getAllowedColours(item){
    let coloursArray: string[]=[];
    for(let each of this.generateArray(item.categories)){
      console.log(each.value);
    //  coloursArray.push(each);
    }
  //  console.log(coloursArray);
    return [1,2,3];
  }

  generateArray(obj){
    return Object.keys(obj)
      .map((key)=>{ return {key:key, value:obj[key]}});
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
