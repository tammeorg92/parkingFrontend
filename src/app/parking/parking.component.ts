import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ParkingService } from './parking.service';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material';
import {InvoiceDialog} from './dialog/invoice.component';

export interface Users {
  name: string;
  group: string;
}

export interface ICustomerParams {
  name: string;
  type: string;
  dateFrom: string;
  dateTo: string;
}


@Component({
  selector: 'parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  constructor(
    private service: ParkingService,
    public dialog: MatDialog
  ) { }
  users: Users[] = [
    { group: 'regular', name: 'Customer_1' },
    { group: 'premium', name: 'Customer_2' },
    { group: 'premium', name: 'Customer_5' }
  ];


  displayedColumns: string[] = ['startTime', 'endTime', 'dayFee', 'nightFee', 'total'];


  ngOnInit() {
    this.tableData = new TableDataSource(this.service);
    this.getParkingData();
  }
  tableData: TableDataSource | null;

  selected = this.users[0]['name'];
  selectedGroup: string = this.users[0]['group'];

  userChanged(value: string) {
    let foundUser = this.users.find((user) => user.name === value);
    this.selectedGroup = foundUser.group;
    this.getParkingData();
  }

  getParkingData() {
    let params: ICustomerParams = {
      name: this.selected,
      type: this.selectedGroup,
      dateFrom: '2018-06-01',
      dateTo: '2018-06-30'
    };
    this.service.getParkingData(params);
  }
  openInvoice() {
    let dialogRef = this.dialog.open(InvoiceDialog, {
      width: '600px',
      height: '500px',
      data: {
        data: this.service.data,
        maxInvoice:this.service.maxInvoice,
        monthlyFee:this.service.monthlyFee,
        total:this.service.total
      }
    })
    dialogRef.afterClosed()
      .subscribe((result: any) =>
        console.log('invoice closed')
      )

  }

  get dayFee() { return this.service.dayFee};
  get nightFee() { return this.service.nightFee;}
  get maxInvoice() { return this.service.maxInvoice;}
  get monthlyFee() { return this.service.monthlyFee;}

}

export class TableDataSource extends DataSource<any> {
  constructor(private _service: ParkingService) {
    super();
  }
  connect(): Observable<any[]> {
    return this._service.tableDataChange;
  }
  disconnect() { };
}
