import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import QItem from 'src/app/models/item';
import Product from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productS: ProductService, private cartS: CartService) { }

  ngOnInit(): void {
    this.productS.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(item: QItem) {
    this.cartS.addProduct(item);
  }

}
