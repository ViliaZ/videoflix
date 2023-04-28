import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.scss']
})
export class VideoCarouselComponent implements OnInit {

  public videos: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // placeholder

  constructor() { }

  ngOnInit(): void {
  }

}
