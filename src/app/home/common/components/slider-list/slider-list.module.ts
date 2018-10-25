import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderListComponent } from './slider-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SliderListComponent],
  declarations: [SliderListComponent]
})
export class SliderListModule { }
