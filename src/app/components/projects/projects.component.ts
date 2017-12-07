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
  selector: 'app-projects',
  //templateUrl: './project.component.html',
  template: `
  <input type="text" [(ngModel)]="searchterm" (keydown)="search($event)">
    <ul *ngFor="let projet of projets">
      <li>{{projet.titre}}</li>
    </ul>
<div *ngIf="projets?.length < 1">
  <p>Sorry, no projets found</p>
</div>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

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
    //cree un faux projet :)
    //this.create("1021","Developpement","toto"," projet d'annotation universitaire");
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
  	create(id:string,titre: string, admin:string, description:string){
      let participant: Array<Object> = ["josaphat", "toto"];
      //admin=this.currentUser;
      this.model = { id,titre, admin,description,participant };
      this.projetService.create(this.model);
  	}

//Modifier un projet
  	edit(projet: string){

  	}

//Supprimer un projet
  	delete(){

  	}

}
