import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import{Observable} from 'rxjs/Observable';


@Injectable()

export class AjoutDocumentService {
  //corpusCollection:AngularFirestoreCollection<IDocument>
  //documentListe:Observable<Item[]>;

  constructor() {

  }

  //
  getDocumentMeta(path:string){

  }

  addText(projectId:string, textId:string, sourcePath:string, destPath: string){

  }

  removeText(projectId: string, textId:string){

  }

}
