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
        return this.items;
    }

    setItemShop (newName: string,newDesc: string,newInfo: string) {
        let result = null;
        let _self = this;
        this.docRef.ref.get().then(function(querySnapshot) {
            console.log(result);            
            querySnapshot.forEach(function(doc) {
                if(newName == doc.data().name) {
                    result = doc.id;
                    console.log(result);
                }
            }); 
        }).then(function(){
            console.log(result);            
            if (result == null) {
                _self.docRef.add({ name: newName, description: newDesc, info: newInfo})
            }
        })        
    }
}
