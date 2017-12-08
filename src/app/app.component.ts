import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
  ngOnInit() {
    //generer faux token pour test utilisateur
    localStorage.setItem('currentUser',JSON.stringify("toto"));
  }

}
