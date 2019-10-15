import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ShopsService } from './shops.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  providers: [ShopsService]  
})
export class ShopsComponent {
  items: Observable<any[]>;
  result: Object;

  constructor(private _mS: ShopsService) {
    this.items = this._mS.getListShop();
    this.result = {id: null, status: false};
  }

  addItemShop(newName: string, newDesc: string, newInfo: string) {
    //this._mS.getItemShopByName(newName);
    console.log('step 3');
    this._mS.setItemShop(newName,newDesc,newInfo,this.resultOperation);
    console.log('step 4');
    console.log('result',this.result);
  }
  
  resultOperation(result) {
    console.log('step 5');
    console.log(result.id);
    this.result = result;
  }
}
