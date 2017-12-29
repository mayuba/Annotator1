//Ce sous-module permet d'ajouter un texte au corpus du projet

//Le code du dépôt de texte est une modification du code retrouvé
//ici: https://www.npmjs.com/package/ngx-file-drop

import { Component, OnInit } from '@angular/core';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop';

@Component({
  selector: 'app-gestionCorpus',
  templateUrl: './gestionCorpus.component.html',
  styleUrls: ['./gestionCorpus.component.css']
})
export class GestionCorpusComponent implements OnInit {
  Project: any = {};
  public files: UploadFile[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public dropped(event: UploadEvent){
    this.files = event.files;
    for(var file of event.files){
      file.fileEntry.file(info=> {
        console.log(info);
      });
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }


  //Ajoute un nouveau texte au projet en cours
  //le texte original est importe a partir du chemin donne
  addNew(path:string): boolean{
    return true;
  }

  //Supprime le texte donne en parametre du projet en question
  delete(text_id:number): boolean{
    return true;
  }

  //Modifie le chemin d'acces pour le texte (format texte) selon
  //le nouveau chemin donne en parametre
  modifyTextPath(text_id:number, newPath: string){

  }

  //Modifie le chemin d'acces pour le texte (format xmi) selon
  //le nouveau chemin donne en parametre
  modifyXMIPath(text_id:number, newPath: string){

  }

}
