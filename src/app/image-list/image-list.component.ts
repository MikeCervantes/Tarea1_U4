import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../images.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images;

  constructor(private imagesService: ImagesService) { 
    this.images=imagesService.images;
  }
  ngOnInit() {
  }

}
