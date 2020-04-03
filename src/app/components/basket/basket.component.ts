import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService
  ) { 
    this.items = this.cartService.getItems()
  }

  ngOnInit(): void {
  }

}
