import { ProductsActionTypes, ProductActionUnion } from './products.actions';

export const productsReducer = (state = [], action: ProductActionUnion) => {
    switch (action.type) {
        case ProductsActionTypes.Create:
            return [ ...state, action.payload];
        default:
            return state;
    }
}
