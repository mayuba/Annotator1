import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     isCollapsed = true;
     username:string;
     currentUser: string;
     isUserLoggedIn:boolean = false;
     updateUserStatus: Subject<boolean> = new Subject();
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username=this.currentUser;
  }

    logout() {
      localStorage.removeItem('currentUser');
    }
    Fauxlogin() {
        localStorage.setItem('currentUser',JSON.stringify("toto"));
         }
    isUser(){
      if(this.currentUser)
        return true;
          else
        return false;
      }
}
