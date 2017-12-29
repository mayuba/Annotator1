import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import {GestionCategoriesComponent} from '../gestionCategories/gestionCategories.component';
import {GestionCorpusComponent} from '../gestionCorpus/gestionCorpus.component';
//pour l'ajout de boutons etc..
import {MatButtonModule} from '@angular/material';
import {ProjetService} from 'app/services/index';
//import {CategoriesService} from 'app/services/index';
import {AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  categoryName: string;
  categoryColor: string;
	model: any = {};
	//Projects: File[]=[];
  categoriesArray: object[];
 	Corpus: File[]=[];
  currentProjet: string;
  currentUser: string;


  constructor(public dialog: MatDialog, private projetService: ProjetService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.currentProjet = JSON.parse(localStorage.getItem('currentProjet'));
      this.loadProjet();
  }
  ngOnInit() {
  }

  loadProjet(/*callback*/) {
    console.log(this.currentProjet);
    this.model=this.projetService.getModelProjet(this.currentProjet);
    //console.log(model.Annotations[0]);
  }

  generateArray(obj){
    return Object.keys(obj)
      .map((key)=>{ return {key:key, value:obj[key]}});
  }

  //verifie si l'utilisateur actuel est l'administrateur.  Prend "item" en parametre
  //il s'agit de l'item cree par la boucle ngFor sur le modele dans le document html.
  //Cette maniere de faire n'est pas du tout recommandee, mais je n'ai pas reussi a
  //atteindre les elements internes de la collection d'une maniere plus directe.
  currentUserIsAdmin(item){
    let array = this.generateArray(item);
    let adminId: string;
    for(let element of array){
      if(element.key == "admin"){
        adminId=element.value;
        break;
      }
    }
    if(adminId!=undefined && adminId==this.currentUser) return true;
    else return false;
  }

  openCorpusDialog(): void{
    console.log(this.categoriesArray);
    let dialogRef = this.dialog.open(GestionCorpusComponent, {
      width: '250px',
      data: { categoryName: this.categoryName, categoryColor: this.categoryColor }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.categoryColor = result;
    });
   }

  openCategoriesDialog(): void{
    let dialogRef = this.dialog.open(GestionCategoriesComponent, {
      width: '250px',
      data: { categoryName: this.categoryName, categoryColor: this.categoryColor }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.categoryColor = result;
    });
   }

   selectTitre(name: string){
     //creation d'un token pour le texte courant
     localStorage.setItem('currentText',JSON.stringify(name));
   }
 }


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<h3> says:</h3>`
  })
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
