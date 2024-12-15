import { Router, Routes } from '@angular/router';
import { PanierProductComponent } from './panier-product/panier-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'panier-product', component: PanierProductComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: '', redirectTo: 'add-product', pathMatch: 'full'}
];

