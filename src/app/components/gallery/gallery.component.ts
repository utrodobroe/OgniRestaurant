import { Component, OnInit } from '@angular/core';
import { foods,  } from 'src/app/foods';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  foods = foods;

  leftValue = 0;

  toggle() {
    this.leftValue += 1000;
  }
  toggle2(){
    this.leftValue -= 1000;
  }
  


  constructor() { }

  ngOnInit(): void {

  }

}
