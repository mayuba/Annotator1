import { Component, OnInit } from '@angular/core';

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

  	loadProjects(){

  	}

  	loadCorpus(project: string){

  	}

	loadLinkToStorage(link: string){

	}
	
  	addText(){

  	}

}
