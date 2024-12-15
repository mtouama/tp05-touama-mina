import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddProductComponent } from "./add-product/add-product.component";
import { CommonModule } from '@angular/common';
import { ProductState } from './states/product-state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tp05-touama-mina';

  ngOnInit(): void {}
}
