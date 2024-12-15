import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { ProductState } from '../states/product-state';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  productCount: number = 0;
  private destroy$ = new Subject<void>(); 
  //besoin d'utiliser selectSnapshot parce que l'autre méthode ne marche pas
  // du coup je détruis le composant et je le recrée à chaque fois (oui c'est pas foufou)

  constructor(private store: Store) {}

  ngOnInit() {
    this.updateProductCount();

    this.store.select(state => state.products.products).subscribe({
      next: () => {
        this.updateProductCount();
      }
    });
  }

  private updateProductCount() {
    this.productCount = this.store.selectSnapshot(ProductState.getProductsCount);
  }

  ngOnDestroy() {
    //éviter les fuites de mémoire
    this.destroy$.next();
    this.destroy$.complete();
  }
}