import { Component, OnInit, Inject } from '@angular/core';
import {ProjetService} from 'app/services/index';
import{Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule} from '@angular/material';
import {NgForm} from '@angular/forms';
import {gestionProjetComponent} from '../gestionProjet/gestionProjet.component';

@Component({
  selector: 'app-mes-projet',
  templateUrl: './mes-projet.component.html',
  styleUrls: ['./mes-projet.component.css']
})
export class MesProjetComponent implements OnInit {

  //myprojects: File[]=[];
  model: any = {};
  currentUser:string;
  projet: Array<string>;

  constructor(private projetService: ProjetService) {
    this.load();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


  }

  ngOnInit() {

  }

  //openProjetDialog(): void{
    //let dialogRef = this.dialog.open(gestionProjetComponent, {
      //width: '300px',
      //data: { categoryName: this.categoryName, categoryColor: this.categoryColor }
    //});
//verifie si l'utilisateur est le courant utilisateur
//pour permettre de lui donner les privileges selon son role
//aussi afficher que les projets qu'il participe
  currentUserTrue(User: string){
     if(User == this.currentUser)
      return true;
     else
      return false;
  }
  //chargement de la liste de projets du courant utilisateur
  load() {
    this.model=this.projetService.oneSelf();
  }
  search(word:string){}
  edit(){ }
  IsAdmin(){}
  select(name: string){
    //creation d'un token courant projet
    //qui contient le projet qui sera consulter
    localStorage.setItem('currentProjet',JSON.stringify(name));
  }
  //generateArray pour recuperer les atribut d'un object
  generateArray(obj){
    return Object.keys(obj)
      .map((key)=>{ return {key:key, value:obj[key]}});
  }
}
