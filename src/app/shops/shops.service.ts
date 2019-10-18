import { Injectable } from "@angular/core";
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { removeSummaryDuplicates } from '@angular/compiler';

@Injectable()
export class ShopsService {
    docRef: AngularFirestoreCollection<any>;
    resultId: any;
    items: Observable<any[]>;
    _self = this;

    constructor(db: AngularFirestore) {
        this.docRef = db.collection("shops");
        this.items = this.docRef.valueChanges();
    }
    getListShop() {
        console.log(this.docRef.ref.id);
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
                let _id = _self.docRef.ref.doc();
                console.log(_id.id);
                _self.docRef.add({ name: newName, description: newDesc, info: newInfo, id: _id.id })
            } else {

            }
        })        
    }

    deleteItemShop (newId: string) {
        console.log(newId);
        this.docRef.doc(newId).delete();
    }
}
