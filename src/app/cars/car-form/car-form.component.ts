import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Car } from "app/cars/model/car";
import { CarService } from "app/cars/service/car.service";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
})
export class CarFormComponent implements OnInit {

  public carGroupForm: FormGroup;
  public isNew: boolean = true;
  private _subscription: Subscription;
  private _car: Car;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _carService: CarService) { }

  public ngOnInit(): void {
    this.initializeDefaultForm();
    this.renderForm();
  }

  public onSubmit(): void {
    let car = this.carGroupForm.value;
    delete car._id;
    if (this.isNew) {
      this._carService.createCar(car)
        .subscribe(response => {
          this._router.navigate(['cars']);
        });
    } else {
      this._carService.updateCar(car)
        .subscribe(response => {
          this._router.navigate(['cars']);
        });;
    }
  }

  public onBack(): void {
    this._router.navigate(['cars']);
  }

  private initializeDefaultForm(car?: Car): void {
    this.carGroupForm = this._formBuilder.group({
      _id: [{ value: car ? car._id : '', disabled: true }],
      code: [car ? car.code : '', Validators.required],
      make: [car ? car.make : '', Validators.required],
      model: [car ? car.model : '', Validators.required]
    });
  }

  private renderForm(): void {
    // Verify if it's for edit
    this._subscription = this._activeRoute.params.subscribe(
      (parameters: Params) => {
        let code: string = parameters['code'];
        if (code) {
          this._carService.getCarByCode(code)
            .subscribe((Car: Car) => {
              this.isNew = false;
              this.initializeDefaultForm(Car);
            });
        }
      });
  }

}
