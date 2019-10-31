import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  constructor( private firestore: AngularFirestore   ) { }

  postClients(data) {
    const docRef = this.firestore.collection("clients").doc(data.newData.IE);

    docRef.get().subscribe(function(doc) {
        if (doc.exists) {
            window.alert("Já existe cadastro com esse IE");
            return null;
        }
          return new Promise<any>((resolve, reject) =>{
              docRef
                .set(data.newData)
                .then(res => {window.confirm('Cliente adcionado!')}, err => reject(err));
        });
    });
 
  }
  getClients() {
    return this.firestore.collection("clients").valueChanges();
  }

  deleteClients(data) {
    return this.firestore.collection("clients").doc(data.data.IE).delete();
  }

  editClients(event) {
    return this.firestore.collection("clients").doc(event.data.IE).update(event.newData);
  }


}
