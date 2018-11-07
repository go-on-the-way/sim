import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DataPanelComponent } from './dataPanel/data-panel.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: '首页' },
    children: [
      { path: '', redirectTo: 'dataPanel', pathMatch: 'full' },
      { path: 'dataPanel', data: { title: '数据面板' }, component: DataPanelComponent },
      { path: 'demo', data: { title: '其他' }, component: DemoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
