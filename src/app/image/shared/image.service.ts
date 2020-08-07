import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id) 
    }
}

const IMAGES =[
    {"id":1,  "category":"all", "url":"assets/images/g1.jpg"},
    {"id":2,  "category":"all", "url":"assets/images/g2.jpg"},
    {"id":3,  "category":"all", "url":"assets/images/g3.jpg"},
    {"id":4,  "category":"all", "url":"assets/images/g4.jpg"},
    {"id":5,  "category":"all", "url":"assets/images/g5.jpg"},
    {"id":6,  "category":"all", "url":"assets/images/g6.jpg"},
    {"id":7,  "category":"all", "url":"assets/images/g7.jpg"},
    {"id":8,  "url":"assets/images/g24.jpg"},
    {"id":9,  "url":"assets/images/g8.jpg"},
    {"id":10,  "url":"assets/images/g9.jpg"},
    {"id":11, "url":"assets/images/g10.jpg"},
    {"id":12, "url":"assets/images/g11.jpg"},
    {"id":13,  "url":"assets/images/g12.jpg"},
  //  {"id":14, "url":"assets/images/g13.jpg"},
   // {"id":15, "url":"assets/images/g14.jpg"},
   // {"id":16,  "url":"assets/images/g15.jpg"},
    {"id":17,  "url":"assets/images/g16.jpg"},
    {"id":18,  "url":"assets/images/g17.jpg"},
    {"id":24,  "url":"assets/images/g23.jpg"},
    {"id":19,  "url":"assets/images/g18.jpg"},
    {"id":20,  "url":"assets/images/g19.jpg"},
    {"id":21,  "url":"assets/images/g20.jpg"},
    {"id":22,  "url":"assets/images/g21.jpg"},
    {"id":23,  "url":"assets/images/g22.jpg"},
    {"id":25,  "url":"assets/images/g25.jpg"},
    {"id":26,  "url":"assets/images/g26.jpg"},
    {"id":27,  "url":"assets/images/g27.jpg"},
    {"id":28,  "url":"assets/images/g28.jpg"},
    {"id":29,  "url":"assets/images/g29.jpg"},
    {"id":30,  "url":"assets/images/g30.jpg"},
    {"id":31,  "url":"assets/images/g31.jpg"},
    {"id":32,  "url":"assets/images/g32.jpg"},
    {"id":33,  "url":"assets/images/g33.jpg"},

]