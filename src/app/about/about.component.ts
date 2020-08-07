/*import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnChanges {
  images:any[];
  filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}*/

import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myimage1:string="assets/images/pic1.png";
  myimage2:string="assets/images/pic2.png";
  /*IMAGES:any[]=[{
   
    "id":1,  "category":"all","caption": "View from the boat", "url":"assets/images/g1.jpg",
    // {"id":2,  "category":"all", "caption": "Sailing the coast", "url":"assets/images/g2.jpg"},
    // {"id":3,  "category":"all","caption": "The water was nice", "url":"assets/images/g3.jpg"},
    // {"id":4,  "category":"all","caption": "Cool water cavern", "url":"assets/images/g4.jpg"},
    // {"id":5,  "category":"all","caption": "Sunset at the docks", "url":"assets/images/g5.jpg"},
    // {"id":6,  "category":"all","caption": "Camping Trip '17'", "url":"assets/images/g6.jpg"},
    // {"id":7,  "category":"all","caption": "Kim and Jessie", "url":"assets/img/g7.jpg"},
    // {"id":8,  "caption": "View from the top", "url":"assets/img/g7.jpg"},
    // {"id":9,  "caption": "On the trail", "url":"assets/img/g8.jpg"},
    // {"id":10,  "caption": "Our camping spot", "url":"assets/img/g9.jpg"},
    // {"id":11,  "caption": "RV Life", "url":"assets/img/g10.jpg"},
    // {"id":12,  "caption": "Hiking trip 2017", "url":"assets/img/g11.jpg"},
    // {"id":13,  "caption": "Big library", "url":"assets/img/g12.jpg"},
    // {"id":14,  "caption": "Stacks", "url":"assets/img/g13.jpg"},
    // {"id":15,  "caption": "Saturday afternoon", "url":"g14.jpg"},
    // {"id":16,  "caption": "Local library", "url":"assets/img/g15.jpg"},
    // {"id":17,  "caption": "Nice library", "url":"assets/img/g16.jpg"},
  }]*/
  title='A trip down the Memory Lane';
  visibleImages:any[] = [];
  visibleImages1:any[] = [];
  constructor(private imageService: ImageService) {
   // console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit(): void {
  }

  
}

