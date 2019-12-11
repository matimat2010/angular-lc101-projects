import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cool Stuff Below';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'http://mattalvarado.art/wp-content/uploads/2018/07/15587418856_5e16b0d009_z.jpg';
  image3 = 'http://mattalvarado.art/wp-content/uploads/2018/07/15424933147_ced29cb6ec_z.jpg';

  constructor() { }

  ngOnInit() {
  }

}