import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = ["../assets/images/image7.jpg",
   "../assets/images/northfolk-1213051-unsplash.jpg",
    "../assets/images/reading.jpg",
    "../assets/images/image5.jpg"
  ];
}