import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrowlModule } from 'primeng/growl';
import { CalendarModule } from 'primeng/calendar';
import { TimeRangeComponent } from './time-range.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    CalendarModule
  ],
  exports:[TimeRangeComponent],
  declarations: [TimeRangeComponent]
})
export class TimeRangeModule { }
