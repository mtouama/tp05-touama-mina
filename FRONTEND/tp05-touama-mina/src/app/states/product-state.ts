import { State, Action, StateContext, Selector } from '@ngxs/store';

import { Product } from '../models/product';
import { AddProduct, RemoveProduct } from '../actions/product-action';
import { Injectable } from '@angular/core';

export interface ProductStateModel {
  products: Product[];
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
@Injectable()
export class ProductState {
  // Selectors pour récupérer des données du state
  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }

  @Selector()
  static getProductsCount(state: ProductStateModel) {
    return state.products.length;
  }

  // Actions pour modifier le state
  @Action(AddProduct)
  add(ctx: StateContext<ProductStateModel>, action: AddProduct) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: [...state.products, action.payload],
    });
  }

  @Action(RemoveProduct)
  remove(ctx: StateContext<ProductStateModel>, action: RemoveProduct) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: state.products.filter((product) => product.id !== action.id),
    });
  }
}
