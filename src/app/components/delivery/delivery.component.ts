import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  products = products;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart(product){
      this.cartService.addToCart(product);
    
    }

  ngOnInit(): void {
   

  }

}
