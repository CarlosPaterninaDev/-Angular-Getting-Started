import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 30;
  imageMargin: number = 2;
  showImage: boolean = true;
  errorMessage: string;

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private _productService: ProductService) {}

  // async ngOnInit(): Promise<void> {
  // this.products = await this._productService.getProducts().toPromise().then( e => e );
  // console.log(this.products);
  // this.filteredProducts = this.products;
  // }
  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (product) => {
        this.products = product;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    console.log(message);
  }
}
