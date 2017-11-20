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
  getTitre(projectId:number){

  }
  //Obtention de la liste d'utilisateurs
  getListUsers(projectId:number){

  }

  //Obtention du corpusCollection
  getCorpus(projectId:number){

}


  //Ajout d'un nouveau projet dans la base de donnees
  addProject(titre:string, adminId:number, userList?:[number]){

  }
  //suppression d'un projet
  removeProject(projectId: number){

  }

  //Obtention du titre du projet selon lutilisateur
  getTitre(projectId[]: number){

  }

}
