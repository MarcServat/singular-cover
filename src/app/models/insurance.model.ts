import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceModel {
  private id: number;
  private name: string;
  private brand: string;
  private brandImage: string;
  private kind: string;
  private kindImage: string;
  private price: number;

  private imagePath = '/src/assets/images/';

  constructor() {}

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getBrand() {
    return this.brand;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  getBrandImage() {
    return this.imagePath + this.brandImage;
  }

  setBrandImage(brandImage) {
    this.brandImage = brandImage;
  }

  getKind() {
    return this.kind;
  }

  setKind(kind) {
    this.kind = kind;
  }

  getKindImage() {
    return this.imagePath + this.kindImage;
  }

  setKindImage(kindImage) {
    this.kindImage = kindImage;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }}
