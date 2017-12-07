import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import {Projet} from '../models/projet.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProjetService {
  selfProject:Observable<User[]>;
  All: Observable<Projet[]>;

  projet: Array<string>;
  user: Observable<User[]>;

  projetList: Observable<User[]>;

  private ProjetCollection: AngularFirestoreCollection<Projet>;
  private userCollection: AngularFirestoreCollection<User>;

  currentUser:string;

  constructor(private afs: AngularFirestore) {
    //recupere le token de l'utilisateur courant
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.ProjetCollection = afs.collection<Projet>('Projet');
    this.userCollection = afs.collection<User>('User');

    this.selfProject= this.userCollection.valueChanges();
    this.All = this.ProjetCollection.valueChanges();
  }


  //recuperer la liste de projets d'un utilisateur
  oneSelf() {
    let tabProjet: Observable<User[]>;
    this.userCollection = this.afs.collection('User', ref => {
        return ref.where('username', '==', 'josaphat')
    });
    this.projetList =  this.userCollection.valueChanges();
    return this.projetList;
  }
  //Obtention de la liste de tous les projets
  getAll(){
    return this.All;
  }
  //Obtention du modèle du projet à partir de son id
  getModel(id:number){

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
