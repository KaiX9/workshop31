import { Component, Input } from '@angular/core';
import { CartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: CartItem[] = []

  process(action: CartItem) {
    let i = this.cart.find(item => item.item == action.item)
    if (action.quantity > 0) {
      if (!i) {
        this.cart.push({ ...action} as CartItem)
      } else {
        i.quantity += action.quantity
      }
    }
    console.info('cart: ', this.cart)
  }
}
