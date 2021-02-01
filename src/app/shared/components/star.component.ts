import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../products/services/product.service';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private _Servi: ProductService) {
    
  }

  ngOnChanges(): void {

    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    console.log('CLICK');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}