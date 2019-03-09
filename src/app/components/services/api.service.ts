import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../../typing/insurance';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _environment = environment;

  constructor(
    private _http: HttpClient
  ) {}

  getData() {
    return this._http.get(this._environment.apiDomain);
  }
}
