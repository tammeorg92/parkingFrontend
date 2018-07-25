import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { ParkingComponent } from './parking.component';
import { ParkingService } from './parking.service';

import {InvoiceDialog} from './dialog/invoice.component';

//Angular material 

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule
    ],
    declarations: [
        ParkingComponent,
        InvoiceDialog
    ],
    exports: [
        ParkingComponent],
    providers: [
        ParkingService
    ],
    entryComponents:[InvoiceDialog],


})
export class ParkingModule {
}