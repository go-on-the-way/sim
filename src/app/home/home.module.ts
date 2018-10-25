import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { NgxEchartsModule } from 'ngx-echarts';
import { UiCommonModule } from '../shared/modules/ui-common/ui-common.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopNavComponent } from '../shared/components/top-nav/top-nav.component';
import { MenuComponent } from '../shared/components/menu/menu.component';
import { MenuItemComponent } from '../shared/components/menu/menuItem/menuItem.component';
import { BreadcrumbComponent } from '../shared/components/breadcrumb.component';
import { MenuService } from '../shared/services/menu.service';
import { ConfirmationService } from 'primeng/api';
import {
  NavDropdownDirective,
  NavDropdownToggleDirective
} from '../shared/directives/nav-dropdown.directive';
import {
  SidebarToggleDirective,
  SidebarOffCanvasCloseDirective,
  MobileSidebarToggleDirective
} from '../shared/directives/sidebar.directive';

import { DataPanelComponent } from './dataPanel/data-panel.component';

@NgModule({
  declarations: [
    TopNavComponent,
    MenuItemComponent,
    MenuComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective,
    SidebarToggleDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    BreadcrumbComponent,
    HomeComponent,
    DataPanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProgressBarModule,
    NgxEchartsModule,
    UiCommonModule
  ],
  providers: [ MenuService, ConfirmationService ]
})
export class HomeModule {}
