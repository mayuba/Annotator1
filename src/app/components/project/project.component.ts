import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
//pour l'ajout de boutons etc..
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

	model: any = {};
	Projects: File[]=[];
 	Corpus: File[]=[];

  constructor() { }

  ngOnInit() {
  }
//loadProjects pour le chargement du projet

  	loadProjects(){

  	}
//loadCorpus pour le chargement du texte du projet

  	loadCorpus(project: string){

  	}
//loadLinkToStorage pour le transfert de lien dans le cookie(navigateur)

	loadLinkToStorage(link: string){

	}
//addText pour donner accés au bouton d'ajout d'un texte

  	addText(){

  	}
//

  	create(){

  	}

//

  	edit(projet: string){

  	}

  	//

  	delete(){

  	}

}
