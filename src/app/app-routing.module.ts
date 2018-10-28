import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Guard } from './router-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'src/app/login/login.module#LoginModule'},
  { path: 'home', loadChildren: 'src/app/home/home.module#HomeModule', canActivate: [Guard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
