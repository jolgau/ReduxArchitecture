import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PublicState } from '../public-state';

const getPublic = createFeatureSelector('public');

export const getProducts = createSelector(
    getPublic,
    (state: PublicState) => state.products
)