import { Action } from '@ngrx/store';
import { Product } from 'src/app/services/models/Product';

export enum ProductsActionTypes {
    Create = '[Product] Create',
    Update = '[Product] Update',
    Delete = '[Product] Delete',
    Get = '[Product] Get'
}

export class CreateProductAction implements Action {
    readonly type = ProductsActionTypes.Create;
    constructor(public payload: Product) {
    }
}

export class UpdateProductAction implements Action {
    readonly type = ProductsActionTypes.Update;
    constructor(public payload: Product) {
    }
}

export class DeleteProductAction implements Action {
    readonly type = ProductsActionTypes.Delete;
    constructor(public payload: number) {
    }
}

export class GetProductAction implements Action {
    readonly type = ProductsActionTypes.Get;
    payload = undefined;
}

export type ProductActionUnion = CreateProductAction | UpdateProductAction | DeleteProductAction | GetProductAction;