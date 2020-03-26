import { ActionReducerMap } from "@ngrx/store";
import { PublicState } from './public-state';
import { productsReducer } from './products/products.reducers';

export const publicReducers: ActionReducerMap<PublicState> = {
    products: productsReducer
}