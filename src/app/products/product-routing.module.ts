import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './guard/product-detail.guard';
import { ProductDetailComponent } from './pages/product-detail.component';
import { ProductListComponent } from './pages/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
