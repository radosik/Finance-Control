import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('itemSet', {static: false}) el:ElementRef;

  constructor(private _mS: ShopsService,  private rd: Renderer2) {
    this.items = this._mS.getListShop();
  }

  addItemShop(newName: string, newDesc: string, newInfo: string) {
      this._mS.setItemShop(newName,newDesc,newInfo);     
  }

  deleteItemShop(newId: string) {
    this._mS.deleteItemShop(newId);
  }

  editItemShop(newId: string, newName: string, newDesc: string, newInfo: string, i: string) {
    this._mS.editItemShop(newId, newName, newDesc, newInfo, i);
  }


  ngAfterViewInit() {
    console.log(this.el.nativeElement);
  }

}
