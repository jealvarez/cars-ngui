import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from "app/http/http-client";
import { Observable } from "rxjs/Observable";
import { Car } from "app/cars/model/car";
import 'rxjs/Rx';

@Injectable()
export class CarService {

  private _CAR_RESOURCE: string = "http://127.0.0.1:3000/v1/cars/";

  constructor(private _httpClient: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this._httpClient.get(this._CAR_RESOURCE)
      .map((response: Response) => response.json());
  }

  public getCarByCode(code: string): Observable<Car> {
    return this._httpClient.get(this._CAR_RESOURCE.concat("/" + code))
      .map((response: Response) => response.json())
  }

  public createCar(car: Car): Observable<Car> {
    return this._httpClient.post(this._CAR_RESOURCE, car)
      .map((response: Response) => response.json());
  }

  public updateCar(car: Car): Observable<Car> {
    return this._httpClient.patch(this._CAR_RESOURCE.concat('/' + car.code), car)
      .map((response: Response) => response.json());
  }

  public deleteCar(code: string): Observable<string> {
    return this._httpClient.delete(this._CAR_RESOURCE.concat("/" + code))
      .map((response: Response) => response.json());
  }

}
