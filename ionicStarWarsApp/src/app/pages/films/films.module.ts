import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmsPageRoutingModule } from './films-routing.module';

import { FilmsPage } from './films.page';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsPageRoutingModule,
    MatExpansionModule,
    MatTableModule,
    Ng2SearchPipeModule
  ],
  declarations: [FilmsPage]
})
export class FilmsPageModule {}
