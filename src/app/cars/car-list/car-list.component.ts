import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Car } from "app/cars/model/car";
import { CarService } from "app/cars/service/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  public cars: Car[];

  constructor(private _router: Router,
    private _carService: CarService) {
  }

  public ngOnInit(): void {
    this._getCars();
  }

  public onDelete(event, code: string, index: number): boolean {
    this._carService.deleteCar(code)
      .subscribe(response => {
        this.cars.splice(index, 1);
      });

    return false;
  }

  private _getCars(): void {
    this._carService.getCars()
      .subscribe((response: Car[]) => {
        this.cars = response;
      });
  }

}
