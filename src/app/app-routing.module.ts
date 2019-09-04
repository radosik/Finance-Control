import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { AuthUsersComponent } from './auth-users/auth-users.component';
import { ProductComponent } from './product/product.component';
import { TotalsComponent } from './totals/totals.component';

const routes: Routes = [
  { path: 'totals', component: TotalsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'auth-users', component: AuthUsersComponent },
  { path: '', redirectTo: '/auth-users', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
