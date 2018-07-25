import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingComponent} from './parking/parking.component';
//Components


const routes: Routes = [
  { path: '**', component: ParkingComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }