import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './page/home.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    InfoPanelComponent, 
    RightPanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
