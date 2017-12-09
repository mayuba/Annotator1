import { Injectable } from '@angular/core';
import {AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument
       } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Projet} from '../models/projet.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProjetService {
  All: Observable<Projet[]>;
  projet: Array<string>;
  projetList: Observable<Projet[]>;

  private ProjetCollection: AngularFirestoreCollection<Projet>;

  currentUser:string;

  constructor(private afs: AngularFirestore) {
    //recupere le token de l'utilisateur courant
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ProjetCollection = afs.collection<Projet>('Projet');
    this.All = this.ProjetCollection.valueChanges();
  }


  //recuperer la liste de projets d'un utilisateur
  oneSelf() {
    this.projetList =  this.ProjetCollection.valueChanges();
    return this.projetList;
  }
  //Obtention de la liste de tous les projets
  getAll(){
  return this.afs
             .collection('Projet', ref => ref
             .orderBy('titre'))
             .valueChanges();
}
//cree requete sur firebase pour recuperer au moins
//4 element du mot de recherche
firequery(start, end) {
  return this.afs
             .collection('Projet', ref => ref.limit(4)
             .orderBy('titre').startAt(start).endAt(end))
             .valueChanges();
}
  //Obtention du modèle du projet à partir de son id
  getModel(id: string){
    let tabProjet: Observable<User[]>;
    this.userCollection = this.afs
        .collection('Projet', ref => {
          return ref.where('id', '==', id)
          this.projetList =  this.ProjetCollection.valueChanges();
    });
    this.projetList =  this.userCollection.valueChanges();
    return this.projetList;
  }

  //Création d'un nouveau projet
  create(projet: Projet){
    this.ProjetCollection.add(projet);
  }
  //suppression d'un projet
  //a modifier: au lieu de id avoir le modele Project...donne des erreurs...
  delete(projectId:number){

  }

  //Modification des données d'un projet
  //meme probleme qu'avec delete
  edit(projectId: number){

  }

}
