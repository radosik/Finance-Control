import { Injectable, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
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
        let docAdd = this.docRef.ref.where('name', '==', newName);
        let result = false;
        let _self = this;
        docAdd.get().then((querySnapshot) => { 
            if (querySnapshot.size == 0) {        
                result = true;
            }
        }).then(function(){           
            if (result) {
                _self.docRef.add({ name: newName, description: newDesc, info: newInfo})
            } else {
                console.log('err');
            }
        })        
    }

    deleteItemShop (newId: string) {
        this.docRef.doc(newId).delete();
    }

    editItemShop (newId: string, newName: string, newInfo: string, newDesc: string, i: string) {
        //console.log(this.rd); 
    }
}
