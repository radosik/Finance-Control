import { Injectable } from "@angular/core";
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class ShopsService {
    docRef: AngularFirestoreCollection<any>;
    resultId: any;
    items: Observable<any[]>;
    _self = this;

    constructor(db: AngularFirestore) {
        this.docRef = db.collection("shops");
        this.items = this.docRef.snapshotChanges().pipe(
            map(
                changes => { return changes.map(a => {
                    const data = a.payload.doc.data();
                    data.id = a.payload.doc.id;
                    return data;
                });
              }
        ));
    }
    getListShop() {
        return this.items;
    }

    setItemShop (newName: string,newDesc: string,newInfo: string) {
        let result = null;
        let _self = this;
        this.docRef.ref.get().then(function(querySnapshot) {         
            querySnapshot.forEach(function(doc) {
                if(newName == doc.data().name) {
                    result = doc.id;
                }
            });             
        }).then(function(){
            console.log(result);            
            if (result == null) {
                _self.docRef.add({ name: newName, description: newDesc, info: newInfo})
            } else {

            }
        })        
    }

    deleteItemShop (newId: string) {
        this.docRef.doc(newId).delete();
    }
}
