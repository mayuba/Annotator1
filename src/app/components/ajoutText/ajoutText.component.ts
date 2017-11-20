//Ce sous-module permet d'ajouter un texte au corpus du projet

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutText',
  templateUrl: './ajoutText.component.html',
  styleUrls: ['./ajoutText.component.css']
})
export class AddTextComponent implements OnInit {
  Project: any = {};
 	Corpus: File[]=[];

  constructor() {

  }

  ngOnInit() {
  }

  addNew(titre:string){

  }

}
