export class Film {
  id?: number;
  name: string;
  category: string;
  imgLink: string;
  price: number;
  stars: number;

  constructor(
    id: number,
    name: string,
    category: string,
    imgLink: string,
    price: number,
    stars: number
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.imgLink = imgLink;
    this.price = price;
    this.stars = stars;
  }
}
