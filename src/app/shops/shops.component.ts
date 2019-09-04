import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent {

  constructor(private db: AngularFireDatabase) { 
    this.itemRef = db.object(`/shops`);
    this.items = db.list('shops').valueChanges(); 
  }

  items: Observable<any[]>;
  itemRef: AngularFireObject<any>;

  save = (newName: string, newDesc: string, newInfo: string) => {
    let timestamp = new Date(); 
    let unixtime = timestamp.valueOf();    
    let collections = {}; 
    collections[unixtime] = {
        id: unixtime,
        name: newName,
        description: newDesc,
        info: newInfo,
    };
    this.db.database.ref('shops').child('1567506263213').child('name').equalTo('Dia').on('value', function(snapshot) {
      alert('error');
    });
    this.itemRef.update(collections);
  }
}
