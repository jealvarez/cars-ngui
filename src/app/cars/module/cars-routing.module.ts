import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarListComponent } from "app/cars/car-list/car-list.component";
import { HomeComponent } from "app/home/home.component";
import { CarFormComponent } from "app/cars/car-form/car-form.component";

const CAR_ROUTES: Routes = [
  {
    path: 'cars', component: HomeComponent, children: [
      { path: '', component: CarListComponent },
      { path: 'create', component: CarFormComponent },
      { path: ':code', component: CarFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CAR_ROUTES)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule { }