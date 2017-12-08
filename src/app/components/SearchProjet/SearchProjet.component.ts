import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
//pour l'ajout de boutons etc..
import {MatButtonModule} from '@angular/material';
import {ProjetService} from 'app/services/index';
import {User} from 'app/models/user.model';
import {Projet} from 'app/models/projet.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';

import {AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument
      } from 'angularfire2/firestore';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-search',
  templateUrl: './SearchProjet.component.html',
  styleUrls: ['./SearchProjet.component.css']
})

export class SearchProjetComponent implements OnInit {

    model: any = {};
    searchterm: string;

    startAt = new Subject();
    endAt = new Subject();

    projets: any;
    all:any;

    startobs = this.startAt.asObservable();
    endobs = this.endAt.asObservable();

    results: Object;
    searchTerm$ = new Subject<string>();

    currentUser:string;


  constructor(private projetService: ProjetService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    //this.fauxData();
    //recuperation de tout le projet
    this.projetService.getAll().subscribe((projets) => {
     this.all = projets;
     this.projets = this.all;
   })
   //recuperation du contenu de recherche
   Observable.combineLatest(this.startobs, this.endobs)
             .subscribe((value) => {this.projetService
             .firequery(value[0], value[1])
             .subscribe((projets) => {this.projets = projets;})
                                   })
   }

   fauxData(){
     //cree un faux projet :)

     let Annotateurs: Array<Object> = ["josaphat", "toto","Etienne","Melanie","Damien","Annick","Abdias","Wisy"];
     this.create("1010","developpement","toto"," projet de developpement",Annotateurs);
     this.create("1011","annotator 1","Abdias"," projet d'annotation universitaire",Annotateurs);
     this.create("1012","annotator 2","toto"," projet d'annotation 2",Annotateurs);
     Annotateurs = [ "toto","Etienne","Melanie","Damien","Annick","Abdias","Wisy"];
     this.create("1013","medical","toto"," la medecine projet",Annotateurs);
     this.create("1014","histoire","josaphat"," projet d'annotation universitaire",Annotateurs);
     this.create("1015","java","toto"," langage de programmation",Annotateurs);
     this.create("1016","angular","toto"," projet d'annotation Angular",Annotateurs);
     this.create("1017","universitaire","Abdias"," projet d'annotation universitaire",Annotateurs);
     Annotateurs= ["josaphat","Etienne","Melanie","Damien","Annick","Abdias","Wisy"];
     this.create("1018","arduino","toto"," projet d'annotation universitaire",Annotateurs);
     this.create("1019","maven 2","toto"," gestion de projet",Annotateurs);
     this.create("1020","uima","josaphat"," projet d'annotation medical",Annotateurs);
     Annotateurs= ["josaphat","Etienne","Melanie","Damien","Annick","Abdias","Wisy"];
     this.create("1021","corpus","Melanie"," ensemble de fichier d'un projet",Annotateurs);
     this.create("1022","utilisateur","Etienne"," usager d'un systeme informatique",Annotateurs);

   }
   search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }else {
      this.projets = this.all;
    }
}

//Cree un projet
  	create(id:string,titre: string, admin:string, description:string, Annotateurs: Array<Object>){
      //admin=this.currentUser;
      this.model = { id,titre, admin,description,Annotateurs };
      this.projetService.create(this.model);
  	}
    select(name: string){
      //creation d'un token courant projet
      //qui contient le projet qui sera consulter
      localStorage.setItem('currentProjet',JSON.stringify(name));
    }
//Modifier un projet
  	edit(projet: string){

  	}

//Supprimer un projet
  	delete(){

  	}

}
