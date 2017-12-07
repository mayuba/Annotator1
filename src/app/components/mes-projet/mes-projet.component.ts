import { Component, OnInit } from '@angular/core';
import {ProjetService} from 'app/services/index';
import{Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-mes-projet',
  templateUrl: './mes-projet.component.html',
  styleUrls: ['./mes-projet.component.css']
})
export class MesProjetComponent implements OnInit {


  model: any = {};
  currentUser:string;
  projet: Array<string>;

  constructor(private projetService: ProjetService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.model=this.projetService.oneSelf("josaphat");
  }

  ngOnInit() {

  }
  //chargement de la liste de projets du courant utilisateur
  load() {
       this.projet.oneSelf(this.currentUser).subscribe(myprojects => { this.myprojects = myprojects; });
    }
  search(word:string){

  }
  edit(){ }
  IsAdmin(){}
  select(id: string){}
  //generateArray converti une liste en object
  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
}
}
