import { NgModule } from '@angular/core';
import { ProductListComponent } from './pages/product-list.component';
import { ProductDetailComponent } from './pages/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    ProductRoutingModule,
    SharedModule,
  ],
})
export class ProductModule {}
