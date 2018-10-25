import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartLineComponent } from './echart-line.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  declarations: [EchartLineComponent],
  exports:[EchartLineComponent]

})
export class EchartLineModule { }
