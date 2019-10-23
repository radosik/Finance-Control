import { Component } from '@angular/core';
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

  constructor(private _mS: ShopsService) {
    this.items = this._mS.getListShop();
  }

  addItemShop(newName: string, newDesc: string, newInfo: string) {
      this._mS.setItemShop(newName,newDesc,newInfo);     
  }

  deleteItemShop(newId: string) {
    this._mS.deleteItemShop(newId);
  }

  editItemShop(newId: string, newName: string, newDesc: string, newInfo: string) {
    this._mS.editItemShop(newId, newName, newDesc, newInfo);
  }

}
