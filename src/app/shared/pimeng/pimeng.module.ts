import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';

import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';

import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    ContextMenuModule,
    SliderModule, 
    CalendarModule,
    InputTextModule,
    ConfirmDialogModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PimengModule { }
