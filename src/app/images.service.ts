import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images=[
    {
      name: 'Imagen 1',
      id: 1,
      description: 'Una imagen chida :v',
      img: 'https://i1.wp.com/l2pbomb.com/wp-content/uploads/2018/10/Overwatch-Wallpapers-HD.jpeg?resize=1170%2C610&ssl=1',
      rank: 3
    },
    {
      name: 'Imagen 2',
      id: 2,
      description: 'Una imagen chida 2 :v',
      img: 'https://images6.alphacoders.com/717/thumb-350-717752.jpg',
      rank: 5
    },
    {
      name: 'Imagen 3',
      id: 3,
      description: 'Una imagen chida 3 :v',
      img: 'https://i.ebayimg.com/images/g/lfsAAOSww3tY6n8x/s-l300.png',
      rank: 1
    }
  ];

  constructor() { }
}
