import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductState } from '../states/product-state';
import { AddProduct } from '../actions/product-action';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  private idCounter : number = 0;

  constructor(private store: Store, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id : 0,
      title: '',
      description: '',
      price: 0,
    });
  }

  ngOnInit() { }

  addProduct() {
    let title: string = this.productForm.value['title'];
    let description: string = this.productForm.value['description'];
    let price: number = this.productForm.value['price'];

    const product: Product = {
      id: ++this.idCounter, 
      title: title,
      description: description,
      price: price
    };

    console.log(product);
    

    this.store.dispatch(new AddProduct(product));

    const products = this.store.selectSnapshot(ProductState.getProducts);
    console.log('Current products:', products);

    this.productForm.reset();
  }

}