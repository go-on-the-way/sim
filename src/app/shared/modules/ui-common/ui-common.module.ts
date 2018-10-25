import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { GrowlModule } from 'primeng/growl';
import { SharedModule } from 'primeng/shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    DataTableModule,
    PanelModule,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    GrowlModule,
    SharedModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    DataTableModule,
    PanelModule,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    GrowlModule,
    SharedModule
  ],
  declarations: [ ]
})
export class UiCommonModule { }
