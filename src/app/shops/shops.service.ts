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

    async setItemShop (newName: string,newDesc: string,newInfo: string, func: Function) {
        let result = {id: null, status: false}
        if(newName != "") {
            await this.docRef.add({ name: newName, description: newDesc, info: newInfo})
                .then(function(docRef){
                   result.id = docRef.id;
                   result.status = true;
                   func(result);
                })
        } 
    }

    getItemShopByName(name: string) {
        let result = {id: null, status: false}
        this.docRef.ref.get().then(function(querySnapshot) {
            console.log('step 1');            
            querySnapshot.forEach(function(doc) {
                if(name == doc.data().name) {
                    result.status = true;
                    result.id = doc.id;
                }
            }); 
        }).then(function() {
            console.log('step 2');            
            console.log(result.status);
        });
    }
}
