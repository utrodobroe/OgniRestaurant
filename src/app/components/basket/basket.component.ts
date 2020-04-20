import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { products } from 'src/app/products';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products = products;
  
  items;
  
  quantity = 1;

  remove_btn(){
    this.quantity -= 1;
    if (this.quantity == -1){
      this.quantity = 0;
    }
  }

  add_btn(){
    this.quantity +=1;
  }

  constructor(
    private cartService: CartService
  ) { 
    this.items = this.cartService.getItems();
    }

  ngOnInit(): void {
  }

}
