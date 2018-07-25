
import { Component, Inject, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormControl } from '@angular/forms';
import { MatSelect, VERSION } from '@angular/material';

import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';


@Component({
    selector: 'invoice.dialog',
    templateUrl: 'invoice.component.html',
    styleUrls: ['./parking.component.css']

})

export class InvoiceDialog implements OnInit, OnDestroy {


    constructor(
        public dialogRef: MatDialogRef<InvoiceDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.parkingTimes = data.data;
            this.maxInvoice = data.maxInvoice;
            this.monthlyFee = data.monthlyFee;
            this.total = data.total;
            console.log(this.parkingTimes)
    }
    parkingTimes:any;
    maxInvoice:number = 0;
    monthlyFee:number = 0
    total:number = 0;
    ngOnInit() {
    }


    private _onDestroy = new Subject<void>();
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    onClose() {
        console.log('here')
        this.dialogRef.close('daat');
    }


}