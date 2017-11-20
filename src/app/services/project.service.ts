import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import{Observable} from 'rxjs/Observable';


@Injectable()

export class ProjetService {
  //corpusCollection:AngularFirestoreCollection<IDocument>
  //documentListe:Observable<Item[]>;

  constructor() {

  }

  //Obtention du titre du projet selon son id
  getTitre(projectId:string){

  }
  //Obtention de la liste d'utilisateurs
  getListUsers(projectId:string){

  }

  //Obtention du corpusCollection
  getCorpus(projectId:string){

}
  

  //Ajout d'un nouveau projet dans la base de donnees
  addProject(titre:string, adminId:string, userList?:[string]){

  }
  //suppression d'un projet
  removeProject(projectId: string){

  }

}
