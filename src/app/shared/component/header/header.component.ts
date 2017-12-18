import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthentificationService } from '../../../services/index'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     isCollapsed = true;
     username;
     currentUser: string=null;
     public static isUserLoggedIn:boolean = false;
     public static updateUserStatus: Subject<boolean> = new Subject();
  constructor(private router: Router,
   private authService: AuthentificationService ) {
    HeaderComponent.updateUserStatus.subscribe(res => {
      var cU = localStorage.getItem('currentUser');
      this.username = JSON.parse(localStorage.getItem('currentUser'));

      //this.username = cU == null ? '' : JSON.parse(cU).username;
    })
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

    logout() {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentProjet');
      localStorage.removeItem('currentText');
      //manque supprimer aussi le localStorage de firebase
      this.authService.logout();
  		HeaderComponent.isUserLoggedIn = false;
    }
    isUser(){
        return HeaderComponent.isUserLoggedIn;
    }
}
