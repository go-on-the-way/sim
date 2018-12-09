import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeSplitPipe } from './pipes/datetime-split.pipe';
import { DropdownDataPipe } from './pipes/dropdown-data.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatetimeSplitPipe,
    DropdownDataPipe
  ]
})
export class ComModule { }
