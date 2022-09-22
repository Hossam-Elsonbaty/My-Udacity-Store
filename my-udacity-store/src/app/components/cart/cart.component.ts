import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import QItem from 'src/app/models/item';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: QItem[] = [];
  fullName: string = ''
  address: string = ''
  creditCard: string = ''
  totalPrice: number = 0

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getProducts();
    this.calcTotalPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
  }

  calcTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  updateQuantity(): void {
    this.calcTotalPrice();
  }

  removeFromCart(item: QItem): void {
    if (confirm(`Are you sure you want to remove ${item.product.name}?`)) {
      this.cartService.removeProduct(item);
      this.items = this.cartService.getProducts();
      this.calcTotalPrice();
      alert(`${item.product.name} removed.`);
    }
  }

  submitInfo(): void {
    this.cartService.setFullName(this.fullName);
    this.calcTotalPrice();
    this.router.navigate(['confirmation'])
  }
}
