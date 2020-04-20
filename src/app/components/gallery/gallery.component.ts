import { Component, OnInit } from '@angular/core';
import { foods } from 'src/app/foods';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  foods = foods;

  bgImgs = {
    image:'assets/images/bluewater.jpg'
  };

  leftValue = 0;

  btn__prev() {
    this.leftValue += 475;

    if(this.leftValue == 475){
      this.leftValue = -2850;
    }
  }
  btn__next(){
   this.leftValue -= 475;

   if(this.leftValue == -3325){
    this.leftValue = 0;
   }
  }

  


  constructor() { }

  ngOnInit(): void {

  }

}
