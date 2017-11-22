import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-projet',
  templateUrl: './mes-projet.component.html',
  styleUrls: ['./mes-projet.component.css']
})
export class MesProjetComponent implements OnInit {
  
  myprojects: File[]=[];
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  edit(){ }
  IsAdmin(){}
  select(id: string){}
  
}
