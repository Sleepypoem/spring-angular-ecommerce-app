export class Product {
  id?: number;
  name?: string;
  price?: number = 0.0;
  description?: string;
  image?: string;
  stock?: number = 0;
  categoryId?: number;
  constructor() {}

  public withId(id: number): Product {
    this.id = id;
    return this;
  }

  public withName(name: string): Product {
    this.name = name;
    return this;
  }

  public withPrice(price: number): Product {
    this.price = price;
    return this;
  }

  public withDescription(description: string): Product {
    this.description = description;
    return this;
  }

  public withImage(image: string): Product {
    this.image = image;
    return this;
  }

  public withStock(stock: number): Product {
    this.stock = stock;
    return this;
  }
}
