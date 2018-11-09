import { NgModule } from '@angular/core';
import { UiCommonModule } from '../shared/modules/ui-common/ui-common.module';
import { ConfirmationService } from 'primeng/api';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    UiCommonModule
  ],
  providers: [
    LoginService,
    ConfirmationService
  ]
})
export class LoginModule { }
