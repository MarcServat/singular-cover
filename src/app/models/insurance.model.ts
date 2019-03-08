import {Injectable} from '@angular/core';
import { Insurance } from '../typing/insurance';

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

  constructor(insurance: Insurance) {
    this.id = insurance.id;
    this.name = insurance.name;
    this.brand = insurance.brand;
    this.brandImage = insurance['brand-image'];
    this.kind = insurance.kind;
    this.kindImage = insurance['Kind-image'];
    this.price = insurance.price;
  }

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
