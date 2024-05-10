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

export class OnlineSiteVM {
  Id: number = 0;
  Code: string = "";
  Name: string = "";
  comments: string = "";
  CustomerId?: number = 0;  //####
  CustomerName: string = "";
  zoneId?: number = 0; //####
  carrierZoneId: number = 0;
  StatusId: number = 0;

  contactName: string = "";
  contactEmail: string = "";
  phoneNumber: string = "";
  mobileNumber: string = "";
  faxNumber: string = "";

  addressLine1: string = "";
  addressLine2: string = "";
  TownName: string = "";
  postcode: string = "";
  stateCode: string = "";
  countryName: string = "";

  createdAtUTC?: Date;
  updatedAtUTC?: Date;

  latitude?: number;
  longitude?: number;
  gpsAlert: string = "";
  isGpsLock: boolean = false;

  openTime?: Date;
  closeTime?: Date;
  openTimeStr?: string;
  closeTimeStr?: string;

  defaultStartTimeslot?: Date;
  defaultFinishTimeslot?: Date;
  defaultStartTimeslotStr?: string;
  defaultFinishTimeslotStr: string = "";

  handlingType: number = 0;
  extraHandlingTimeM?: number;

  isSelected: boolean = false;
}