export class Film {
  id?: number;
  name: string;
  category: string;
  imgLink: string;
  price: number;
  static id: number | undefined;

  constructor(
    id: number,
    name: string,
    category: string,
    imgLink: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.imgLink = imgLink;
    this.price = price;
  }
}
