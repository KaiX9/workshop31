import { Component, Output } from '@angular/core';
import { CartItem } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {

  @Output()
  onItemSelection = new Subject<CartItem>()

  fruits: string[] = [
    'acorn_squash', 'apple', 'bell_pepper', 'blueberries', 'broccoli',
    'carrot', 'celery', 'chili_pepper', 'corn', 'eggplant', 'harold',
    'lettuce', 'mushroom', 'onion', 'potato', 'pumpkin', 'radish', 'squash',
    'strawberry', 'sugar_snap', 'tomato', 'zucchini' ]

  addToCart(i: number) {
    const add: CartItem = {
      item: this.fruits[i],
      quantity: 1
    }
    this.onItemSelection.next(add)
  }

  constructor() {
  }
}

