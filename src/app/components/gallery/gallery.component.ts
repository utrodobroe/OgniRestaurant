import { Component, OnInit } from '@angular/core';
import { foods } from 'src/app/foods';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  foods = foods;
  leftValue:1000;

  
  


  constructor() { }

  ngOnInit(): void {

  }

}
