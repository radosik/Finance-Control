import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent {

  constructor(db: AngularFireDatabase) { 
    this.itemRef = db.object(`/products`);
  }

  itemRef: AngularFireObject<any>;
}
