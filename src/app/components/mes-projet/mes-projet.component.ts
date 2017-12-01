import { Component, OnInit } from '@angular/core';
import {ProjetService} from 'app/services/index';

@Component({
  selector: 'app-mes-projet',
  templateUrl: './mes-projet.component.html',
  styleUrls: ['./mes-projet.component.css']
})
export class MesProjetComponent implements OnInit {

  myprojects: File[]=[];
  model: any = {};
  currentUser:string;

  constructor(private projet: ProjetService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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

}
