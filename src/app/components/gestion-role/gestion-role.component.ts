
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
//pour l'ajout de boutons etc..
import {MatButtonModule} from '@angular/material';
import {UsersService} from 'app/services/index';
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
	  selector: 'app-gestion-role',
	  templateUrl: './gestion-role.component.html',
	  styleUrls: ['./gestion-role.component.css']
	})
	export class GestionRoleComponent implements OnInit {


		model: any = {};
		searchterm: string;

		startAt = new Subject();
		endAt = new Subject();

		users: any;
		all:any;

		startobs = this.startAt.asObservable();
		endobs = this.endAt.asObservable();

		results: Object;
    searchTerm$ = new Subject<string>();

		currentProjet: string;
		currentUser: string;
		showSpinner = true;
		searchB=false;

	  constructor(private userService: UsersService, private projetService: ProjetService) {


		 }

		 ngOnInit() {
	     //this.fauxData();
	     //recuperation de tout le projet
	      this.userService.getAll().subscribe((users) => {
	      this.showSpinner = false;
	      this.all = users;
	      this.users = this.all;
	    })



}
			fauxData(){
	      //cree de faux utilisateurs :)

	      this.create("annotator1@gmail.com","test1","annot1");
	      this.create("annotator2@gmail.com","test2","annot2");
				this.create("annotator3@gmail.com","test3","annot3");
	    }

			search($event) {
			this.searchB=false;
	     this.showSpinner = true;
	     let q = $event.target.value;
	     if (q != '') {
	       this.startAt.next(q);
	       this.endAt.next(q + "\uf8ff");
	     }else {
	       this.users = this.all;
	     }
	 }

	 //Ajouter un utlisateur
	   	ajouter(username:string,password: string, email:string){

	       this.model = { email,password, username};
	       this.userService.ajouter(this.model);
	   	}

			select(){
				this.searchB=true;
			}

	}
