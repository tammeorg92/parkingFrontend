import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ICustomerParams} from './parking.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class ParkingService {

    customersAPI = '/customer/';

    constructor(
        private http: HttpClient
    ) { }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

    getApi(name: string): string {
        let ipAddr =  window.location.hostname ;
       // ipAddr = '192.168.37.37';
        return `http://${ipAddr}:8080${name}`;
    }

    _tableLoading: boolean = false;
    get tableLoading(): boolean {
        return this._tableLoading;
    }
    set tableLoading(loading: boolean) {
        this._tableLoading = loading;
    }
    _dayFee:number = 0;
    get dayFee():any { 
        return this._dayFee;
    }
    _nightFee:number = 0;
    get nightFee():any { 
        return this._nightFee;
    }
    _maxInvoice:number = 0;
    get maxInvoice():any { 
        return this._maxInvoice;
    }
    _monthlyFee:number = 0;
    get monthlyFee():any { 
        return this._monthlyFee
    }
    _total:number = 0;
    get total():any { 
        return this._total;
    }

    get data(): any {
        return this.tableDataChange.value;
    }

    tableDataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    getParkingData(values:ICustomerParams) {
        this.tableLoading = true;
        let api = this.getApi(`${this.customersAPI}${values.name}`);
        let params = new HttpParams()
            .set('type', values.type)
            .set('dateFrom', values.dateFrom.toString())
            .set('dateTo' , values.dateTo.toString())
        this.http.get<any>(api, { params })
            .pipe(
                map((res) => res.data ),
                catchError(this.handleError)
            ).subscribe(
                (data) => {
                    this.tableDataChange.next(data.data);
                    this._dayFee = data.dayFee;
                    this._nightFee = data.nightFee;
                    this._maxInvoice = data.maxInvoice;
                    this._monthlyFee = data.monthlyFee;
                    this._total = data.total;
                },
                err => {
                    this.tableLoading = false;
                 }
            )
    }
}
