import { Component, Input } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input()
  contents: CartItem[] = []

  deleteFromCart(i: number) {
    this.contents.splice(i, 1)
  }
}
