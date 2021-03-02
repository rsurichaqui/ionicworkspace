import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetsPageRoutingModule } from './planets-routing.module';

import { PlanetsPage } from './planets.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PlanetsPageRoutingModule
  ],
  declarations: [PlanetsPage]
})
export class PlanetsPageModule {}
