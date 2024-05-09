export class ProductRoot {
  products: Product[] = [];
  total: number = 0;
  skip: number = 0;
  limit: number = 0;
}

export class Product {
  id: number = 0;
  title: string = '';
  description: string = '';
  price: number = 0;
  discountPercentage: number = 0;
  rating: number = 0;
  stock: number = 0;
  brand: string = '';
  category: string = '';
  thumbnail: string = '';
}

export class UserRoot {
  users: User[] = [];
  total: number = 0;
  skip: number = 0;
  limit: number = 0;
}

export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
}
