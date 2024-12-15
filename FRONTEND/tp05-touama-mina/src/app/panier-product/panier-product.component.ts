import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductState } from '../states/product-state';
import { Product } from '../models/product';
import { RemoveProduct } from '../actions/product-action';

@Component({
  selector: 'app-panier-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier-product.component.html',
  styleUrl: './panier-product.component.css',
})
export class PanierProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    // Récupérer les produits via selectSnapshot (l'exemple sur stackblitz ne marchait pas)
    this.products = this.store.selectSnapshot(ProductState.getProducts);
    
    console.log('Products in Panier:', this.products);
  }

  delProduct(id: number) {
    this.store.dispatch(new RemoveProduct(id));

    this.products = this.store.selectSnapshot(ProductState.getProducts);
  }
}