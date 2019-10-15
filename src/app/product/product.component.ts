import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(db: AngularFireDatabase) { 
    this.itemRef = db.object(`/product`);
    this.items = this.itemRef.valueChanges();
  }
  
  items: Observable<any[]>;
  itemRef: AngularFireObject<any>;

  save = (newCheck: string,newName: string, newCount: string, newSize: string,newUnidCount: string,newCost: string) => {
    let timestamp = new Date(); 
    let unixtime = timestamp.valueOf();    
    let collections = {};

    collections[newCheck] = {
      [newName]: {
        id: unixtime,
          name: newName,
          count: newCount,
          size: newSize,
          unidCount: newUnidCount,
          cost: newCost
      }
    };
    this.itemRef.update(collections);
  }
}