import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmDetailsPageRoutingModule } from './film-details-routing.module';

import { FilmDetailsPage } from './film-details.page';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmDetailsPageRoutingModule
  ],
  declarations: [FilmDetailsPage],
  providers: [EmailComposer]
})
export class FilmDetailsPageModule {}
