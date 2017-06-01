import { CarFormComponent } from './../car-form/car-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CarListComponent } from "app/cars/car-list/car-list.component";
import { CarsRoutingModule } from "app/cars/module/cars-routing.module";
import { CarService } from "app/cars/service/car.service";

@NgModule({
  declarations: [
    CarListComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule
  ],
  providers: [CarService]
})
export class CarsModule { }
