import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/models/Product';
import { CreateProductAction, DeleteProductAction, ProductsActionTypes } from '../state/products/products.actions';
import { PublicState } from '../state/public-state';
import { getProducts } from '../state/products/products.selectors';
import { AppState } from 'src/app/services/store/app-state';
import { IncrementCounterAction } from 'src/app/services/store/counter/counter.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  counter$: Observable<number>;
  products$: Observable<Product[]>;

  productName: string;

  constructor(private publicStore: Store<PublicState>, private appStore: Store<AppState>) { 
    this.products$ = this.publicStore.select(getProducts);
    this.counter$ = appStore.select('counter');
  }

  ngOnInit() {
  }

  addProduct(): void {
    this.appStore.dispatch(new IncrementCounterAction());
    
    const product: Product = {name: this.productName};
    this.publicStore.dispatch(new CreateProductAction(product));
  }

  deleteProduct(id: number): void {
    this.publicStore.dispatch(new DeleteProductAction(id));
  }
}
